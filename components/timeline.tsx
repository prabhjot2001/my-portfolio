'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Experience {
  startDate: string;
  endDate: string;
  description: string;
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="flex items-center">
      {/* Vertical timeline bar */}
      <div className="w-2 h-full bg-gray-400 mx-4"></div>

      {/* Timeline cards */}
      <div className="flex flex-col justify-center">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            ref={ref}
            className="flex mb-8"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Alternate sides for cards */}
            <div className={`flex items-center justify-center w-32 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <div className={`max-w-lg  w-full mx-4 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
              <div className="bg-white py-16 border border-gray-300 shadow-md rounded-xl p-4">
                <h3 className="text-lg font-semibold">{experience.startDate} - {experience.endDate}</h3>
                <p className="text-sm text-gray-700 mt-2">{experience.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
