import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand p-2">DASH</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <Link to="list">List</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
