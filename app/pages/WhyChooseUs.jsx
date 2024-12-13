// components/WhyChooseUs.jsx
import Image from 'next/image';
import { FaRegFileAlt, FaLightbulb, FaMoneyBillWave, FaClock, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';
import Features from '../../public/features.jpg';
import { GoPackage } from "react-icons/go";
export default function WhyChooseUs() {
  const items = [
    { title: 'Experience', icon: <FaRegFileAlt className="w-10 h-10 text-blue-500" />, description: 'With years of expertise, our skilled team delivers innovative solutions that meet and exceed your business needs.' },
    { title: 'Pricing', icon: <FaMoneyBillWave className="w-10 h-10 text-blue-500" />, description: 'Competitive, transparent pricing tailored to suit businesses of all sizes without sacrificing quality.' },
    { title: 'Products', icon: <GoPackage className="w-10 h-10 text-blue-500" />, description: 'We offer cutting-edge, reliable, and scalable solutions designed to drive growth and innovation for your business.' },
    { title: 'Delivery', icon: <FaClock className="w-10 h-10 text-blue-500" />, description: 'Timely project delivery with a focus on quality ensures your goals are achieved without compromise.' },
    { title: 'Approach', icon: <FaChalkboardTeacher className="w-10 h-10 text-blue-500" />, description: 'Our customer-centric approach emphasizes collaboration, flexibility, and a deep understanding of your vision.' },
    { title: 'Support', icon: <FaHeadset className="w-10 h-10 text-blue-500" />, description: 'Our dedicated support team ensures seamless assistance, from project inception to post-deployment and beyond.' },
  ];
 
  return (
    <section className="py-12 bg-white relative z-0" id='aboutus'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Why Choose Us</h2>
        {/* <p className="text-lg text-orange-500 mb-12">Lorem ipsum dolor sit amet</p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            {items.slice(0, 3).map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-center">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Image src={Features} alt="Illustration" className="object-cover rounded-lg " />
          </div>
          <div className="space-y-8">
            {items.slice(3).map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
