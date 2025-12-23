import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const searchWeather = async () => {
    const res = await axios.get(
      `http://localhost:5000/weather/${city}`
    );
    setWeather(res.data);
    setHistory((prev) => [city, ...prev.slice(0, 4)]);
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto bg-white/10 p-6 rounded-xl backdrop-blur"
      >
        <input
          className="w-full p-2 rounded text-black mb-3"
          placeholder="Search city..."
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={searchWeather}
          className="w-full bg-sky-500 py-2 rounded neon"
        >
          Search Weather
        </button>

        {weather && (
          <div className="text-center mt-4">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p className="text-3xl">{weather.main.temp}°C</p>
          </div>
        )}

        {history.length > 0 && (
          <div className="mt-4 text-sm text-slate-300">
            <p className="mb-1">Recent searches:</p>
            {history.map((c, i) => (
              <p key={i}>• {c}</p>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
