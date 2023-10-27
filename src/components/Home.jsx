import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
  return (
    <header>
    <div id="home">
      <img
        className="w-full h-screen object-cover object-left scale-x"
        src="https://images.unsplash.com/photo-1634544353496-140f580743ed?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Yoon-Jae Kim</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                'Skilled Developer',
                2000, // wait 2s before next string
                'Coder Extraordinaire',
                2000,
                'Former Technical Account Manager',
                2000,
                'Former Product Specialist',
                2000,
                'Effervescent Communicator',
                2000,
                'Highly-Rated Husband',
                2000,
                'Student of Life',
                2000,
                'Sensei of the Web',
                2000,
                'Home Chef',
                2000,
                'Proud Dog Dad',
                2000,
                'Killer of Plants',
                2000,
                'Professional Wrestling Fan',
                2000,
                'Cross-stitcher',
                2000,
                'Lifter of Moderately Weights',
                2000,
                'Esposo de una Latina',
                2000,
                'Cat Dad',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://github.com/yoonbacca" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer" size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/yoon-jae-kim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.facebook.com/Yoonbacca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/yoonbacca/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Home;
