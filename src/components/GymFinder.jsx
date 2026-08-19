import { useState } from "react";
import { motion } from "framer-motion";

const gyms = [
  { id: "1", name: "Dev Fitness", image: "/assets/gym1-Bzggi9TP.avif", phone: "+91 98240 10001", address: "Alkapuri, Vadodara, Gujarat 390007", mapUrl: "https://maps.google.com/maps?q=Alkapuri+Vadodara&z=15&output=embed" },
  { id: "2", name: "Dev Fitness", image: "/assets/gym2-DHdQM2JP.avif", phone: "+91 98240 10002", address: "Race Course Road, Vadodara, Gujarat 390007", mapUrl: "https://maps.google.com/maps?q=Race+Course+Vadodara&z=15&output=embed" },
  { id: "3", name: "Dev Fitness", image: "/assets/gym3-DIBM1QeD.avif", phone: "+91 98240 10003", address: "Manjalpur, Vadodara, Gujarat 390011", mapUrl: "https://maps.google.com/maps?q=Manjalpur+Vadodara&z=15&output=embed" },
  { id: "4", name: "Dev Fitness", image: "/assets/gym4-DwSmWUlm.avif", phone: "+91 98240 10004", address: "Sayajigunj, Vadodara, Gujarat 390005", mapUrl: "https://maps.google.com/maps?q=Sayajigunj+Vadodara&z=15&output=embed" },
  { id: "5", name: "Dev Fitness", image: "/assets/gym5-C2PWo6wQ.avif", phone: "+91 98250 20001", address: "CG Road, Ahmedabad, Gujarat 380009", mapUrl: "https://maps.google.com/maps?q=CG+Road+Ahmedabad&z=15&output=embed" },
  { id: "6", name: "Dev Fitness", image: "/assets/gym6-I_2_Xd6Z.avif", phone: "+91 98250 20002", address: "Vastrapur, Ahmedabad, Gujarat 380015", mapUrl: "https://maps.google.com/maps?q=Vastrapur+Ahmedabad&z=15&output=embed" },
  { id: "7", name: "Dev Fitness", image: "/assets/gym7-dIrn1HWf.avif", phone: "+91 98250 20003", address: "SG Highway, Ahmedabad, Gujarat 380054", mapUrl: "https://maps.google.com/maps?q=SG+Highway+Ahmedabad&z=15&output=embed" },
  { id: "8", name: "Dev Fitness", image: "/assets/gym1-Bzggi9TP.avif", phone: "+91 98250 20004", address: "Maninagar, Ahmedabad, Gujarat 380008", mapUrl: "https://maps.google.com/maps?q=Maninagar+Ahmedabad&z=15&output=embed" },
];

export default function GymFinder() {
  const [selected, setSelected] = useState(gyms[0]);

  return (
    <section className="section bg-[#0d0d0d]">
      <div className="container">
        <h2 className="section-title">Find Your Nearest Gym</h2>
        <p className="section-sub">
          Easily discover Dev Fitness branches near your location to kickstart your journey.
        </p>
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          <div className="w-full lg:w-[60%] rounded-lg max-h-[550px] space-y-4 p-5 overflow-y-scroll scrollbar-hide bg-[#121212]">
            {gyms.map((g) => (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelected(g)}
                className={`second flex flex-col sm:flex-row cursor-pointer bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                  selected.id === g.id ? "border-2 border-[#eb0000] bg-[#eb0000]" : "border-2 border-transparent"
                }`}
              >
                <div className="w-full md:w-32 h-32 flex-shrink-0">
                  <img src={g.image} alt={g.name} className="w-full h-full object-cover hover:scale-110 transition-all duration-400" />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-bold mb-2 text-white">{g.name}</h3>
                  <p className="text-sm text-white mb-1">{g.phone}</p>
                  <p className="text-sm text-white">{g.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="w-full lg:w-[40%] h-[300px] md:h-[550px] lg:sticky lg:top-6">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Gym Location"
                width="100%"
                height="100%"
                loading="lazy"
                src={selected.mapUrl}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}