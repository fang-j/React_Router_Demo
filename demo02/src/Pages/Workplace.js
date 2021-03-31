import React from 'react';
import { Route, Link } from 'react-router-dom';
import Money from './workplace/Money'
import Getup from './workplace/GetUp'
import './index.css';

function Workplace(){
  return(
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/money">加薪</Link></li>
          <li><Link to="/workplace/getup">getUP</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>秘籍</h3></div>
        <Route path="/workplace/money" component={Money}></Route>
        <Route path="/workplace/getup" component={Getup}></Route>
      </div>
    </div>
  )
}

export default Workplace