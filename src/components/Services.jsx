import { motion } from "framer-motion";

const services = [
  {
    title: "Customized Workout Plans",
    image: "/assets/workout_graph-CCEKsYX1.avif",
    description:
      "Personalized workout plans built around your goals, schedule and fitness level.",
  },
  {
    title: "Diet & Nutrition Plans",
    image: "/assets/sample_plan-BuTLv2Ik.avif",
    description:
      "Balanced diet plans designed by our nutrition experts to fuel your transformation.",
  },
  {
    title: "Personal Training",
    image: "/assets/train-DH-2oBAw.avif",
    description:
      "One-on-one coaching from certified trainers to keep you accountable and injury-free.",
  },
  {
    title: "Progress Tracking",
    image: "/assets/track-DQA_CNPE.avif",
    description:
      "Track every workout, rep and kilo with monthly progress reports.",
  },
];

export default function Services() {
  return (
    <section id="about" className="container section">
      <h2 className="section-title">What We Offer:</h2>
      <p className="section-sub">
        Dev Fitness offers 5 essential services to help you achieve your fitness goals.
      </p>
      <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card text-white shadow-lg"
          >
            <img
              src={s.image}
              alt={s.title}
              className={`w-full h-96 object-cover ${[1, 3].includes(i) ? "mt-12" : ""}`}
            />
            <h3 className="text-2xl font-bold mt-4 text-[#eb0000] px-4">{s.title}</h3>
            <p className="text-[#dcdcdc] leading-7 mt-2 px-4 pb-4">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}