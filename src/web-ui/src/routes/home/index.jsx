import { Link } from 'react-router-dom'
import './index.css'
import PeriodsTable from './periods_table.png'


export default function HomePage(){
    return <div className='homepage'>
        <h1 className='link-encrypt'>
            <Link to="encryptor">Encrypt</Link>
        </h1>
        <img className='periods-table' src={PeriodsTable} alt=""/>
    </div>
}
