import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-2xl font-bold">Projects</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-5 bg-gray-800 p-5 rounded-md"
      >
        <h3 className="text-xl">Portfolio Website</h3>
        <p className="text-gray-400">A modern portfolio website with Next.js & TailwindCSS</p>
      </motion.div>
    </section>
  );
}