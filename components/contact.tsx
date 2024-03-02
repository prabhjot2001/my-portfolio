'use client'
import React from 'react';
import ContactForm from '../components/contact-form';

const ContactPage: React.FC = () => {
  const handleSubmit = (formData: any) => {
    // Handle form submission, e.g., send email, save data to database, etc.
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-8">
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ContactPage;
