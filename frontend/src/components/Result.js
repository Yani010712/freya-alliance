import React, { Component } from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
          age: '',
          activity:'',
          bladder: '',
          flow:'',
          birth: '',
          cervical:'',
          budget:'',
          navigate: false
        }
    }

    componentDidMount = () => {
        // const age = sessionStorage.getItem("age");
        // const activity = sessionStorage.getItem("activity");
        // const json = sessionStorage.getItem("bladder");
        // const json = sessionStorage.getItem("flow");
        // const json = sessionStorage.getItem("birth");
        // const json = sessionStorage.getItem("cervical");
        // const json = sessionStorage.getItem("budget");
        
        // const budget = JSON.parse(json);
        // if (budget) {
        //   this.setState({ budget: budget });
        // }
      };


    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Result;