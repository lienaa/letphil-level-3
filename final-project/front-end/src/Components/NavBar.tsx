import { Link } from "react-router"

export const NavBar = () => {
  return (
    <nav className="flex gap-4 p-2 border border-black">
      <Link to="/">Home</Link>
      <Link to="/library">Library</Link>
      <Link to="/backlog">Backlog</Link>
      <Link to="/playnext">Play Next</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/search">Search</Link>
      <input className="border border-black rounded" type="text"/>
      <a>Profile</a>
    </nav>
  );
};
