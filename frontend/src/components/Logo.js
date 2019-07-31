import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div>
            <a className="navbar-brand mr-auto" href="/">
                <img src="./logo/freya_logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
        
            </a>
                
            </div>
        );
    }
}

export default Logo;