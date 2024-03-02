// components/ContactForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import SectionHeading from './section-heading';

interface FormData {
  name: string;
  email: string;
  query: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    query: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', query: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <div className="max-w-[99%] px-10 sm:px-0 sm:max-w-lg mx-auto mt-20 scroll-mt-24" id='contact'>
      <SectionHeading>Contact Me</SectionHeading>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700">Query</label>
          <textarea id="query" name="query" value={formData.query} onChange={handleChange} required rows={4} className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
