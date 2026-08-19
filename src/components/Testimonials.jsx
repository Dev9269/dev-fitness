import { motion } from "framer-motion";

const reviews = [
  {
    name: "Karan Desai",
    role: "Software Engineer",
    comment:
      "Dev Fitness has transformed the way I work out. The rep counter and progress tracking keep me consistent every week.",
  },
  {
    name: "Sneha Joshi",
    role: "Student",
    comment:
      "The diet plan plus workout combo is exactly what I needed. Lost 8 kg in 3 months with my coach's guidance.",
  },
  {
    name: "Vivek Rathod",
    role: "Business Owner",
    comment:
      "Best gym community in Vadodara. The trainers know what they are doing and the machines are always maintained.",
  },
];

export default function Testimonials() {
  return (
    <section className="section container">
      <h2 className="section-title">What people say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card p-6"
          >
            <div className="text-[#eb0000] text-xl mb-3">{"\u2605\u2605\u2605\u2605\u2605"}</div>
            <p className="text-gray-300 leading-7">{r.comment}</p>
            <div className="mt-5 pt-4 border-t border-white/10">
              <h3 className="font-bold">{r.name}</h3>
              <p className="text-sm text-[#797b85]">{r.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}