import { motion } from "framer-motion";

const benefits = [
  "Personalized workout & diet plans",
  "Track workouts, reps and progress every month",
  "Certified trainers at every Dev Fitness branch",
  "Fitness enthusiasts connected through our platform",
];

export default function Benefits() {
  return (
    <section id="benefits" className="section container">
      <h2 className="section-title">Discover Dev Fitness Benefits</h2>
      <p className="section-sub">
        Unlock your full potential with Dev Fitness — your personal fitness
        partner for progress and motivation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card p-6 flex items-start gap-4"
          >
            <span className="w-10 h-10 shrink-0 rounded-full bg-[#eb0000] flex items-center justify-center font-bold">
              {i + 1}
            </span>
            <p className="text-gray-200 leading-7 text-lg">{b}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}