import './App.css'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import NarBar from './routes/navbar'
import HomePage from './routes/home'
import Encryptor from './routes/encryptor'
import Page404NotFound from './routes/page404notfound'


export default function App() {
    return <BrowserRouter basename='/periods-encryptor'>
        <NarBar/>
        <Routes>
            <Route path="/">
                <Route index element={<HomePage/>}/>
                <Route path="encryptor" element={<Encryptor/>}/>
                <Route path="*" element={<Page404NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}
