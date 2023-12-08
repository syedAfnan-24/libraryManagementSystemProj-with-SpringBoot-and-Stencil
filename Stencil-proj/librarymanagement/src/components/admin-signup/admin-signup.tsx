import { Component, h, Element } from "@stencil/core";

@Component({
    tag: "admin-signup",
    styleUrl: "../client-login/client-login.css",
    shadow: true
})
export class AdminSignup {
    @Element() el: HTMLElement
    username: HTMLInputElement
    password: HTMLInputElement

    handleForm(event:Event) {
        event.preventDefault()
        const adminName: string = this.username.value
        const password: string = this.password.value
        this.saveToLocalStorage(adminName, password)
    }

    saveToLocalStorage(adminName: string, password: string) {
        const admin = {
            adminName: adminName,
            password: password
        }
        localStorage.setItem(adminName, JSON.stringify(admin))
        alert("signup successful")
        this.clearFields()
    }

    clearFields(){
        this.username.value=""
        this.password.value=""
    }
    render() {
        return (
            <div class="container">
                <h1>Admin Signup</h1>
                <form onSubmit={this.handleForm.bind(this)}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id='username' ref={el => { this.username = el }} placeholder='Enter the User Name' required autoComplete='off' />
                    <label htmlFor="password">Password</label>
                    <input type="password" ref={el=>{this.password=el}} id="password" placeholder='Enter your password' required autoComplete='off' />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}