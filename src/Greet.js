import { Component } from "react";
 

class Greet extends Component{
    constructor(){
        super()
        this.state={
            message:"hello i am state component",
            count:0,
            make: "Yamaha",
            model: "R15",
            color: "blue"
        }
    }
    btnChange(){
        this.setState({
            message:"I am Changed"
        })
    }
    incree(){
        this.setState({
            count:this.state.count+1
        })
    }

    decree(){
        this.setState({
            count:this.state.count>0?this.state.count-1:0
        })
    }
    changeColor(){
        this.setState({
            color:"red"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.btnChange()}>change</button>
                <h2>{this.state.count}</h2>
                <button onClick={()=>this.incree()}>Increment</button>
                <button onClick={()=>this.decree()}>Decrement</button>
                <h2>Bike Details</h2>
                <h3>{this.state.make}</h3>
                <h3>{this.state.model}</h3>
                <h3>{this.state.color}</h3>
                <button onClick={()=>this.changeColor()}>Change Color</button>
            </div>
            
        )
    }
}


export default Greet;