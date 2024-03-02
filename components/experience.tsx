// pages/experience.tsx
import React from 'react';
import Timeline from '../components/timeline';
import SectionHeading from './section-heading';

interface Experience {
  startDate: string;
  endDate: string;
  description: string;
}

const experiences: Experience[] = [
  {
    startDate: '2023',
    endDate: 'Present',
    description: 'Started as a freelancer backend developer and currently working on ecommerce platform.'
  },
  // {
  //   startDate: '2016',
  //   endDate: '2018',
  //   description: 'Interned at Company Y, gaining experience in frontend development.'
  // },
  // Add more experiences as needed
];

const ExperiencePage: React.FC = () => {
  return (
    <div className='mt-20 scroll-mt-24' id='experience'>
      <SectionHeading>My Experience</SectionHeading>
      <div className='mt-20'>
      <Timeline experiences={experiences} />
      </div>
    </div>
  );
};

export default ExperiencePage;
