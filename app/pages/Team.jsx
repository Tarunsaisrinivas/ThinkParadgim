import Image from 'next/image';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Arya Teja  Rudraraju',
    role: 'Founder',
    image: '/Arya.jpg', // Make sure to add corresponding images in public/images folder
    social: {
     
      linkedin: 'https://www.linkedin.com/in/arya-teja-rudraraju?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
     
    },
  },
  {
    name: 'Harsh Shah',
    role: 'Co Founder',
    image: '/HarshShah.jpg',
    social: {
     
      
      linkedin: 'https://www.linkedin.com/in/connecthshah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      
    },
  },
  
];

const Team = () => {
  return (
    <div className="bg-gray-100 py-12 relative z-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-blue-600 font-semibold tracking-wide uppercase">Founders</h2>
          {/* <p className="mt-1 text-xl text-orange-500 sm:text-xl">
            Lorem ipsum dolor sit amet
          </p> */}
        </div>

        <div className="mt-10 grid grid-cols-1 place-items-center gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <Image className="object-cover m-auto rounded-md" src={member.image} width={250} height={250} alt={member.name} />
              <h3 className="mt-4 text-xl font-semibold text-center text-gray-800">{member.name}</h3>
              <p className="text-center text-blue-500">{member.role}</p>

              <div className="mt-4 flex justify-center space-x-3">
                {/* <a href={member.social.twitter} className="text-blue-500 hover:text-blue-700">
                  <FaTwitter size={24} />
                </a>
                <a href={member.social.facebook} className="text-blue-500 hover:text-blue-700">
                  <FaFacebook size={24} />
                </a> */}
                <a href={member.social.linkedin} className="text-blue-500 hover:text-blue-700">
                  <FaLinkedin size={24} />
                </a>
                {/* <a href={member.social.instagram} className="text-blue-500 hover:text-blue-700">
                  <FaInstagram size={24} />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
