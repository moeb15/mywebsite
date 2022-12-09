
import React from 'react'
import './components/styles/main.css'
import Mynavbar from './components/Navbar'
import {Routes,Route,BrowserRouter} from 'react-router-dom' 
import Homepage from './components/Homepage'
import CV from './components/CVPage'
import Projects from './components/ProjectsPage'
import Interests from './components/InterestsPage'

export default function App(){

    return(
        <BrowserRouter>
            <Mynavbar/>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/CV' element={<CV />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/interests' element={<Interests/>}/>
            </Routes>
        </BrowserRouter>
    )
}