import React,{Component} from "react";
import NavBar from "./NavBar"

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            message:"",
        }
    }

    onLoginClick = () =>{
        if(this.state.email === "123" && this.state.password === "123"){
            // success
            this.setState({message:<span className="me-2 text-success">Successfully Logged-in</span>,})
        }else{
            this.setState({message:<span className=" me-2 text-warning">Login Fail</span>,})
        }
    }


    render(){
        return(
        <div className="col-lg-9">
            <h4 className="m-1 p-2 border-bottom">Login</h4>
            
            <div className="form-group form-row m-2">
                <label className="col-lg-4">Email:</label>
                <input type="text" className="form-control" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}></input>
            </div>

            <div className="form-group form-row m-2">
                <label className="col-lg-4">Password:</label>
                <input type="password" className="form-control" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}></input>
            </div>

            <div className="m-2 float-end">
                {this.state.message}
                <button className="btn btn-primary" onClick={this.onLoginClick}>Login</button>
            </div>

        </div>
        )
    }
}

export default Login;   