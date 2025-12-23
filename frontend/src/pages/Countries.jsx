const countries = ["USA", "UK", "India", "Japan", "Germany"];

export default function Countries() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold neon mb-4">
        Global Weather
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        {countries.map((c) => (
          <div
            key={c}
            className="bg-white/10 px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
