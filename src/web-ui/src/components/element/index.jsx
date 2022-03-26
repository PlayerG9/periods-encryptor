import './index.css'


export default function Element(props){
    return <div className='element'>
        <div className='border'/>
        <div className='background'/>
        <span className='number no-select'>{props.number}</span>
        <span className='symbol no-select'>{props.symbol}</span>
    </div>
}
