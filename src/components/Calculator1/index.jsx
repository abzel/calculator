import React from 'react'

export class Calculator1 extends React.Component {

    constructor() {
        super()
        this.state = {
            inputvalue1: 1,
            inputvalue2: 1,
            result: 0
        }
    }

    inputHandler = (e) => {
        this.setState(() => ({[e.target.name]: parseInt(e.target.value)}))
    }
    onPlus = () => {
        this.setState(() => ({result: parseInt(this.state.inputvalue1) + parseInt(this.state.inputvalue2)}))
    }
    onMinus = () => {
        this.setState(() => ({result: parseInt(this.state.inputvalue1) - parseInt(this.state.inputvalue2)}))
    }
    onMult = () => {
        this.setState(() => ({result: parseInt(this.state.inputvalue1) * parseInt(this.state.inputvalue2)}))
    }
    onDivis = () => {
        this.setState(() => ({result: parseInt(this.state.inputvalue1) / parseInt(this.state.inputvalue2)}))
    }
    render() {
        return <div>
            <h1>Calculate 1</h1>
            <input 
            type="number" 
            value={this.state.inputvalue1} onChange={this.inputHandler} name="inputValue1"/>
            <button onClick={this.onPlus}>+</button>
            <button onClick={this.onMinus}>-</button>
            <button onClick={this.onMult}>*</button>
            <button onClick={this.onDivis}>/</button>
            <input 
            type="number" 
            value={this.state.inputvalue2} onChange={this.inputHandler} name="inputValue2"/>
            <h1 style={{textAlign: 'center', width: 420}}>sum:{this.state.result}</h1>
            </div>
    }
}
