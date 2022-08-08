import React, { Component } from "react";
class Welcome extends Component{
    render(){
        return (
            <h1>
                This is welcome {this.props.name} {this.props.heroname}
            </h1>

        )
    }

}
export default Welcome