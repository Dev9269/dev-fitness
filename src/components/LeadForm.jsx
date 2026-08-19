import { useState } from "react";
import { motion } from "framer-motion";

const initialForm = { name: "", phone: "", email: "", service: "", branch: "" };

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("./api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("Thanks! We will reach out to you soon.");
        setForm(initialForm);
      } else {
        setStatus("Submission failed - please try again.");
      }
    } catch {
      setStatus("Submission failed - please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section container">
      <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-left mb-4">Kickstart Your Fitness Journey with Dev Fitness</h2>
          <p className="text-gray-300 leading-8">
            Experience all that Dev Fitness has to offer with a free trial. Explore
            our workout and diet plans — our team in Vadodara and Ahmedabad will
            reach out to you within 24 hours.
          </p>
          <img
            src="/assets/contact-BtiCWis0.avif"
            alt="Dev Fitness contact"
            className="rounded-lg mt-8"
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="card p-6 space-y-4 w-full max-w-md mx-auto"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white">Name</label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-white">Phone</label>
            <input
              id="phone"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98xxxxxxx"
              className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="service" className="text-white">Service</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white"
            >
              <option value="">Select service</option>
              <option>Diet Plans</option>
              <option>Workout Plans</option>
              <option>Both</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="branch" className="text-white">Branch</label>
            <input
              id="branch"
              name="branch"
              value={form.branch}
              onChange={handleChange}
              placeholder="Vadodara / Ahmedabad"
              className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white"
            />
          </div>
          <button type="submit" disabled={loading} className="btn btn-red w-full justify-center">
            {loading ? "Sending..." : "Submit"}
          </button>
          {status && <p className="text-center text-gray-300">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}