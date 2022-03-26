import './index.css'
import { Link } from 'react-router-dom'
import PeriodsTable from '../periods_table.png'
import PeriodElement from '../navbar/icon.png'
import Element from '../../components/element'


export default function HomePage(){
    return <div className='homepage'>
        <div className='links'>
            <Link to="/encryptor">
                <span>AU</span>
                <span className='arrow'>⇒</span>
                <span className='image'>
                    <img src={PeriodElement} alt=""/>
                </span>
            </Link>
            {/* <Link to="/period2number">
                <span className='image'>
                    <img src={PeriodElement} alt=""/>
                </span>
                <span className='arrow'>⇒</span>
                <span className='number'>79</span>
            </Link> */}
        </div>
        <div className='description'>
            <p>
                This Programm can convert text to elements of the periodic table.
                <br/>
                For example "Hentai" would be converted to
                <div style={{display: "flex", gap: "2px"}}>
                    <Element number={2} symbol="He"/>
                    <Element number={7} symbol="N"/>
                    <Element number={73} symbol="Ta"/>
                    <Element number={53} symbol="I"/>
                </div>
                with the corrosponding number 277353
            </p>
            <img className='periods-table-image' src={PeriodsTable} alt=""/>
        </div>
    </div>
}
