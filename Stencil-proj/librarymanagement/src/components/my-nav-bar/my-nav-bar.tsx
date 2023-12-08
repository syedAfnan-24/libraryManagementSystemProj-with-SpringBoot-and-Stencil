import { Component, Prop, State, h } from "@stencil/core";
import { href } from "stencil-router-v2";

@Component({
    tag: "my-nav",
    styleUrl: "my-nav-bar.css",
    shadow: true,
})

export class MyNavBar {

    @Prop() firstOption: string
    @Prop() firstHref:string
    @Prop() secondOption: string
    @Prop() secondHref:string
    @Prop() logOut: string
    @State() toggleBool: boolean = false

    logoutFunc(){
        sessionStorage.clear(); 
        window.location.href='/'
    }
    render() {
        //three bars toggle button
        let mobileToggle = (<div class="menu-toggle" onClick={() => { this.toggleBool = true }}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>)
        //dropdown
        let dropdownMenu;
        if (this.toggleBool) {
            dropdownMenu = (

                <div class="dropdown-menu">
                    <div class="menu-toggle" onClick={() => { this.toggleBool = false }}>
                        <p id="cross">X</p><br />
                        <a id="nav-link-dropdown" {...href(this.firstHref)}>{this.firstOption}</a>
                        <a id="nav-link-dropdown" {...href(this.secondHref)}>{this.secondOption}</a>
                        <a id="nav-link-dropdown" onClick={this.logoutFunc.bind(this)}>{this.logOut}</a>
                    </div>
                </div>)
        }

        //Main Navigation Bar
        let navBar = (<nav class="navbar">
            <div class="logo">LIBRARY</div>
            {mobileToggle}
            <div class="menu">
                <a id="nav-link" href={this.firstHref}>{this.firstOption}</a>
                <a id="nav-link" href={this.secondHref}>{this.secondOption}</a>
                <a id="nav-link-dropdown" onClick={this.logoutFunc.bind(this)}>{this.logOut}</a>
            </div>
            {dropdownMenu}
        </nav>)
        return navBar
    }
}