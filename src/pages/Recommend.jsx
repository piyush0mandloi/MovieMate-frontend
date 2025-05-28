import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function Recommend() {
  const [movieName, setMovieName] = useState('');
  const [recommendations, setRecommendations] = useState([]); // Start with an empty array
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    setError('');
    setRecommendations([]);
    if (!movieName.trim()) return setError("Please enter a movie name.");
    setLoading(true);
    try {
      // const res = await fetch(`${process.env.REACT_APP_API_URL}/recommend`, {
        const res = await fetch(`http://127.0.0.1:5000/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: movieName, limit: 6 })
      });
  
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        setRecommendations(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-pink-400 mb-6">Get Movie Recommendations</h2>
      <input
        type="text"
        placeholder="Enter movie title..."
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white mb-4"
      />
      <button
        onClick={handleRecommend}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition"
      >
        Recommend
      </button>

      {loading && <p className="mt-4 text-gray-300">Loading...</p>}
      {error && <p className="mt-4 text-red-400">{error}</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.length > 0 ? (
          recommendations.map((movie, idx) => (
            <MovieCard key={idx} title={movie.title} />
          ))
        ) : (
          <p className="text-gray-500">No recommendations available. Please try another movie.</p>
        )}
      </div>
    </div>
  );
}
