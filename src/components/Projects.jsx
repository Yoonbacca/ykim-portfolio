import React from 'react';
import ProjectItem from './ProjectItem';
import jateImage from '../assets/jate.png';
import coursePlannerImage from '../assets/coursePlannerImage.png';
import noteTakerImage from '../assets/note-taker.png';
import readmeCreatorImage from '../assets/readme-creator.png';
import weatherAppImage from '../assets/weather-app.png';
import portfolioImage from '../assets/portfolio.png';

const links = [
    {
        img: jateImage,
        title: 'PWA Text Editor App',
        link: 'https://frozen-tundra-39915-8b836a404665.herokuapp.com/',
        repo: 'https://github.com/Yoonbacca/pwa-text-editor'
    },
    {
        img: coursePlannerImage,
        title: 'MERN Course Planner App',
        link: 'https://lit-river-19263-fccc9a14fadb.herokuapp.com/',
        repo: 'https://github.com/bklein1981/Course-Planner'
    },
    {
        img: noteTakerImage,
        title: 'Note Taker App',
        link: 'https://floating-anchorage-56438-3fd8267d65f7.herokuapp.com/',
        repo: 'https://github.com/Yoonbacca/note-taker'
    },
    {
        img: weatherAppImage,
        title: 'Weather App',
        link: 'https://yoonbacca.github.io/weather-dashboard/',
        repo: 'https://github.com/Yoonbacca/weather-dashboard'
    },
    {
        img: readmeCreatorImage,
        title: 'CLI README Generator',
        repo: 'https://github.com/Yoonbacca/readme-creator'
    },
    {
        img: portfolioImage,
        title: 'This Portfolio',
        repo: 'https://github.com/Yoonbacca/ykim-portfolio'
    }
]

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                A catalog of my notable projects. A link to the deployed application and the repository are provided for each project.
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
