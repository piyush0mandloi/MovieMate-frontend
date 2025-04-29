import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

export default function Home() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center text-center">
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <Stars radius={100} depth={50} count={3000} factor={4} />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <motion.div 
        className="z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-pink-400 mb-4">
          Welcome to MovieMate
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-md mx-auto">
          Discover movies similar to your favorites with AI-powered recommendations.
        </p>
        <a href="/recommend" className="px-6 py-3 bg-pink-500 rounded-full font-medium hover:bg-pink-600 transition">
          Get Recommendations
        </a>
      </motion.div>
    </div>
  );
}
