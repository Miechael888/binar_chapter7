import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setRes(res.data.token);
        console.log(res.data.token);
        localStorage.setItem(`token`, res.data.token);
        navigate(`/dashboard`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Welcome, Admin BCR</h1>
      <form>Email </form>
      <input onChange={(e) => handleEmail(e)} type="text" />
      <form>Password</form>
      <input onChange={handlePassword} type="text" />
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      {!!res && <h1>login berhasil {res}</h1>}
    </div>
  );
};

export default Login;
