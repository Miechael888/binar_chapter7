import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => setRes(res.data.token))
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
        <button onClick={handleRegister}>Register</button>
      </div>
      {!!res && <h1>regiter berhasil {res}</h1>}
    </div>
  );
};

export default Register;
