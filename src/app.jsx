import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './home.jsx'


let contentNode= document.getElementById('container')

function RoutedApp(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    )
}

ReactDom.render(<RoutedApp/>, contentNode)


