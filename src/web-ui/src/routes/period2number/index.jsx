import './index.css'
import React from 'react'
import PeriodsTable from '../periods_table.png'
import periodic_elements from '../periodic-table.json'
import Element from '../../components/element'


const elementIndex = {}
const elementLowerIndex = {}
for(let element of periodic_elements){
    elementIndex[element.symbol] = element
    elementLowerIndex[element.symbol.toLowerCase()] = element
}


export default class Period2Number extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: "",
            results: []
        }

        this.onChange = this.onChange.bind(this)
    }

    render(){
        // console.log(this.state)
        return <div className='period2number'>
            <img className='periods-table-image' src={PeriodsTable} alt=""/>
            <div className='input-field'>
                <input type="text" value={this.state.text} onChange={this.onChange} autoFocus/>
                <p>{this.state.results.length || "No"} Result{this.state.results.length !== 1 ? "s" : ""}</p>
                <div className='result-list'>
                    {this.state.results.map((result, key) =>
                        <div key={key} className='result-item'>
                            <span>{result.map(r => r.number).join('')}</span>
                            <div className='element-list'>
                                {result.map((element, key) =>
                                    <Element key={key} {...element}/>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    }

    onChange(event){
        const text = event.target.value

        const textLower = text.toLowerCase()

        // validate input (only letters)
        if(textLower.match(/[^a-z]/g)?.length)
            return

        // update input-text
        this.setState({
            text: text
        })

        const matches = this.findMatches(textLower)
        this.setState({
            results: matches
        })
    }

    findMatches(text){
        const matches = []
        this.findMatchesRecursion(text, matches, [])
        return matches
    }

    findMatchesRecursion(text, list, current){
        // end of text reached? then add
        if(!text && current.length){
            list.push(current)
            return
        }

        let a = text[0]
        
        const element = elementLowerIndex[a]
        if(element){
            this.findMatchesRecursion(text.slice(1), list, current.concat(element))
        }

        // text long enough
        if(text.length >= 2){
            let b = text.slice(0, 2)

            const element = elementLowerIndex[b]
            if(element){
                this.findMatchesRecursion(text.slice(2), list, current.concat(element))
            }
        }
    }
}
