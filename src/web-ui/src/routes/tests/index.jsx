import './index.css'
import periodic_table from '../periodic-table.json'


export const isEnabled = false


export default function TestPage(){
    return <div className='test-list'>
        {/* {((e) => <Element {...e}/>)(periodic_table[0])} */}
        {periodic_table.map(element => 
            <Element {...element}/>
        )}
    </div>
}


function Element(props){
    return <div className='element'>
        <div className='border'/>
        <div className='background'/>
        <p className='number no-select'>{props.number}</p>
        <p className='symbol no-select'>{props.symbol}</p>
    </div>
}
