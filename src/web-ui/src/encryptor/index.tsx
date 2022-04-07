import './index.css'
import React from 'react'
import periodic_elements from './periodic-table.json'
import Element from '../components/element'


interface ElementData {
    number: number
    symbol: string
}
interface ElementDataIndex {
    [index: string]: ElementData
}
type Result = ElementData[]
interface EncryptorInterface {
    text: string
    results: Result[]
}


const elementIndex: ElementDataIndex = {}
const elementLowerIndex: ElementDataIndex = {}
for(let element of periodic_elements){
    elementIndex[element.symbol] = element
    elementLowerIndex[element.symbol.toLowerCase()] = element
}


export default class Encryptor extends React.Component {
    state: EncryptorInterface

    constructor(props: any){
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
            <div className='input-field'>
                <input type="text" value={this.state.text} onChange={this.onChange} autoFocus/>
                <p>{this.state.results.length || "No"} Result{this.state.results.length !== 1 ? "s" : ""}</p>
                <div className='result-list'>
                    {this.state.results.map((result: ElementData[], key: any) =>
                        <div key={key} className='result-item'>
                            <span>{result.map((r: ElementData) => r.number).join('')}</span>
                            <div className='element-list'>
                                {result.map((element: ElementData, key: any) =>
                                    <Element key={key} {...element}/>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    }

    onChange(event: any){
        const text: string = event.target.value

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

    findMatches(text: string): Result[]{
        const matches: Result[] = []  // shell/container of matches
        // container is passed and gets elements in the function
        this.findMatchesRecursion(text, matches, [])
        return matches
    }

    findMatchesRecursion(text: string, list: Result[], current: ElementData[]){
        if(!text){  // end of input
            if(current.length)  // and a full match is found
                list.push(current)  // then add
            return  // and return to prevent further recursion
        }

        // search for element with 1 letter
        const element: ElementData = elementLowerIndex[text[0]]
        if(element){  // only if found search further
            this.findMatchesRecursion(
                text.slice(1),  // exlude the first letter (found element)
                list,  // pass the list that contains all matches
                current.concat(element)  // pass the extended version of the current match
            )
        }

        // text long enough
        if(text.length >= 2){
            // search for element with 2 letters
            const element: ElementData = elementLowerIndex[text.slice(0, 2)]
            if(element){  // only if found search further
                this.findMatchesRecursion(
                    text.slice(2),  // exlude the first 2 letters (found element)
                    list,  // pass the list that contains all matches
                    current.concat(element)  // pass the extended version of the current match
                )
            }
        }
    }
}
