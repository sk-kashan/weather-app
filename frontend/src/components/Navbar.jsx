import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center px-8 py-4 border-b border-white/10 backdrop-blur"
    >
      <h1 className="text-2xl font-bold neon">⚡ WeatherX</h1>

      <div className="flex gap-6">
        {["/", "/search", "/countries", "/about"].map((path, i) => (
          <Link
            key={i}
            to={path}
            className="hover:text-sky-400 transition"
          >
            {path === "/" ? "Home" : path.replace("/", "")}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
