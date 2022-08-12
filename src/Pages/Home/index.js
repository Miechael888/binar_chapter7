import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={"/register"}>
        <button>register</button>
      </Link>
      <Link to={"/login"}>
        <button>login</button>
      </Link>
    </div>
  );
};

export default Home;
