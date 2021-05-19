import React, { useState } from 'react'
import { Redirect } from 'react-router';

const Signup = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [submit,setSubmit] = useState(false);

    const handleInputLogin = (e) => {
        setLogin(e.target.value);
    }

    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    }

    const hangleSubmit = (e) => {
        e.preventDefault();
        const data = {
            login,
            password
        }
        if (data.login && data.password) {
            localStorage.setItem('data-login', data.login)
            localStorage.setItem('data-password', data.password)
            setSubmit(true)
        } else {
            alert('Error data')
        }
    }

    return (

        <div className="row signin">
            <h1 style={{ textAlign: 'center' }}> Регистрация </h1>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" value={login} onChange={(e) => handleInputLogin(e)} />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate" value={password} onChange={(e) => handleInputPassword(e)} />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e) => hangleSubmit(e)}>Зарегистрироваться
                </button>
                {submit && <Redirect to = "/signin" />}
            </form>
        </div>
    )
}

export default Signup;







// import React from 'react'

// const Signup = () => { 





//     return ( 

//         <div className="row">
//             <h1 style={{textAlign:'center'}}> Форма регистрации </h1>
//         <form className="col s12">
//             <div className="row">
//             <div className="input-field col s6">
//                 <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
//                 <label htmlFor="first_name">First Name</label>
//             </div>
//             <div className="input-field col s6">
//                 <input id="last_name" type="text" className="validate"/>
//                 <label htmlFor="last_name">Last Name</label>
//             </div>
//             </div>
//             <div className="row">
//             <div className="input-field col s12">
//                 <input id="password" type="password" className="validate"/>
//                 <label htmlFor="password">Password</label>
//             </div>
//             </div>
//             <div className="row">
//             <div className="input-field col s12">
//                 <input id="email" type="email" className="validate"/>
//                 <label htmlFor="email">Email</label>
//             </div>
//             </div>
//             <button className="btn waves-effect waves-light" type="submit" name="action">Submit
//   </button>
//         </form>
//         </div>
//     )
// }

// export default Signup;