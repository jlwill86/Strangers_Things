import '.././Navbar.css'


import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <nav>
          <h1>{"Stranger's Things"}</h1>
          <menu>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </menu>
        </nav>
      );
}