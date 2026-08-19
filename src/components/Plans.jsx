import { useState } from "react";
import { motion } from "framer-motion";

const plans = {
  diet: {
    image: "/assets/sample_plan-BuTLv2Ik.avif",
    points: ["Calorie-balanced meal plans", "Veg & non-veg options", "Weekly nutrition reviews"],
  },
  workout: {
    image: "/assets/workout_graph-CCEKsYX1.avif",
    points: ["Split routines for all levels", "Rep & set tracking", "Monthly progress graphs"],
  },
  both: {
    image: "/assets/challenge-BnsXnzaY.avif",
    points: ["Combined diet + workout plan", "One-on-one coach support", "Full transformation tracking"],
  },
};

export default function Plans() {
  const [selected, setSelected] = useState("both");
  const plan = plans[selected];

  return (
    <section className="section bg-[#0d0d0d]">
      <div className="container">
        <h2 className="section-title">Select Your Workout Plan</h2>
        <div className="flex justify-center gap-4 mb-10">
          {[
            ["diet", "Diet Plans"],
            ["workout", "Workout Plans"],
            ["both", "Both"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`btn ${selected === key ? "btn-red" : "btn-dark"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto card p-6 md:p-10 flex flex-col sm:flex-row gap-6 items-center"
        >
          <img src={plan.image} alt={selected} className="w-full sm:w-64 rounded-lg" />
          <div>
            <h3 className="text-2xl font-bold text-[#eb0000] mb-4">
              {selected === "both" ? "Combined Plan" : `${selected === "diet" ? "Diet" : "Workout"} Plan`}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {plan.points.map((p, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#eb0000]">{"\u2713"}</span> {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-red mt-6">
              Get started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}