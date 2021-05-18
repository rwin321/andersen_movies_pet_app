import React, { useState } from 'react'

const Signin = () => { 
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleInputLogin=(e)=>{
        setLogin(e.target.value);
    }

    const handleInputPassword=(e)=>{
        setPassword(e.target.value);
    }

    const hangleSubmit=(e)=>{
        e.preventDefault();
        const data = {
            login,
            password
        }
        if (data.login && data.password) {
            localStorage.setItem('data-login', data.login)
            localStorage.setItem('data-password', data.password)
        } else {
            alert('Error data')
        }
       
    }

    return ( 
        
        <div className="row">
            <h1 style={{textAlign:'center'}}> Форма авторизации </h1>
        <form className="col s12">
            <div className="row">
            <div className="input-field col s6">
                <input  id="first_name" type="text" className="validate" value={login} onChange={(e)=>handleInputLogin(e)}/>
                <label for="first_name">First Name</label>
            </div>
            </div>
            <div className="row">
            <div className="input-field col s12">
                    <input id="password" type="password" className="validate" value={password} onChange={(e)=>handleInputPassword(e)} />
                <label for="password">Password</label>
            </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e)=>hangleSubmit(e)}>Submit
  </button>
        {login}
        {password}
        </form>
        </div>
    )
}

export default Signin;