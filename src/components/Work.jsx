import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
      year: 2023,
      title: 'Northwestern University',
      duration: '6 months',
      details:
        'I decided to pursue my passion for Software Development and enrolled in Northwestern University\'s Full Stack Web Development Bootcamp. There, I received hands-on training from experienced instructors and mentors, providing valuable insights into the latest industry trends. I acquired comprehensive skills in modern web development, including front-end and back-end technologies including, but not limited to: HTML/CSS, Bootstrap, Tailwind, JavaScript, and the MERN stack. I also had the opportunity to collaborate with a diverse group of peers on various projects, which enhanced my ability with pair-programming and version control.  With my newfound knowledge, I\'m now ready to contribute to Tech in my first Developer Role!'
    },
    {
      year: 2021,
      title: 'Integral Ad Science',
      duration: '2 years',
      details:
        'As a Technical Client Services Manager, I handled the main ticket queue for North America. This involved replicating network call issues through utilization of Chrome Dev Tools, generating custom Reports via Looker and MySQL, and connecting clients with the appropriate Success and Bililng Channels. After 6 months, I was promoted to Senior Technical Account Manager. I served as the first point of contact for enterprise clients such as Coca-Cola, Toyota, AMEX, and Discover. For these accounts, I performed the tasks mentioned above while also leading training calls for agency clients on new product releases. During my time there, I was able to create official documentation for future TAMs to reference. I also created custom SQL queries for TAMs to use whentroubleshooting discrepancies as well.'
    },
    {
      year: 2019,
      title: 'ActiveCampaign',
      duration: '3 years',
      details:
        'Though I started as a Sales Development Representative, I was able to transition to a more technical role as a Product Specialist within 6 months. As a Product Specialist, I was the first point of contact through chat, phone, and email channels. I would replicate user issues via desktop sharing and running API calls through Postman. Ticket intake was handled through Zendesk and escalation was handled through JIRA. Ticket escalation involved writing concise summaries of the issue while also ensuring relevant screenshots and JSON responses were attached. When not busy, I would spend extra time leaning on my sales experience in order to lead consultative training sessions designed to enhance the soft-skills of newer hires.'
    },
    {
      year: 2018,
      title: 'Royal United Mortgage',
      duration: '2 years',
      details:
        'After an intensive two week program, I passed the SAFE MLO exam and achieved MLO certification in 7 states. My speciality was mainly in assisting clients with debt consolidation through mortgage refinances. I found leads through cold-calling a list of contacts while also maintaining a book of active accounts. Origination involved collecting and verifying documents, submitting applications, and coordinating with underwriters to ensure a smooth closing process.'
    },
    {
      year: 2014,
      title: 'Metro By T-Mobile',
      duration: '4 years',
      details:
        'As the General Manager of 7 MetroPCS locations, I managed a team of over 15 employees. In order to save on overhead, I transitioned our stores to using an open-source alternative, uniCenta POS, in each of our locations. This involved coordinating inventory with each location and also authoring both installation and FAQ documentation. I also took on a variety of other roles such as payroll, training, recruiting, and marketing.'
    }
  ];
  
  

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div>
  );
};

export default Work;
