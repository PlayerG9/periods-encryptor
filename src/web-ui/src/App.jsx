import './App.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'

import HomePage from './routes/home'
import Periods2Number from './routes/periods2number'
import Number2Periods from './routes/number2periods'
import Page404NotFound from './routes/page404notfound'


export default function App() {
    return <BrowserRouter basename='/periods-encryptor'>
        <Routes>
            <Route path="/">
                <Route index element={<HomePage/>}/>
                <Route path="p2n" element={<Navigate to="/periods2number"/>}/>
                <Route path="periods2number" element={<Periods2Number/>}/>
                <Route path="n2p" element={<Navigate to="/number2periods"/>}/>
                <Route path="number2periods" element={<Number2Periods/>}/>
                <Route path="*" element={<Page404NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}
