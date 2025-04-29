import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-80 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-400">🎬 MovieMate</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <Link to="/recommend" className="hover:text-pink-400 transition">Recommend</Link>
        </div>
      </div>
    </nav>
  );
}
