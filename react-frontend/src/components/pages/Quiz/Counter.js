import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  
  increment() {
    
    
      this.setState((prevState) => ({
        count : prevState.count + Number(this.props.addVal)
      }))

      
  
   
  }

  incrementMultiple(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  render() {
    return (
      <div>
        <div>count : {this.state.count}</div>
        <div><button onClick={() => this.incrementMultiple()}> Increment</button></div>
        
      </div>
    )
  }
}

export default Counter