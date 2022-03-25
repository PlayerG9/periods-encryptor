import './index.css'
import PeriodsTable from './periods_table.png'


export default function HomePage(){
    return <div className='homepage'>
        <h1>Periods-Encryptor</h1>
        <img className='periods-table' src={PeriodsTable} alt=""/>
    </div>
}
