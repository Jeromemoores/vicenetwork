import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from '../Home'
import { MyAccount } from '../Account/MyAccount'
import { SignIn } from '../Account/SignIn'
import { SignUp } from '../Account/SignUp'
import { SignOut } from '../Account/SignOut'

import { Ca } from '../CA'
import { Lapd } from '../CA/LAPD'
import { Lasd } from '../CA/LASD'
import { Chp } from '../CA/CHP'

import { Ny } from '../NY'
import { Nypd } from '../NY/NYPD'
import { Nysp } from '../NY/NYSP'
import { Fdny } from '../NY/FDNY'

import { Fl } from '../FL'
import { Flpd } from '../FL/FLPD'
import { Bcso } from '../FL/BCSO'
import { Fhp } from '../FL/FHP'

import { Forum } from '../Forum'
import { CaForum } from '../Forum/CA'
import { NyForum } from '../Forum/NY'
import { FlForum } from '../Forum/FL'

export function MainNavigation() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/myaccount' element={<MyAccount />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signout' element={<SignOut />} />

                <Route path='/ca' element={<Ca />} />
                <Route path='/ca/lapd' element={<Lapd />} />
                <Route path='/ca/lasd' element={<Lasd />} />
                <Route path='/ca/chp' element={<Chp />} />

                <Route path='/ny' element={<Ny />} />
                <Route path='/ny/nypd' element={<Nypd />} />
                <Route path='/ny/nysp' element={<Nysp />} />
                <Route path='/ny/fdny' element={<Fdny />} />

                <Route path='/fl' element={<Fl />} />
                <Route path='/fl/flpd' element={<Flpd />} />
                <Route path='/fl/bcso' element={<Bcso />} />
                <Route path='/fl/fhp' element={<Fhp />} />

                <Route path='/forum' element={<Forum />} />
                <Route path='/forum/ca' element={<CaForum />} />
                <Route path='/forum/ny' element={<NyForum />} />
                <Route path='/forum/fl' element={<FlForum />} />

            </Routes>
        </Router>
    )
}
