import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "ChanRe RICR",
    shortInfo: "A unit of ChanRe Rheumatology and Immunology Center and Research",
    shortInfo1: "ChanRe Rheumatology & Immunology Center & Research is a unique one of its kind hospital in India dedicated for management of patients.",
    moreInfo: "ChanRe Rheumatology & Immunology Center & Research is a unique one of its kind hospital in India dedicated for management of patients.",
    btnText1: "Visit Site",
    btnText2: "Learn More",
    bg: "from-lime-200 to-green-300",
    link: "https://chanrericr.com",
    link2: "/chanre-ricr",

  },
  {
    title: "Research Assist",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "Research-assist is your online partner providing end-to-end solutions for publishing manuscripts and scientific content.",
    moreInfo: "Research-assist is your online partner providing end-to-end solutions for publishing manuscripts and scientific content.",
    btnText1: "Visit Site",
    btnText2: "Learn More",
    bg: "from-indigo-200 to-violet-300",
    link: "https://research-assist.com",
    link2: "/research-assist",

  },
  {
    title: "ChanRe Care",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "Our comprehensive weight loss management program combines physiotherapy, personalized diet plans, and guided yoga sessions to help you achieve sustainable results.",
    moreInfo: "Our comprehensive weight loss management program combines physiotherapy, personalized diet plans, and guided yoga sessions to help you achieve sustainable results.",
    btnText1: "Visit Site",
    btnText2: "Learn More",
    bg: "from-yellow-200 to-orange-300 ",
    link: "https://chanrecare.com/",

  },

  {
    title: "ChanRe Lab",
    shortInfo: "A unit of ChanRe Laboratory Pvt. Ltd.",
    shortInfo1: "A new age healthcare process reengineered for the comfort & convenience of the patients in turn adding value to the service with NABL certified labreports.",
    moreInfo: "A new age healthcare process reengineered for the comfort & convenience of the patients in turn adding value to the service with NABL certified labreports.",
    btnText1: "Visit Site",
    btnText2: "Learn More",
    bg: "from-pink-200 to-rose-300",
    link: "https://chanrelab.com",

  },
  {
    title: "ChanRe Journals",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "ChanRe Journals functions as an ideal partner for publishing all kind of research in a comprehensive and timely manner.",
    moreInfo: "ChanRe Journals functions as an ideal partner for publishing all kind of research in a comprehensive and timely manner.",
    btnText1: "Visit Site",
    btnText2: "Learn More",
    bg: "from-sky-200 to-cyan-300",
    link: "https://chanrejournals.com/",

  },
  {
    title: "ChanRe Publishers",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "We help independently published content solutions and integrated media campaigns through our channel.",
    moreInfo: "We help independently published content solutions and integrated media campaigns through our channel.",
    btnText1: "Visit Site",
    btnText2: "Learn More",
    bg: "from-emerald-200 to-teal-300",
    link: "https://chanrepublisher.com/",

  },
  {
    title: "ChanRe Med Soft",
    shortInfo: "A unit of ChanRe Health Care Pvt. Ltd.",
    shortInfo1: "ChanReMedSoft is Web based software with lightning speed access.",
    moreInfo: "ChanReMedSoft is Web based software with lightning speed access.",
    btnText1: "Visit Site",
    btnText2: "Learn More",
    bg: "from-purple-200 to-fuchsia-300",
    link: "https://chanremedsoft.com",
    link2: "/chanre-medsoft",

  },
  {
    title: "ChanRe Bookshop",
    shortInfo: "A unit of ChanRe Healthcare Pvt. Ltd.",
    shortInfo1: "ChanRe Journals functions as an ideal partner for publishing all kind of research in a comprehensive and timely manner.",
    moreInfo: "ChanRe Journals functions as an ideal partner for publishing all kind of research in a comprehensive and timely manner.",
    btnText1: "Visit Site",
    btnText2: "Learn More",
    bg: "from-orange-200 to-amber-300",
    link: "https://chanrebookshop.com",

  },
  {
    title: "IARET",
    shortInfo: "A unit of Immunology and Arthritis and Research Pvt. Ltd.",
    shortInfo1: "Immunology & Arthritis Research & Education Trust-Help today because tomorrow you may be the one who needs helping! Forget what you can get and see what you can give.",
    moreInfo: "Immunology & Arthritis Research & Education Trust-Help today because tomorrow you may be the one who needs helping! Forget what you can get and see what you can give.",
    btnText1: "Visit Site",
    btnText2: "Learn More",
    bg: "from-red-200 to-rose-300",
    link: "https://www.iaret.org/",

  },

];

function OurUnits() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1500);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Units</title>
        <meta name="description" content="Explore the various units under Chanre Group." />
      </Helmet>
      <section className="py-20 px-6 md:px-20 backdrop-blur-sm ">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Units
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

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br ${service.bg} ${service.shadow}  rounded-2xl h-auto p-6 shadow-md overflow-hidden group transition`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={!isMobile ? { scale: 1.03 } : {}}
              onClick={() => isMobile && setActiveIndex(activeIndex === index ? null : index)}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-700 font-semibold text-sm">{service.shortInfo}</p>
              <p className="mt-3 text-gray-600 text-sm">{service.shortInfo1}</p>

              <motion.div
                className={`absolute inset-0 bg-[#2a5f64] text-white p-6 flex flex-col justify-center transition-all duration-500 ease-in-out
                ${isMobile ? (activeIndex === index ? 'translate-y-0' : 'translate-y-full') : 'group-hover:translate-y-0 translate-y-full'}
              `}
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm mb-4">{service.moreInfo}</p>
                <div className="flex gap-4 mt-4 justify-center">
                  <button
                    onClick={() => window.open(service.link, "_blank")}
                    className="bg-white text-[#2a5f64] font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition"
                  >
                    {service.btnText1}
                  </button>
                  <button
                    onClick={() => window.open(service.link2, "_blank")}
                    className="bg-white text-[#2a5f64] font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition"
                  >
                    {service.btnText2}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default OurUnits;
