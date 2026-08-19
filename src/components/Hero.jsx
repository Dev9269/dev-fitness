import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ value }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const steps = 60;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setN(Math.round((value * i) / steps));
      if (i >= steps) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [value]);

  return <>{n}</>;
}

const stats = [
  { value: 500, label: "k", text: "Workouts logged and progress tracked every month" },
  { value: 10, label: "k", text: "Gym partners across Vadodara" },
  { value: 100, label: "+", text: "Fitness enthusiasts connected through our platform" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-[url('/assets/banner-236qy8X7.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative container text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold uppercase leading-tight"
        >
          Where Fitness Meets<br />Social Connection!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-8"
        >
          Vadodara&rsquo;s fitness community. Track your workouts, count your reps,
          and transform with Dev Fitness.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a href="mailto:marujainam021@gmail.com" className="btn btn-dark">
            marujainam021@gmail.com
          </a>
          <a href="#contact" className="btn btn-red">
            Join us now
          </a>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <h2 className="text-5xl text-white font-bold mb-3">
                <Counter value={s.value} />
                {s.label}
              </h2>
              <p className="text-sm text-[#797b85]">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}