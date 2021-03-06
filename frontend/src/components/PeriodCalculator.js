import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
const PrettoSlider = withStyles({
    root: {
        color: '#357728',
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
        height: 'auto',
        backgroundColor: '#DBF4D5',
    },
})(Grid);
const GridFormContainer = withStyles({
    root: {
        height: 340,
        padding: 80,
        color: '#3B812E',
        backgroundColor: '#C2E8BA',
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
        }

    }
    calculate = (tampons, pads) => {
        return tampons * 0.50 + pads * 0.60;
    }
    handlePadsChange = (event, value) => {
        this.setState({ pads: value });
    }
    handleTamponsChange = (event, value) => {
        this.setState({ tampons: value });
    }

    render() {

        return (
            <div id="calc-section">
                <div className="green-arrow">
                    <img src="green-arrow.png" height="65px" alt="Period Calculator" />
                </div>
                <Typography style={{ marginTop: 10, marginBottom: 25 }} color="inherit" align="center" variant="h4" marked="center" id="calculator-top">
                    Period Calculator
              <span className="Typography-markedH4Center-10" id="calc-underline"></span>
                </Typography>
                <p id="calculator-header" align="center" >
                    Use our calculator to discover how <br /> much you spend on menstrual care products per year!
              </p>

                <GridContainer container spacing={0} >
                    <Grid className="calculator-left" item lg={6} sm={12}>
                        <GridFormContainer container>
                            <h4 id="calculator-text-left-header">Select the amount of Tampons and/or Pads you use per month.</h4>
                            <Grid item xs={12}>

                                <Typography variant={"h6"} align={"left"} id="calculator-text">Tampons</Typography>
                                <PrettoSlider valueLabelDisplay="auto" aria-label="tampons" defaultValue={10} max={50} onChange={this.handleTamponsChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant={"h6"} align={"left"} id="calculator-text">Pads</Typography>
                                <PrettoSlider valueLabelDisplay="auto" aria-label="Pads" defaultValue={10} max={50} onChange={this.handlePadsChange} />
                            </Grid>
                        </GridFormContainer>
                    </Grid>
                    <Grid className="calculator-right" item lg={6} sm={12}>
                        <GridResultContainer container spacing={2} >
                            <h4 id="calculator-text">Be amazed at the amount of money you cound be saving!</h4>
                            <Grid item sm={6} xs={12} align="center">
                                <Typography id="calculator-text-header">Your annual expenses:</Typography>
                                <Typography variant={"h3"} align={"center"} id="calculator-text">${((this.state.pads * 0.60 + this.state.tampons * 0.50) * 12).toFixed(2)}</Typography>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Typography align="center" id="calculator-text-header">Your lifetime expenses:</Typography>
                                <Typography variant={"h3"} align={"center"} id="calculator-text">${((this.state.pads * 0.60 + this.state.tampons * 0.50) * 12 * 40).toFixed(2)}</Typography>
                            </Grid>
                            <Grid container >
                                <Typography xs={12} variant="overline" id="calculator-text"> <b>* Averages are based off of US Costs and quantified in US Dollars</b></Typography>
                            </Grid>
                        </GridResultContainer>
                    </Grid>
                </GridContainer>
            </div>

        );
    }
}
export default PeriodCalculator;
