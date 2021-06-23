import React, { Component } from 'react'

 class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    openWelcome=()=>{
        this.props.history.push({
            pathname:'/'
        })
    }
    render() {
        console.log("this.props",this.props);
        return (
            <div>
               <div>
                  <label>First Name</label> <input type='text' name="firstname" placeholder="firstName"></input>
                  <label>Last Name</label> <input type="text" name="lastname" placeholder="lastName"></input>
                  <label>Password</label> <input type="password" name="password" placeholder="password"></input>
                  <label>Confirm Password</label> <input type="password" name="confirmPassword" placeholder="confirmPassword"></input>
                 <button onClick={this.openWelcome}>Submit</button>

                   </div> 
            </div>
        )
    }
}

export default Signup
