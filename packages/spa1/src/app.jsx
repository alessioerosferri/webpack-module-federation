import React from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
import SayHelloFromSPA2 from 'spa2/SayHelloFromSPA2'

const NavBar = ()=>{
  return <ul>
    <li><Link to="/elementInSPA2"> Click here to visualize element in SPA2! </Link></li>
  </ul>
}

export default function SayHelloFromSPA1() {
  return (
    <>
      <h1>This is a navbar from SPA1</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NavBar} />
          <Route path="/elementInSPA2" component={SayHelloFromSPA2} />
        </Switch>

      </BrowserRouter>

    </>);
}