import React from 'react'

const Signup = () => { 
    return ( 
        
        <div className="row">
            <h1 style={{textAlign:'center'}}> Форма регистрации </h1>
        <form className="col s12">
            <div className="row">
            <div className="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
                <input id="last_name" type="text" className="validate"/>
                <label for="last_name">Last Name</label>
            </div>
            </div>
            <div className="row">
            <div className="input-field col s12">
                <input id="password" type="password" className="validate"/>
                <label for="password">Password</label>
            </div>
            </div>
            <div className="row">
            <div className="input-field col s12">
                <input id="email" type="email" className="validate"/>
                <label for="email">Email</label>
            </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
  </button>
        </form>
        </div>
    )
}

export default Signup;