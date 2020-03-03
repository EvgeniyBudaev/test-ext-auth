import React, { Component } from "react";

class AuthPage extends Component {
  state = {
    loginUser: {
      userName: "",
      password: ""
    }
  };

  onUserNameChange = event => {
    this.setState({
      loginUser: { ...this.state.loginUser, userName: event.target.value }
    });
  };

  onPasswordChange = event => {
    this.setState({
      loginUser: { ...this.state.loginUser, password: event.target.value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      loginUser: {
        ...this.state.loginUser,
        userName: this.state.loginUser.userName,
        password: this.state.loginUser.password
      }
    });
    let jsonLoginUserObject = JSON.stringify(this.state.loginUser);
    console.log(jsonLoginUserObject);

    // document.cookie = "_identity=8c02d93ade241ed33ef2ad476752de1a917a3f7141448662c54ec606dec23bc4a%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_identity%22%3Bi%3A1%3Bs%3A50%3A%22%5B56674%2C%22r1JhFhdjwIlvSvHr3P9OxzXsCV2T9gOO%22%2C2592000%5D%22%3B%7D";
    // alert(document.cookie);
  };

  render = () => {
    console.log(this.state.loginUser.userName, this.state.loginUser.password);
    return (
      <form className="authForm" onSubmit={this.handleSubmit}>
        <label>
          Имя пользователя:
          <input
            name="userName"
            type="text"
            value={this.state.loginUser.userName}
            onChange={this.onUserNameChange}
            placeholder="Введите имя"
          />
        </label>
        <label>
          Пароль:
          <input
            name="password"
            type="password"
            value={this.state.loginUser.password}
            onChange={this.onPasswordChange}
            placeholder="Введите пароль"
          />
        </label>
        <button type="submit" name="Login">
          Войти
        </button>
      </form>
    );
  };
}

export default AuthPage;
