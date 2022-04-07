import './App.css'
import './generell.css'

import NarBar from './navbar'
import HomePage from './home'
import Encryptor from './encryptor'


export default function App() {
    return <div className='app'>
        <NarBar/>
        <HomePage/>
        <Encryptor/>
    </div>
}
