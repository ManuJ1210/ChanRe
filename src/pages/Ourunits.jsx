import { motion } from "framer-motion";


const services = [
  {
    title: "ChanRe RICR",
    shortInfo: "A unit of ChanRe Rheumatology and Immunology Center and Research",
    shortInfo1: "ChanRe Rheumatology & Immunology Center & Research is a unique one of its kind hospital in India dedicated for management of patients.",
    moreInfo: "ChanRe Rheumatology & Immunology Center & Research is a unique one of its kind hospital in India dedicated for management of patients.",
    btnText: "Visit Site",
    bg: "from-lime-100 to-green-200",
    link: "https://chanrericr.com"
  },
  {
    title: "Research Assist",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "Research-assist is your online partner providing end-to-end solutions for publishing manuscripts and scientific content.",
    moreInfo: "Research-assist is your online partner providing end-to-end solutions for publishing manuscripts and scientific content.",
    btnText: "Visit Site",
    bg: "from-indigo-100 to-violet-200",
    link: "https://research-assist.com"
  },
  {
    title: "IARET",
    shortInfo: "A unit of Immunology and Arthritis and Research Pvt. Ltd.",
    shortInfo1: "Immunology & Arthritis Research & Education Trust-Help today because tomorrow you may be the one who needs helping! Forget what you can get and see what you can give.",
    moreInfo: "Immunology & Arthritis Research & Education Trust-Help today because tomorrow you may be the one who needs helping! Forget what you can get and see what you can give.",
    btnText: "Visit Site",
    bg: "from-yellow-100 to-orange-200",
    link: "https://www.iaret.org/"
  },
  {
    title: "ChanRe Lab",
    shortInfo: "A unit of ChanRe Laboratory Pvt. Ltd.",
    shortInfo1: "A new age healthcare process reengineered for the comfort & convenience of the patients in turn adding value to the service with NABL certified labreports.",
    moreInfo: "A new age healthcare process reengineered for the comfort & convenience of the patients in turn adding value to the service with NABL certified labreports.",
    btnText: "Visit Site",
    bg: "from-pink-100 to-rose-200",
    link: "https://chanrelab.com"
  },
  {
    title: "ChanRe Journals",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "ChanRe Journals functions as an ideal partner for publishing all kind of research in a comprehensive and timely manner.",
    moreInfo: "ChanRe Journals functions as an ideal partner for publishing all kind of research in a comprehensive and timely manner.",
    btnText: "Visit Site",
    bg: "from-sky-100 to-cyan-200",
    link: "https://chanrejournals.com"  
  },
  {
    title: "ChanRe Publishers",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "We help independently published content solutions and integrated media campaigns through our channel.",
    moreInfo: "We help independently published content solutions and integrated media campaigns through our channel.",
    btnText: "Visit Site",
    bg: "from-emerald-100 to-teal-200",
    link: "https://chanrepublishers.com"
  },
  {
    title: "ChanRe Med Soft",
    shortInfo: "A unit of ChanRe Health Care Pvt. Ltd.",
    shortInfo1: "ChanReMedSoft is Web based software with lightning speed access.",
    moreInfo: "ChanReMedSoft is Web based software with lightning speed access.",
    btnText: "Visit Site",
    bg: "from-purple-100 to-fuchsia-200",
    link: "https://chanremedsoft.com"   
  },
  {
    title: "ChanRe Bookshop",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "ChanRe Journals functions as an ideal partner for publishing all kind of research in a comprehensive and timely manner.",
    moreInfo: "ChanRe Journals functions as an ideal partner for publishing all kind of research in a comprehensive and timely manner.",
    btnText: "Visit Site",
    bg: "from-orange-100 to-amber-200",
    link: "https://chanrebookshop.com"
  },
  {
    title: "ChanRe Ebook",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "We help independently published content solutions and integrated media campaigns through our channel.",
    moreInfo: "We help independently published content solutions and integrated media campaigns through our channel.",
    btnText: "Visit Site",
    bg: "from-red-100 to-rose-200",
    link: "https://chanreebook.com" 
  }
];

function OurUnits() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Websites
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 mt-4 max-w-xl mx-auto text-base sm:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore our group units that deliver innovation, care, and research across diverse platforms.
      </motion.p>

      <div className="mt-12  grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative bg-gradient-to-br ${service.bg} rounded-2xl h-50 p-6 shadow-md overflow-hidden group transition`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-700 font-semibold text-sm">{service.shortInfo}</p>
            <p className="mt-3 text-gray-600 text-sm">{service.shortInfo1}</p>

           
            <motion.div
              className="absolute inset-0 bg-[#2a5f64] text-white p-6 flex flex-col justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm mb-4">{service.moreInfo}</p>
              <button onClick={() => window.open(service.link, "_blank")} className="bg-white text-[#2a5f64] font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition">
                {service.btnText}
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OurUnits;
