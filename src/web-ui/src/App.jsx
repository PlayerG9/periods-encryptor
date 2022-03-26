import './App.css'
import './generell.css'
import {
    BrowserRouter,
    Routes,
    Route,

    Navigate
} from 'react-router-dom'

import NarBar from './routes/navbar'
import HomePage from './routes/home'
import Period2Number from './routes/period2number'
import Number2Period from './routes/number2period'
import TestPage, { isEnabled as testPageEnabled} from './routes/tests'
import Page404NotFound from './routes/page404notfound'


export default function App() {
    return <BrowserRouter basename='/periods-encryptor'>
        <NarBar/>
        <Routes>
            <Route path="/">
                <Route index element={<HomePage/>}/>
                <Route path="p2n" element={<Navigate to="period2number"/>}/>
                <Route path="period2number" element={<Period2Number/>}/>
                <Route path="n2p" element={<Navigate to="number2period"/>}/>
                <Route path="number2period" element={<Number2Period/>}/>
                {testPageEnabled &&
                    <Route path="tests" element={<TestPage/>}/>
                }
                <Route path="*" element={<Page404NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}
