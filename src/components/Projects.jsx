import React from 'react';
import ProjectItem from './ProjectItem';
import jateImage from '../assets/jate.png';
import techBlogImage from '../assets/tech-blog.png';
import noteTakerImage from '../assets/note-taker.png';
import readmeCreatorImage from '../assets/readme-creator.png';
import weatherAppImage from '../assets/weather-app.png';

const links = [
    {
        img: jateImage,
        title: 'PWA Text Editor App',
        link: 'https://frozen-tundra-39915-8b836a404665.herokuapp.com/',
        repo: 'https://github.com/Yoonbacca/pwa-text-editor'
    },
    {
        img: techBlogImage,
        title: 'Fullstack Tech Blog App',
        link: 'https://damp-forest-37399-35c30431bcb5.herokuapp.com/',
        repo: 'https://github.com/Yoonbacca/tech-blog'
    },
    {
        img: noteTakerImage,
        title: 'Note Taker App',
        link: 'https://floating-anchorage-56438-3fd8267d65f7.herokuapp.com/',
        repo: ''
    },
    {
        img: readmeCreatorImage,
        title: 'CLI README Generator',
        link: 'https://github.com/Yoonbacca/readme-creator',
        repo: 'https://github.com/Yoonbacca/readme-creator'
    },
    {
        img: weatherAppImage,
        title: 'Weather App',
        link: 'https://yoonbacca.github.io/weather-dashboard/',
        repo: 'https://github.com/Yoonbacca/weather-dashboard'
    }
]

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
            {links.map((item, idx) => (
            <ProjectItem key={idx} img={item.img} title={item.title} link={item.link} repo={item.repo} />
        ))}

            </div>
        </div>
    )
};

export default Projects;
