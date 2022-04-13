import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <div>
        <h2> There nothing much here except links.</h2>
      </div>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="comments">Comments</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
