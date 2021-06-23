import React, { Component } from 'react'

class Welcome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        // console.log("props",this.props.obj);
        console.log("this.props",this.props);
       
        return (
            <div>
                HELLO {this.props.location.state}
            </div>
        )
    }
}
export default Welcome;

