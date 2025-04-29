import { motion } from 'framer-motion';

export default function MovieCard({ title }) {
  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition text-white"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
    </motion.div>
  );
}
