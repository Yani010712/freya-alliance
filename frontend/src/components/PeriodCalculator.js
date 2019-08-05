import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles} from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';





const PrettoSlider = withStyles({
    root: {
        color: '#24857a',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const GridContainer = withStyles({
    root: {
        height: 340,
        backgroundColor: '#bce3e0',
    },
})(Grid);

const GridFormContainer = withStyles({
    root: {
        height: 340,
        padding: 80,
        color: '#e56589',
        backgroundColor:'#e9f7f6',
    },
})(Grid);

const GridResultContainer = withStyles({
    root: {
        height: 340,
        padding: 80,
       
    },
})(Grid);



class PeriodCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tampons: 10,
            pads: 10,
            // result: this.calculate(this.state.tampons,this.state.pads),
        }

    
    }

    calculate = (tampons,pads) =>{
        return tampons * 0.50 + pads * 0.60;
    }


    handlePadsChange = (event, value) => {
        // console.log(value);
        this.setState({pads: value});
        // this.setState({result: this.calculate(this.state.tampons,this.state.pads)})
    }

    handleTamponsChange = (event, value) => {
        this.setState({tampons: value});
        // this.setState({result: this.calculate(this.state.tampons,this.state.pads)})
    }
    

    render() {

        return (
            <div >
            <Typography style={{ marginTop: 10, marginBottom: 50}}color="inherit" align="center" variant="h4" marked="center">
            Period Calculator
            <span className="Typography-markedH4Center-116"></span>
            </Typography>
            <Typography color="inherit" align="center" variant="h5" >
            Check how much you spend on tampons or pads per year.
            </Typography>
            <Typography color="inherit" align="center" variant="h5" >
            Select or type in how much you spend a month:
            </Typography>
            <GridContainer container spacing={0}>
                <Grid item xs={6}>
                    <GridFormContainer container>
                        <Grid item xs={12}>
        
                            <Typography variant={"h6"} align={"left"}>Tampons</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="tampons" defaultValue={10} max={50} onChange={this.handleTamponsChange } />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={"h6"} align={"left"}>Pads</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="Pads" defaultValue={10} max={50} onChange={this.handlePadsChange } />
                        </Grid>
                    </GridFormContainer>
                </Grid>
                <Grid item xs={6}>
                    <GridResultContainer container spacing={2} xs={12}>
                        <Grid item xs={6}>
                            <Typography>Your annual expenses*:</Typography>
                            <Typography variant={"h3"} align={"left"}>${((this.state.pads * 0.60 + this.state.tampons * 0.50)*12).toFixed(2)}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Your lifetime expenses*:</Typography>
                            <Typography variant={"h3"} align={"left"}>${((this.state.pads * 0.60 + this.state.tampons * 0.50)*12*40).toFixed(2)}</Typography>
                        </Grid>
                        <Grid container xs={12}>
                            <Typography variant={"'overline'"} align={"center"}>*the average price of tampons and pads was considered</Typography>
                        </Grid>
                    </GridResultContainer>

                </Grid>
            </GridContainer>

            </div>

            

        );
    }
}
export default PeriodCalculator;