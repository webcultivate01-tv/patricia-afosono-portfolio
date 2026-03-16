import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    date: "2026 – Present",
    role: "Graphic Designer",
    company: "Self-Employed",
    desc: "Providing branding and visual design solutions including brand identity and communication materials.",
  },
  {
    date: "Sep 2025 – Jan 2026",
    role: "Head of Marketing & Communication",
    company: "Gestavia Aviation & Logistics",
    desc: "Led employer branding strategy, corporate communication and development of the company website.",
  },
  {
    date: "Jul 2025 – Sep 2025",
    role: "Graphic Designer",
    company: "Self-Employed",
    desc: "Freelance visual design projects focused on brand communication and creative materials.",
  },
  {
    date: "Jun 2024 – Jun 2025",
    role: "Branding Graphic Designer",
    company: "Menzies Aviation",
    desc: "Worked on global branding initiatives, communication graphics and merchandising assets.",
  },
  {
    date: "May 2021 – Jun 2024",
    role: "Brand Manager",
    company: "Groundforce Portugal",
    desc: "Managed brand strategy, corporate identity and visual communication projects.",
  },
  {
    date: "Feb 2019 – May 2021",
    role: "Corporate Brand Designer",
    company: "Groundforce Portugal",
    desc: "Developed corporate branding materials, packaging design and internal communication graphics.",
  },
  {
    date: "Aug 2018 – Feb 2019",
    role: "Communication Trainee",
    company: "Groundforce Portugal",
    desc: "Created internal communication materials, campaigns and graphic assets.",
  },
  {
    date: "2009 – 2018",
    role: "Passenger Service Assistant",
    company: "Groundforce Portugal",
    desc: "Worked in a fast-paced airport environment delivering high quality customer service.",
  },
  {
    date: "2007 – 2009",
    role: "Customer Service Agent",
    company: "Teleperformance / Vodafone",
    desc: "Provided customer support and troubleshooting services ensuring customer satisfaction.",
  },
];

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Experience
          </h2>
          <p className="text-gray-600 mt-4">
            A journey of branding, communication and creative design since 2007.
          </p>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {visibleExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative pl-12"
              >
                {/* timeline dot */}
                <div className="absolute left-[6px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>

                {/* card */}
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                  <span className="text-sm font-semibold text-purple-600">
                    {exp.date}
                  </span>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1">
                    {exp.role}
                  </h3>

                  <p className="text-purple-600 font-medium">{exp.company}</p>

                  <p className="text-gray-600 mt-2">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Show All Experience
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
