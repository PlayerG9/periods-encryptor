import './index.css'
import AppIcon from './icon.png'
import { Link } from 'react-router-dom'


export default function NavBar(){
    return <div className='navbar'>
        <Link className='icon' to="/">
            <img src={AppIcon} alt=""/>
        </Link>
        <h1 className='title'>Periods-Encryptor</h1>
    </div>
}
