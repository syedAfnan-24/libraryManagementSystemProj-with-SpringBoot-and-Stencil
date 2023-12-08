import { Component, h,Element } from "@stencil/core";

@Component({
    tag: "admin-login",
    styleUrl: "../client-login/client-login.css",
    shadow: true
})
export class AdminLogin {
    @Element() el:HTMLElement
    username:HTMLInputElement
    password:HTMLInputElement

    handleForm(event:Event){
        event.preventDefault()
        const name:string = this.username.value
        const password:string =this.password.value

        const storedAdmin=JSON.parse(localStorage.getItem(name))

        if(storedAdmin && storedAdmin.adminName == name && storedAdmin.password==password){
            // alert("login success")
            sessionStorage.setItem("admin",storedAdmin.adminName)
            window.location.href = "/controlls"
        }else{
            alert("User name or password incorrect")
        }
        this.clearFields()
    }
    clearFields(){
        this.username.value=""
        this.password.value=""
    }

    render() {
        return (
            <div class="container">
                <h1>Admin Login</h1>
                <form onSubmit={this.handleForm.bind(this)}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" id='username' ref={el=>{this.username = el}} placeholder='Enter the User Name' required autoComplete='off' />
                    <label htmlFor="password">Password</label>
                    <input type="password" ref={el=>{this.password=el}} id="password" placeholder='Enter your password' required autoComplete='off' />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}