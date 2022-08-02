import React from 'react';
import './Loginuser.css'

const Loginuser =() => {

return (
<>
    <div className="global-container" style={{backgroundColor: "#C9BBCF"}}>
        <div className="card signup-form">
            <div className="card-body">
                <h3 className="card-title text-center">Masuk sebagai pengguna</h3>
                    <h6 style={{textAlign: "center"}}> masuk dengan</h6>
            </div>
            <a href="index.html" className="stretched-link text-center" style={{textDecoration: "none"}}>Sign Up</a><br/>
            <div className="card-text">
                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src="1.jpg" style={{width: "1cm", height: "1cm", display: "block", margin: "auto", alt:"..."}}/>
                            </div>
                            <div className="col">
                                <img src="3.png" style={{width: "1cm", height: "1cm", display: "block", margin: "auto", alt:"..."}}/>
                            </div>
                            <div className="col">
                                <img src="2.jpg" style={{width: "1cm", height: "1cm", display: "block", margin: "auto", alt:"..."}}/><br/>
                            </div>
                        </div>
                    </div>
                    <h6 style={{textAlign: "center"}}> atau </h6>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                        <div className="d-grid gap-2">
                            <a href="page.html" className="btn btn-sm btn-danger">Daftar</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</>
    );
}

export default Loginuser;