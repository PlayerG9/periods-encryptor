import './index.css'
import AppIcon from './icon.png'


export default function NavBar(){
    return <div className='navbar'>
        <img className='icon' src={AppIcon} alt=""/>
        <h1 className='title'>Periods-Encryptor</h1>
    </div>
}
