// pages/index.jsx
import ServiceCard from '../components/ServiceCard';
import { FaBrain, FaLinkedin, FaShieldAlt,FaChartLine,FaCloud,FaLock } from 'react-icons/fa'; // Import icons from react-icons
import { DiAndroid } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";
export default function Services() {
  const services = [
    { title: 'Application Development', icon: <DiAndroid className="w-12 h-12" />, description: 'Craft innovative, user-centric mobile and web applications tailored to your business needs, ensuring seamless performance and cutting-edge technology.' },
    { title: 'Web Design', icon: <CgWebsite className="w-12 h-12" />, description: "Design stunning, responsive websites that captivate visitors and deliver a flawless user experience, aligned with your brand's identity." },
    { title: 'Social Media', icon: <FaLinkedin className="w-12 h-12" />, description: "Elevate your brand with strategic social media campaigns that engage audiences, drive growth, and amplify your digital reach." },
    { title: 'SEO Optimization', icon: <FaChartLine className="w-12 h-12" />, description: 'Boost your online visibility with expert SEO strategies that drive traffic, improve search rankings, and maximize your digital presence.' },
    { title: 'Cloud Server', icon: <FaCloud className="w-12 h-12" />, description: 'Empower your business with secure, scalable cloud solutions for enhanced collaboration, storage, and agility in a dynamic tech landscape.' },
    { title: 'AI Solutions', icon: <FaBrain className="w-12 h-12" />, description: 'Revolutionize processes with custom AI-driven solutions, from predictive analytics to intelligent automation, tailored to your goals.' },
    // Add more services as needed
  ];

  return (
    <div className="py-12 bg-gray-100 relative z-0" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-600 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
