import { motion } from "framer-motion";

const people = [
  {
    before: "/assets/people1_before-CcF8v3vD.avif",
    after: "/assets/people1_after-C3YYeGAt.avif",
    name: "Aarav Patel",
    weight: "-12 kg",
  },
  {
    before: "/assets/person2_before-BtQjjRnr.avif",
    after: "/assets/person2_after-BsdohMC1.avif",
    name: "Priya Shah",
    weight: "-8 kg",
  },
  {
    before: "/assets/person3_before-CLh2nI_-.avif",
    after: "/assets/person3_after-yaZAQqMd.avif",
    name: "Rohan Mehta",
    weight: "-15 kg",
  },
];

export default function Transformations() {
  return (
    <section className="section bg-[#0d0d0d]">
      <div className="container">
        <h2 className="section-title">
          Transformations made<br />possible with Dev Fitness
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
          {people.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-5 text-center"
            >
              <div className="flex gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase mb-1">Before</p>
                  <img src={p.before} alt={`${p.name} before`} className="rounded-lg h-64 object-cover" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase mb-1">After</p>
                  <img src={p.after} alt={`${p.name} after`} className="rounded-lg h-64 object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-bold mt-4">{p.name}</h3>
              <p className="text-[#eb0000] font-bold mt-1">{p.weight} weight loss</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}