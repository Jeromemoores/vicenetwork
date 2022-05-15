import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from '../Home'
import { Ca } from '../CA'
import { Ny } from '../NY'
import { Fl } from '../FL'

export function MainNavigation() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cahome' element={<Ca />} />
                <Route path='/nyhome' element={<Ny />} />
                <Route path='/flhome' element={<Fl />} />
            </Routes>
        </Router>
    )
}
