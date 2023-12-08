import { Component, h } from '@stencil/core';
import { Route, createRouter } from "stencil-router-v2";

const Router = createRouter()
@Component({
  tag: 'root-app'
})
export class RootApp {

  render() {
    return (
      <Router.Switch>
        {/* landing page */}
        <Route path="/">
          <my-nav first-option="Login" first-href="/login" second-option="SignUp" second-href="/signup"></my-nav>
          <hero-section />
          <features-section />
          <footer-section />
        </Route>
        {/* login page */}
        <Route path='/login'>
          <my-nav first-option="Home" first-href="/" second-option="SignUp" second-href="/signup"></my-nav>
          <client-login />
        </Route>
        {/* signup page */}
        <Route path='/signup'>
          <my-nav first-option="Home" first-href="/" second-option="Login" second-href="/login"></my-nav>
          <client-signup />
        </Route>
        {/* client home page */}
        <Route path="/home">
          <my-nav first-option="Requested" first-href="/client-request" second-option="Rerturned" second-href="/client-returned" log-out='Log Out'></my-nav>
          <client-home />
        </Route>
        {/* client page to display the books requested by him alone */}
        <Route path='/client-request'>
        <my-nav first-option="Borrowed" first-href="/client-borrowed" second-option="Rerturned" second-href="/client-returned" log-out='Log Out'></my-nav>
        <client-request></client-request>
        </Route>
        {/* admin login  */}
        <Route path='/admin-login'> 
          <my-nav first-option="Home" first-href="/" second-option="Admin SignUp" second-href="/admin-signup"></my-nav>
          <admin-login></admin-login>
        </Route>
        {/* admin signup */}
        <Route path='/admin-signup'>
          <my-nav first-option="Home" first-href="/" second-option="Admin Login" second-href="/admin-login"></my-nav>
          <admin-signup></admin-signup>
        </Route>
        {/* admin home page */}
        <Route path="/controlls">
          <my-nav first-option="Requested" first-href="/admin-request" second-option="Returned" second-href="/admin-return" log-out='Log Out'></my-nav>
          <admin-home></admin-home>
        </Route>
        {/* page for rendering the books borrowed by client */}
        <Route path='/client-borrowed'>
          <my-nav first-option="Dashboard" first-href="/home" second-option="Rerturned" second-href="/client-returned" log-out='Log Out'></my-nav>
          <client-borrow></client-borrow>
        </Route>
        {/* page for rendering the books Returned by client */}
        <Route path='/client-returned'>
          <my-nav first-option="Dashboard" first-href="/home" second-option="Borrowed" second-href="/client-borrowed" log-out='Log Out'></my-nav>
          <client-return></client-return>
        </Route>
        {/* rendering the books borrowed by client */}
        <Route path='/admin-borrow'>
          <my-nav first-option="Dashboard" first-href="/controlls" second-option="Returned" second-href="/admin-return" log-out='Log Out'></my-nav>
          <admin-borrow></admin-borrow>
        </Route>
        {/* rendering book lists of returned books */}
        <Route path='/admin-return'>
          <my-nav first-option="Dashboard" first-href="/controlls" second-option="Borrowed" second-href="/admin-borrow" log-out='Log Out'></my-nav>
          <admin-return></admin-return>
        </Route>
        {/* page on admin side to review a borrow request */}
        <Route path='/admin-request'>
          <my-nav first-option="Dashboard" first-href="/controlls" second-option="Borrowed" second-href="/admin-borrow" log-out='Log Out'></my-nav>
          <admin-request></admin-request>
        </Route>

      </Router.Switch>
    );
  }
}