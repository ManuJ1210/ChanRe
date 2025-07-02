import { Link } from "react-router";
const ResearchAssist = () => {
  return (

    <>
      <section className="min-h-screen px-6 py-20 md:px-20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">About ChanRe Research Assist</h1>

          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">

            Research Assist is your online partner providing end-to-end solutions for publishing manuscripts and scientific content.
          </p>

          <div className="bg-white/80 rounded-3xl shadow-lg p-8 md:p-12 space-y-6 backdrop-blur-sm border border-blue-100">

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-700">Our Story</h2>
              <p className="text-gray-800 text-base">
                Welcome to research-assist, your online partner providing end-to-end solution for publishing manuscript and scientific contents. Our team comprises of statistical analysts, medical specialists, research professionals and IT experts with years of experience in editorial process management and scientific publishing. Our motto is to provide excellent service, without compromising on the quality or accuracy.

                Meticulous statistical analysis, data interpretation,and presentation of the content are crucial for establishing the success of a research. Our knowledge resources can meet your research needs, thereby to help you in achieving the publication goals. We hope to serve you at the best through the various services offered.

                We comply with ethical publication practices and strive to provide the best services by understanding the customer needs. We cater to various global, academic, scientific and pharma giants to provide high-quality services
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-700">Our Departments</h2>
              <p className="text-gray-800 text-base">

                <ul className="list-disc pl-6 space-y-2">
                  <li>English Language Editing</li>
                  <li>Research Design</li>
                  <li>Manuscript Editing</li>
                  <li>Data Management</li>
                  <li>Manuscript Writing</li>
                  <li>Clinical Trial Design</li>
                  <li>Figure Preparation</li>
                </ul>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-700">Our Vision</h2>
              <p className="text-gray-800 text-base">
                Our vision is to be a leader in the field of research assistance, providing unparalleled support to researchers and institutions worldwide. We aim to foster a collaborative environment that encourages innovation and excellence in scientific publishing.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="https://research-assist.com"><button className="px-6 py-3 bg-blue-700 text-white rounded-full shadow-md cursor-pointer hover:bg-blue-800 transition">
              Visit Our Main Website
            </button></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchAssist;
