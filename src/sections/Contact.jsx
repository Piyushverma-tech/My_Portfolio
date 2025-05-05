import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const formData = new FormData(e.target);

    formData.append('access_key', 'a78f0286-8d52-4a42-8379-5812e7c41eb7');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        console.log('Success', res);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Form submission failed:', res.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <section
      id="contact"
      className="py-24 min-h-screen bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold  items-center justify-center">
            Get in Touch
            <motion.div
              className="h-1 w-20 bg-red-500 mx-auto mt-3"
              initial={{ width: 0 }}
              whileInView={{ width: 140 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
            Interested in working together or have an opportunity to discuss?
            Feel free to reach out I&apos;d love to connect!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full p-3 bg-white border ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                } focus:outline-none focus:border-black transition-colors duration-200`}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full p-3 bg-white border ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                } focus:outline-none focus:border-black transition-colors duration-200`}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Subject Input */}
            <div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`w-full p-3 bg-white border ${
                  errors.subject ? 'border-red-500' : 'border-gray-200'
                } focus:outline-none focus:border-black transition-colors duration-200`}
              />
              {errors.subject && (
                <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className={`w-full p-3 bg-white border ${
                  errors.message ? 'border-red-500' : 'border-gray-200'
                } focus:outline-none focus:border-black transition-colors duration-200 resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`relative w-full p-3 flex items-center justify-center text-white overflow-hidden 
    ${isSubmitted ? 'bg-green-600' : 'bg-black'}
    transition-colors duration-200 disabled:opacity-70 shadow-md`}
              whileHover={
                !isSubmitting && !isSubmitted
                  ? {
                      scale: 1.02,
                      boxShadow: '0 8px 20px -5px rgba(0, 0, 0, 0.2)',
                    }
                  : {}
              }
              whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
            >
              {/* Content container */}
              <div className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <motion.div
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                ) : isSubmitted ? (
                  <>
                    <Check size={20} className="mr-2" />
                    Thank you! I will get back to you soon
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </div>

              {/* Shine effect */}
              {!isSubmitting && !isSubmitted && (
                <motion.div
                  className="absolute inset-0 -left-full w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                  animate={{
                    x: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: 'easeInOut',
                  }}
                />
              )}

              {/* Subtle background glow on hover - only for active state */}
              {!isSubmitting && !isSubmitted && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-gray-600/0 to-gray-500/0 opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 0.15 }}
                />
              )}

              {/* Bottom border highlight - only for active state */}
              {!isSubmitting && !isSubmitted && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gray-400 to-white"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          </form>

          {/* Alternative Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center text-gray-600"
          >
            <p>Or reach out directly via email:</p>
            <a
              href="mailto:your.email@example.com"
              className="text-black hover:underline mt-1 inline-block"
            >
              Piyush626480@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
