import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ArticleCard from './components/ArticleCard';
import MarkdownRenderer from './components/MarkdownRenderer';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaRegFileCode, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiDotnet, SiC, SiPostman, SiMysql, SiMongodb } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import AnimateText from './components/AnimateText';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 text-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden">

        {/* Hero Content */}
        <motion.div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-blue-700 dark:text-blue-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Vidura Abeysinghe
          </motion.h2>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-blue-600 dark:text-blue-300 inline">
              I am a{' '}
              <span className="font-semibold relative inline-block h-8">
                <AnimateText />
              </span>
            </p>
          </motion.div>

          {/* Download CV Button + Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6"
          >
            <a
              href="/ViduraAbeysinghe_CV.pdf"
              download
              className="inline-block px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transform transition-transform duration-300 hover:-translate-y-1"
            >
              Download CV
            </a>

            <div className="flex justify-center space-x-6 mt-6 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/vidura13" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110">
                <FaGithub size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/viduraabeysinghe/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110">
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/Vidura_13" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110">
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.instagram.com/vd___a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
        <motion.div
          className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MarkdownRenderer fileName="about" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {[
            '.NET', 'React', 'C#', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MYSQL', 'MongoDB', 'Git', 'POSTMAN'
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-md transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center space-x-2">
                {skill === 'HTML5' && <FaHtml5 className="text-orange-600" />}
                {skill === 'CSS3' && <FaCss3Alt className="text-blue-600" />}
                {skill === 'JavaScript' && <FaJsSquare className="text-yellow-400" />}
                {skill === 'TypeScript' && <FaRegFileCode className="text-blue-700" />}
                {skill === 'React' && <FaReact className="text-blue-500" />}
                {skill === 'Tailwind CSS' && <SiTailwindcss className="text-teal-500" />}
                {skill === 'Git' && <FaGitAlt className="text-orange-900" />}
                {skill === '.NET' && <SiDotnet className="text-purple-700" />}
                {skill === 'POSTMAN' && <SiPostman className="text-orange-500" />}
                {skill === 'MYSQL' && <SiMysql className="text-blue-500" />}
                {skill === 'MongoDB' && <SiMongodb className="text-green-600" />}
                {skill === 'C#' && <SiC className="text-blue-500" />}

                <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-4 text-center">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start bg-white p-6 rounded-lg shadow-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Bachelor of Software Engineering (Hons)</h3>
              <p className="text-gray-600 text-left">The Open University of Sri Lanka</p>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <p className="text-gray-500">2023 - 2027</p>
              <p className="text-blue-600 font-medium"></p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-between items-start bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">High School & College Education</h3>
              <p className="text-gray-600 text-left">Ranabima Royal College - Kandy </p>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <p className="text-gray-500">2013 - 2022</p>
              <p className="text-blue-600 font-medium">G.C.E (OL) & G.C.E (AL)</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-between items-start bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 text-left" >Chartered Accountancy</h3>
              <p className="text-gray-600">Institute of Chartered Accountants of Sri Lanka</p>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <p className="text-gray-500">2024 - </p>
              <p className="text-blue-600 font-medium">Completed Business Level</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Customer management system  "
            description="A practical solution I designed to resolves inefficiencies in managing customer loyalty points for a fuel station manager"
            image="/projects/Project1_1.png"
            link="#"
          />
          <ProjectCard
            title="OpenSesame"
            description="A web-based platform designed to help with the academic experience of  students at the Open University of Sri Lanka (OUSL)"
            image="/projects/Project2_1.png"
            link="#"
          />
          <ProjectCard
            title="Event management system"
            description="This event management system allows administration to create, manage, register participants to events and get analysis"
            image="/projects/Project3_1.png"
            link="#"
          />
          <ProjectCard
            title="CashCoach - Mobile app"
            description="An android Aaplication developed to help users manage daily expenses in a more efficient and manageable way"
            image="/projects/Project4_1.png"
            link="#"
          />
        </div>
      </section>

      {/* Medium Section */}
      <section id="medium" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Find me on Medium
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ArticleCard
            title="The History of Sri Lankan Cricket"
            description="Cricket, often referred as a religion in Sri Lanka, has been a source of national pride and passion for decades. From its humble..."
            image="/historyofslcricArticle.webp"
            link="https://medium.com/@viduravd/the-history-of-sri-lankan-cricket-2d15843ae857"
            date="Jul 22, 2023"
            info="Read more on Medium"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-800">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mb-6">
            Interested in working together? Feel free to reach out!
          </p>
          <a
            href="mailto:viduravd@gmail.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition mb-8"
          >
            Send me an Email
          </a>

          <div className="flex justify-center space-x-6 text-gray-600">
            <a href="https://github.com/vidura13" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/viduraabeysinghe/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a href="https://twitter.com/Vidura_13" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.208-7.716-2.158-10.145-5.145-.424.723-.666 1.565-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}