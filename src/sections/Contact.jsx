import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Check,
  Terminal,
  User,
  Mail,
  MessageSquare,
  Zap,
  Code,
  Database,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [currentField, setCurrentField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTerminalMode, setIsTerminalMode] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    '> System initialized...',
    '> Contact protocol ready',
    '> Type "help" for commands',
  ]);
  const [terminalMode, setTerminalMode] = useState('normal'); // normal, edit, multiline
  const [editingField, setEditingField] = useState('');
  const [multilineBuffer, setMultilineBuffer] = useState('');
  const terminalRef = useRef(null);
  useEffect(() => {
    if (terminalRef.current && isTerminalMode) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory, isTerminalMode]);

  const fields = [
    {
      key: 'name',
      label: 'IDENTITY',
      placeholder: 'your.name',
      icon: User,
      type: 'text',
    },
    {
      key: 'email',
      label: 'COMM_LINK',
      placeholder: 'user@domain.com',
      icon: Mail,
      type: 'email',
    },
    {
      key: 'subject',
      label: 'PROTOCOL',
      placeholder: 'mission.briefing',
      icon: Code,
      type: 'text',
    },
    {
      key: 'message',
      label: 'DATA_STREAM',
      placeholder: 'transmission.content',
      icon: MessageSquare,
      type: 'textarea',
    },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addToHistory = (lines) => {
    const newLines = Array.isArray(lines) ? lines : [lines];
    setTerminalHistory((prev) => [...prev, ...newLines]);
  };

  const handleSubmit = async () => {
    // Validation
    const requiredFields = Object.values(formData).every((v) => v.trim());
    const emailValid = validateEmail(formData.email);
    const messageValid = formData.message.trim().length >= 10;

    if (!requiredFields || !emailValid || !messageValid) {
      return false; // Return false if validation fails
    }

    setIsSubmitting(true);

    // Create a new object with form data and access key
    const submitData = {
      ...formData,
      access_key: 'a78f0286-8d52-4a42-8379-5812e7c41eb7',
    };

    const json = JSON.stringify(submitData);

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

        // Add success message to terminal if in terminal mode
        if (isTerminalMode) {
          addToHistory([
            'Transmission successful!',
            'Form has been reset.',
            'STATUS: Ready for new transmission',
          ]);
        }

        setIsSubmitting(false);
        return true;
      } else {
        console.error('Form submission failed:', res.message);

        // Add error message to terminal if in terminal mode
        if (isTerminalMode) {
          addToHistory([
            'ERROR: Transmission failed - ' + (res.message || 'Unknown error'),
          ]);
        }

        setIsSubmitting(false);
        return false;
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      // Add error message to terminal if in terminal mode
      if (isTerminalMode) {
        addToHistory(['ERROR: Network error - ' + error.message]);
      }

      setIsSubmitting(false);
      return false;
    }
  };

  const handleTerminalCommand = (e) => {
    if (e.key === 'Enter') {
      const input = terminalInput.trim();

      // Handle multiline mode
      if (terminalMode === 'multiline') {
        if (input === '.end' || input === ':wq') {
          // End multiline editing
          setFormData((prev) => ({ ...prev, [editingField]: multilineBuffer }));
          addToHistory([
            `> ${terminalInput}`,
            `${editingField.toUpperCase()} updated successfully`,
            'Exited multiline mode',
          ]);
          setTerminalMode('normal');
          setEditingField('');
          setMultilineBuffer('');
        } else if (input === '.cancel' || input === ':q') {
          // Cancel multiline editing
          addToHistory([`> ${terminalInput}`, 'Multiline editing cancelled']);
          setTerminalMode('normal');
          setEditingField('');
          setMultilineBuffer('');
        } else {
          // Add line to buffer
          setMultilineBuffer((prev) => prev + (prev ? '\n' : '') + input);
          addToHistory(`> ${terminalInput}`);
        }
        setTerminalInput('');
        return;
      }

      // Handle edit mode
      if (terminalMode === 'edit') {
        if (input === ':wq' || input === '.save') {
          // Save and exit edit mode
          addToHistory([
            `> ${terminalInput}`,
            `${editingField.toUpperCase()} saved successfully`,
          ]);
          setTerminalMode('normal');
          setEditingField('');
        } else if (input === ':q' || input === '.cancel') {
          // Cancel edit mode
          addToHistory([`> ${terminalInput}`, 'Edit cancelled']);
          setTerminalMode('normal');
          setEditingField('');
        } else {
          // Update field value
          setFormData((prev) => ({ ...prev, [editingField]: input }));
          addToHistory(`> ${terminalInput}`);
        }
        setTerminalInput('');
        return;
      }

      // Normal command mode
      const command = input.toLowerCase();
      const newHistory = [...terminalHistory, `> ${terminalInput}`];

      if (command === 'help' || command === '?') {
        newHistory.push(
          '=== AVAILABLE COMMANDS ===',
          'help, ? - Show this help',
          'form - Switch to GUI mode',
          'status - Check form completion status',
          'show [field] - Display field value',
          'list - Show all fields and values',
          'edit <field> - Edit field in single-line mode',
          'multi <field> - Edit field in multi-line mode',
          'set <field> <value> - Set field to value',
          'clear [field] - Clear field or entire form',
          'validate - Validate all fields',
          'submit - Submit the form',
          'reset - Reset entire form',
          'exit, quit - Switch to GUI mode',
          '',
          'Fields: name, email, subject, message',
          'In edit mode: :wq to save, :q to cancel',
          'In multi mode: .end to save, .cancel to cancel'
        );
      } else if (
        command === 'form' ||
        command === 'exit' ||
        command === 'quit'
      ) {
        setIsTerminalMode(false);
        newHistory.push('Switching to GUI mode...');
      } else if (command === 'status') {
        const filled = Object.values(formData).filter((v) => v.trim()).length;
        const total = fields.length;
        const percentage = Math.round((filled / total) * 100);
        newHistory.push(
          `Form completion: ${filled}/${total} fields (${percentage}%)`,
          filled === total
            ? 'STATUS: Ready for submission'
            : 'STATUS: Incomplete'
        );
      } else if (command === 'list' || command === 'ls') {
        newHistory.push('=== FORM DATA ===');
        fields.forEach((field) => {
          const value = formData[field.key];
          const status = value.trim() ? '✓' : '✗';
          const display = value.trim()
            ? value.length > 50
              ? value.substring(0, 47) + '...'
              : value
            : '<empty>';
          newHistory.push(`${status} ${field.key.toUpperCase()}: ${display}`);
        });
      } else if (command.startsWith('show ')) {
        const field = command.split(' ')[1];
        if (fields.find((f) => f.key === field)) {
          const value = formData[field];
          newHistory.push(
            `${field.toUpperCase()}: ${value || '<empty>'}`,
            `Length: ${value.length} characters`
          );
        } else {
          newHistory.push(
            'ERROR: Invalid field. Available: name, email, subject, message'
          );
        }
      } else if (command.startsWith('edit ')) {
        const field = command.split(' ')[1];
        if (fields.find((f) => f.key === field)) {
          setTerminalMode('edit');
          setEditingField(field);
          newHistory.push(
            `Editing ${field.toUpperCase()}`,
            `Current value: ${formData[field] || '<empty>'}`,
            'Type new value and press Enter',
            'Commands: :wq to save, :q to cancel'
          );
        } else {
          newHistory.push(
            'ERROR: Invalid field. Available: name, email, subject, message'
          );
        }
      } else if (command.startsWith('multi ')) {
        const field = command.split(' ')[1];
        if (fields.find((f) => f.key === field)) {
          setTerminalMode('multiline');
          setEditingField(field);
          setMultilineBuffer(formData[field] || '');
          newHistory.push(
            `Multi-line editing ${field.toUpperCase()}`,
            'Type your content (multiple lines supported)',
            'Commands: .end to save, .cancel to cancel'
          );
        } else {
          newHistory.push(
            'ERROR: Invalid field. Available: name, email, subject, message'
          );
        }
      } else if (command.startsWith('set ')) {
        const parts = input.split(' ');
        const field = parts[1];
        const value = parts.slice(2).join(' ');

        if (fields.find((f) => f.key === field)) {
          setFormData((prev) => ({ ...prev, [field]: value }));
          newHistory.push(`${field.toUpperCase()} updated`);
        } else {
          newHistory.push(
            'ERROR: Invalid field. Available: name, email, subject, message'
          );
        }
      } else if (command === 'clear' || command === 'cls') {
        setTerminalHistory(['> Terminal cleared']);
        setTerminalInput('');
        return;
      } else if (command.startsWith('clear ')) {
        const field = command.split(' ')[1];
        if (field === 'all') {
          setFormData({ name: '', email: '', subject: '', message: '' });
          newHistory.push('All fields cleared');
        } else if (fields.find((f) => f.key === field)) {
          setFormData((prev) => ({ ...prev, [field]: '' }));
          newHistory.push(`${field.toUpperCase()} cleared`);
        } else {
          newHistory.push(
            'ERROR: Invalid field. Use "clear all" or specify: name, email, subject, message'
          );
        }
      } else if (command === 'validate') {
        newHistory.push('=== VALIDATION RESULTS ===');
        let isValid = true;

        // Check name
        if (!formData.name.trim()) {
          newHistory.push('✗ NAME: Required');
          isValid = false;
        } else {
          newHistory.push('✓ NAME: Valid');
        }

        // Check email
        if (!formData.email.trim()) {
          newHistory.push('✗ EMAIL: Required');
          isValid = false;
        } else if (!validateEmail(formData.email)) {
          newHistory.push('✗ EMAIL: Invalid format');
          isValid = false;
        } else {
          newHistory.push('✓ EMAIL: Valid');
        }

        // Check subject
        if (!formData.subject.trim()) {
          newHistory.push('✗ SUBJECT: Required');
          isValid = false;
        } else {
          newHistory.push('✓ SUBJECT: Valid');
        }

        // Check message
        if (!formData.message.trim()) {
          newHistory.push('✗ MESSAGE: Required');
          isValid = false;
        } else if (formData.message.trim().length < 10) {
          newHistory.push('✗ MESSAGE: Too short (minimum 10 characters)');
          isValid = false;
        } else {
          newHistory.push('✓ MESSAGE: Valid');
        }

        newHistory.push('');
        newHistory.push(isValid ? 'VALIDATION: PASSED' : 'VALIDATION: FAILED');
      } else if (command === 'submit') {
        const requiredFields = Object.values(formData).every((v) => v.trim());
        const emailValid = validateEmail(formData.email);
        const messageValid = formData.message.trim().length >= 10;

        if (!requiredFields) {
          newHistory.push('ERROR: All fields are required');
        } else if (!emailValid) {
          newHistory.push('ERROR: Invalid email format');
        } else if (!messageValid) {
          newHistory.push('ERROR: Message must be at least 10 characters');
        } else {
          newHistory.push('Initiating transmission...');
          setTerminalHistory(newHistory);
          setTerminalInput('');

          // Call handleSubmit and handle the result
          handleSubmit()
            .then((success) => {
              console.log(success);
            })
            .catch((error) => {
              addToHistory(['ERROR: Submission failed - ' + error.message]);
            });

          return; // Early return to avoid duplicate history update
        }
      } else if (command === 'reset') {
        setFormData({ name: '', email: '', subject: '', message: '' });
        newHistory.push('Form reset to initial state');
      } else if (command) {
        newHistory.push(
          `Command not recognized: ${command}`,
          'Type "help" for available commands'
        );
      }

      setTerminalHistory(newHistory);
      setTerminalInput('');
    }
  };

  const getCompletionPercentage = () => {
    const filledFields = Object.values(formData).filter((v) => v.trim()).length;
    return (filledFields / fields.length) * 100;
  };

  const getTerminalPrompt = () => {
    if (terminalMode === 'edit') {
      return `edit:${editingField}$`;
    } else if (terminalMode === 'multiline') {
      return `multi:${editingField}$`;
    }
    return '$';
  };

  // Cyberpunk Animation variants for the heading
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9, // Less dramatic scale change
      rotateX: -10, // Reduced rotation
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5, // Reduced from 0.8s
        ease: 'easeOut',
        staggerChildren: 0.05, // Reduced from 0.1s
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
    },
    visible: {
      opacity: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transition: {
        duration: 0.6, // Reduced from 1s
        ease: 'easeInOut',
        delay: 0.2, // Reduced from 0.6s
      },
    },
  };

  const accentVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  };

  return (
    <section
      className=" min-h-screen pt-8 pb-12  relative overflow-hidden"
      id="contact"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-2xl  relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-16 text-center relative"
          >
            {/* Cyberpunk-styled header container */}
            <motion.div
              className="relative inline-block"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Main heading with cyberpunk styling */}
              <motion.h2
                className="text-3xl md:text-4xl font-bold px-8 py-4 tracking-widest uppercase text-green-400 font-mono max-sm:hidden"
                variants={textVariants}
              >
                &gt; establish_connection
                <motion.span
                  className="text-cyan-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }} // Slightly faster blinking
                >
                  |
                </motion.span>
              </motion.h2>
              <motion.h2
                className="text-2xl md:text-4xl font-bold px-8 py-4 tracking-widest uppercase text-green-400 font-mono hidden max-sm:block"
                variants={textVariants}
              >
                &gt; Contact
                <motion.span
                  className="text-cyan-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }} // Slightly faster blinking
                >
                  |
                </motion.span>
              </motion.h2>

              {/* Cyberpunk corner accents */}
              <motion.div
                className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-green-400"
                variants={accentVariants}
              />
              <motion.div
                className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan-400"
                variants={accentVariants}
              />
              <motion.div
                className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400"
                variants={accentVariants}
              />
              <motion.div
                className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-green-400"
                variants={accentVariants}
              />
            </motion.div>
          </motion.div>
          <div className="inline-flex items-center gap-3 bg-black/50 border border-green-400/30 px-6 py-3 backdrop-blur-sm">
            <Terminal className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-mono text-sm">
              CONTACT_PROTOCOL_ACTIVE
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Main Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black/80 border border-green-400/30 backdrop-blur-lg relative overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="h-1 bg-gray-800 relative">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${getCompletionPercentage()}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Mode Toggle */}
          <div className="p-4 border-b border-green-400/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono text-xs sm:text-sm">
                NEURAL_INTERFACE_v2.1
              </span>
              {terminalMode !== 'normal' && (
                <span className="text-cyan-400 font-mono text-sm ml-2">
                  [{terminalMode.toUpperCase()}_MODE]
                </span>
              )}
            </div>
            <button
              onClick={() => setIsTerminalMode(!isTerminalMode)}
              className="text-xs sm:text-sm font-mono text-green-400 hover:text-cyan-400 transition-colors px-3 py-1 border border-green-400/30 hover:border-cyan-400/50"
            >
              {isTerminalMode ? 'GUI_MODE' : 'TERMINAL_MODE'}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isTerminalMode ? (
              /* Terminal Mode */
              <motion.div
                key="terminal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 h-96 font-mono text-sm"
              >
                <div className="h-full flex flex-col">
                  <div
                    ref={terminalRef}
                    className="flex-1 overflow-y-auto mb-4 space-y-1"
                  >
                    {terminalHistory.map((line, i) => (
                      <div
                        key={i}
                        className={`${
                          line.startsWith('ERROR:')
                            ? 'text-red-400'
                            : line.startsWith('✓')
                            ? 'text-green-400'
                            : line.startsWith('✗')
                            ? 'text-red-400'
                            : line.startsWith('===')
                            ? 'text-cyan-400'
                            : line.startsWith('STATUS:')
                            ? 'text-yellow-400'
                            : line.startsWith('VALIDATION:')
                            ? 'text-cyan-400'
                            : 'text-green-400'
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">{getTerminalPrompt()}</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyPress={handleTerminalCommand}
                      className="flex-1 bg-transparent text-green-400 outline-none font-mono"
                      placeholder={
                        terminalMode === 'edit'
                          ? 'Enter new value...'
                          : terminalMode === 'multiline'
                          ? 'Enter content (use .end to save)...'
                          : 'Enter command...'
                      }
                      autoFocus
                    />
                    <motion.div
                      className="w-2 h-4 bg-green-400"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              /* GUI Mode */
              <motion.div
                key="gui"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-6"
              >
                {/* Compact Form Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {fields.map((field, index) => {
                    const Icon = field.icon;
                    const isActive = currentField === field.key;
                    const isFilled = formData[field.key].trim();

                    return (
                      <motion.div
                        key={field.key}
                        className={`relative border transition-all duration-300 ${
                          isActive
                            ? 'border-cyan-400 bg-cyan-400/5'
                            : isFilled
                            ? 'border-green-400/50 bg-green-400/5'
                            : 'border-green-400/20 hover:border-green-400/40'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon
                              className={`w-4 h-4 ${
                                isActive
                                  ? 'text-cyan-400'
                                  : isFilled
                                  ? 'text-green-400'
                                  : 'text-gray-400'
                              }`}
                            />
                            <span
                              className={`text-xs font-mono ${
                                isActive
                                  ? 'text-cyan-400'
                                  : isFilled
                                  ? 'text-green-400'
                                  : 'text-gray-400'
                              }`}
                            >
                              {field.label}
                            </span>
                          </div>

                          {field.type === 'textarea' ? (
                            <textarea
                              name={field.key}
                              value={formData[field.key]}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  [field.key]: e.target.value,
                                }))
                              }
                              onFocus={() => setCurrentField(field.key)}
                              onBlur={() => setCurrentField(null)}
                              placeholder={field.placeholder}
                              rows={3}
                              className="w-full bg-transparent text-green-400 text-sm font-mono placeholder-gray-600 outline-none resize-none"
                            />
                          ) : (
                            <input
                              type={field.type}
                              name={field.key}
                              value={formData[field.key]}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  [field.key]: e.target.value,
                                }))
                              }
                              onFocus={() => setCurrentField(field.key)}
                              onBlur={() => setCurrentField(null)}
                              placeholder={field.placeholder}
                              className="w-full bg-transparent text-green-400 text-sm font-mono placeholder-gray-600 outline-none"
                            />
                          )}
                        </div>

                        {/* Field Status Indicator */}
                        <div
                          className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                            isFilled ? 'bg-green-400' : 'bg-gray-600'
                          }`}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={
                    isSubmitting ||
                    isSubmitted ||
                    !Object.values(formData).every((v) => v.trim())
                  }
                  className={`w-full p-4 font-mono text-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-400/20 border-green-400 text-green-400'
                      : Object.values(formData).every((v) => v.trim())
                      ? 'bg-gradient-to-r from-green-400/10 to-cyan-400/10 border-gradient-to-r border-cyan-400 text-cyan-400 hover:from-green-400/20 hover:to-cyan-400/20'
                      : 'bg-gray-800/50 border-gray-600 text-gray-500 cursor-not-allowed'
                  } border`}
                  whileHover={
                    Object.values(formData).every((v) => v.trim()) &&
                    !isSubmitting
                      ? { scale: 1.02 }
                      : {}
                  }
                  whileTap={
                    Object.values(formData).every((v) => v.trim()) &&
                    !isSubmitting
                      ? { scale: 0.98 }
                      : {}
                  }
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      TRANSMITTING...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      TRANSMISSION_COMPLETE
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      INITIATE_TRANSMISSION
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status Bar */}
          <div className="px-6 py-3 border-t border-green-400/20 flex justify-between items-center text-xs max-sm:flex-col max-sm:gap-y-3 sm:text-sm font-mono">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400">ONLINE</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">
                {Math.round(getCompletionPercentage())}% COMPLETE
              </span>
            </div>
            <div className="text-gray-400">
              DIRECT:{' '}
              <a
                href="mailto:Piyush626480@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                Piyush626480@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
