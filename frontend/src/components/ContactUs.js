import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
          <div>
            <form method="POST" action="https://formspree.io/aiaother@gmail.com">

              <div align="center">
                <div className="input-fields">
                  <label for="formName">Name *</label><br/>
                  <input type="text" className="frm-control frm-control-sm" placeholder="Name*" />
                </div>
                <div>
                  <label for="formEmail">Email Address *</label> <br/>
                  <input type="email" className="frm-control frm-control-sm" placeholder="Email Address*" />
                </div>
                <div>
                  <label for="formMessage">What's Up?</label><br/>
                  <textarea className="frm-control frm-control-sm" rows="2" placeholder="What's Up?"></textarea>
                </div>
              </div>

              <div align="center">
                <button type="submit" className="btn1 btn1-outline-light btn-sm">Submit</button>
              </div>

            </form>
          </div>
        );
    }
}

export default ContactUs;
