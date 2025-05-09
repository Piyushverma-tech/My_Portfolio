import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { BsBehance, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={18} />,
      url: 'https://github.com/Piyushverma-tech',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      url: 'https://www.linkedin.com/in/piyush-verma-dev/',
    },
    {
      name: 'Twitter',
      icon: <BsTwitterX size={16} />,
      url: 'https://x.com/piyushvermaDev',
    },
    {
      name: 'Behance',
      icon: <BsBehance size={20} />,
      url: 'https://www.behance.net/piyushverma91',
    },
  ];

  return (
    <footer className="border-t border-gray-100 bg-white py-24 dark:border-gray-800 dark:bg-black">
      <div className="container mx-auto px-16">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-1 text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowUp
              size={22}
              className="transition-transform duration-200 group-hover:-translate-y-1"
            />
          </button>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Piyush Verma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
