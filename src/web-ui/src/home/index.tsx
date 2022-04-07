import './index.css'
import PeriodsTableImage from './periods_table.png'
import Element from '../components/element'


export default function HomePage(){
    return <div className='homepage'>
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
            <img className='periods-table-image' src={PeriodsTableImage} alt=""/>
        </div>
    </div>
}
