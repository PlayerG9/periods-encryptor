import './index.css'
import React from 'react'
import periodic_table from '../periodic-table.json'


export default class Number2Period extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return <div className='encryptor'>
            <div className='input-field'>
                <input type="text" onChange={this.onNumberChange}></input>
                <input type="text" onChange={this.onPeriodChange}></input>
            </div>
        </div>
    }
    
    onNumberChange(event){
        console.log(event)
    }

    onPeriodChange(event){
        console.log(event)
    }
}
