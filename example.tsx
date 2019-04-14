import React from 'react'
import ReactDOM from 'react-dom'
import IconExample from './examples/icon.example'
import ButtonExample from './examples/button.example'
import DialogExample from './examples/dialog.example'


import {HashRouter as Router, Link, Route} from 'react-router-dom'

ReactDOM.render(
    <Router>
       <header>
           <div className="logo">
                GarenUI
           </div>
       </header>
       <aside>
           <div>
              <h2>组件</h2>
              <ul>
                  <li>
                    <Link to="/icon">Icon</Link>
                  </li>
                  <li>
                    <Link to="/button">Button</Link>
                  </li>    
                  <li>
                    <Link to="/dialog">Dialog</Link>
                  </li>     
              </ul>
           </div>
       </aside>
       <main>
           <Route path="/icon" component={IconExample}></Route>
           <Route path="/button" component={ButtonExample}></Route> 
           <Route path="/dialog" component={DialogExample}></Route> 
       </main>
    </Router>
, document.querySelector("#root"))
