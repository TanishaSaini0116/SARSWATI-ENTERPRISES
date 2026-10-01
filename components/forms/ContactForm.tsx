'use client';

import { useState } from 'react';
import { FormField } from '../shared/FormField';
// import { CTAButton } from '../shared/CTAButton';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-soft-bg p-8 rounded-2xl text-center border border-green-accent">
        <h3 className="text-2xl font-bold text-primary mb-2">Message Sent Successfully!</h3>
        <p className="text-primary">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-primary font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Full Name" name="name" required placeholder="John Doe" />
        <FormField label="Email Address" type="email" name="email" required placeholder="john@company.com" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Phone Number" type="tel" name="phone" required placeholder="+91 95717 25256" />
        <FormField label="Company (Optional)" name="company" placeholder="Your Company Name" />
      </div>
      <FormField 
        label="Subject" 
        as="select" 
        name="subject" 
        required 
        options={[
          { label: 'General Inquiry', value: 'general' },
          { label: 'Product Information', value: 'product' },
          { label: 'Service Request', value: 'service' },
          { label: 'Partnership', value: 'partnership' },
        ]}
      />
      <FormField label="Message" as="textarea" name="message" required placeholder="How can we help you?" />
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-green-accent text-white font-semibold py-4 rounded-lg shadow-md hover:bg-green-accent transition-colors disabled:opacity-70 flex justify-center items-center"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
