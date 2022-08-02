import React from 'react';
import "./Loginuser.css"
import { Link } from 'react-router-dom';

const Signup = () => {

    return (

<div class="global-container " style="background-color: #C9BBCF;">
        <div class="card signup-form">
            <div class="card=body">
                <h1 class="card-title text-center">Sign up</h1><br /><br /><br />
            </div>
            <div class="card-text">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary">Masuk</button><br />
                    </div>
                    <Link to ="/Signup.js" className="App-link stretched-link text-center" >Login</Link>
                    
                </form>
            </div>
        </div>
    </div>

    )
}

export default Signup