import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-5xl font-extrabold neon mb-6"
      >
        Cyber Weather Forecast
      </motion.h1>

      <p className="text-slate-300 max-w-xl">
        Real-time weather forecasts with neon UI, animations,
        and global city tracking.
      </p>
    </div>
  );
}
