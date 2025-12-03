import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md shadow-lg py-4 px-6 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
        >
          User App
        </Link>
        <div className="space-x-6">
          <Link
            to="/signup"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
