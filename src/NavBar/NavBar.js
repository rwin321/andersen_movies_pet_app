import React from 'react'
import { Route, NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
   render() {
    const styles = {
      navbar:{
        marginBottom:20
      }
    }
      return (
        
        <nav style={styles.navbar}>
          <ul className="">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink to="/signin">Войти</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Зарегистрироваться</NavLink>
              </li>
              {/* <p>{Name}</p> */}
              {/* <li>
                <NavLink to="/favorite">Избранное</NavLink>
              </li>
              <li>
                <NavLink to="/history">История</NavLink>
              </li>
              <li>
                <NavLink to="/logout">Выход</NavLink>
              </li> */}
            </div>
          </ul>
        </nav>
      )
  }
}