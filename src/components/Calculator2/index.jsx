import React, { useState } from 'react'

export const Calculator2 = () => {


    const [inputValues, setInputValues]= useState({
        input1: 2,
        input2: 2,
    })

    const [result, setResult] = useState('Здесь должен быть ответ')

    const inputHandler = (e) => {
        // this.setState(() => ({[e.target.name]: parseInt(e.target.value)}))
        setInputValues({...inputValues, [e.target.name]: e.target.value})
    }

    return (
    <div>
    <h1>Calculate 2</h1>
    <input type="number" value={inputValues.input1} onChange={inputHandler} name="input1"
    />
    <button>+</button>
    <button>-</button>
    <button>*</button>
    <button>/</button>
    <input type="number" value={inputValues.input2} onChange={inputHandler} name="input2"
    />
    <h1 style={{textAlign: 'center', width: 420}}>sum:{result}</h1>
    </div>
    )
}