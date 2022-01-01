import React, {useState} from 'react';
import "../styles/Projects.css";
import ProjectDetail from './ProjectDetail';
import ProjectItem from './ProjectItem';

const projects = [
    {
        image:'https://www.leparisien.fr/resizer/d215pck3D75_RttKY8bvRIoEzVw=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/AJNGNE3DZE2424T3T3KNPTZFB4.jpg',
        name:'Amazon-Clone',
        app:'full-stack e-commerce app',
        description:'Amazon-clone is a full-stack web application developed for e-commerce  business, with stripe api for online payment and JsonWebToken for authentication and authorization',
        link:'https://cocky-elion-8a8571.netlify.app/',
        tech:'ReactJs/Nodejs/express\n/mongoose/mongodb',
        images:[
            './Capture14.PNG',
            './Capture15.PNG',
            './Capture16.PNG',
            './Capture17.PNG',
        ],
        id:"1234567"
    },
    //http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png
    {
        image:'./Capture9.PNG',
        images:[
            './Capture9.PNG',
            './Capture10.PNG',
            './Capture11.PNG',
            './Capture13.PNG',
        ],
        name:'Kalam',
        app:'full-stack chat app',
        description:'Kalam is a full-stack web application for online chating based on socket connection, with socket.io library and an app state management with Redux',
        link:'https://admiring-heyrovsky-f50208.netlify.app/',
        tech:'ReactJs/Nodejs/Express\n/mongoose/mongodb',
        id:"12345,"
    },
    {
        image:'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
        images:[
            './Capture4.PNG',
            './Capture5.PNG',
            './Capture6.PNG',
            './Capture7.PNG',
            './Capture8.PNG',
        ],
        name:'Netflix-Clone',
        app:'movies app',
        description:'Netflix-clone is a web application inspired by the real netflix app with nice design, and advanced react hooks and context usage',
        link:'https://optimistic-yonath-7116e3.netlify.app/',
        tech:'React Js',
        id:"12547856"
    },
    {
        image:'https://www.basin.be/sites/default/files/Nieuws/covid-19_2.jpg',
        images:[
            './Capture.PNG',
            './Capture1.PNG',
            './Capture3.PNG',
        ],
        name:'Covid-19-Tracker',
        app:'data tracking app',
        description:'Covid-19-Tracker is a web application for displaying data about the current situation of covid-19 and vaccines',
        link:'https://dazzling-neumann-415d16.netlify.app/',
        tech:'React Js',
        id:"1234"
    },
    {
        image:'https://startup-agency-modern.vercel.app/_next/static/images/core-feature-c6eabc0638db680f5fdedbf6c3b1b05a.png',
        name:'landing-page',
        images:[
            './Capture18.PNG',
            './Capture19.PNG',
            './Capture20.PNG',
            './Capture21.PNG',
        ],
        app:'modern landing page',
        description:'landing-page is a responsive website with modern design ',
        link:'https://landing-page-c4aa5.web.app/',
        tech:'React Js',
        id:"123"
    },
    
];

function Projects({navOpened}) {
    const [selected, setSelected] = useState({
        isSelected: false,
        project:null
    });

    function handleSelectProject(_project){
        setSelected({
            isSelected: true,
            project: _project
        })
    }

    return (
        <div id='portfolio' className={`projects ${navOpened? "active":""}`}>
            <h1 data-aos="fade-right">PROJECTS</h1>
            <div data-aos="fade-left" className='line'></div>

            <div className='projects__display'>
                {
                    projects.map(({id,image, name, tech, images, app, link, description}) => (
                        <ProjectItem
                          key={id}
                          image={image}
                          name={name}
                          techUsed={tech}
                          images={images}
                          app={app}
                          link={link}
                          description={description}
                          setProject={handleSelectProject}
                        />
                    ))
                }
            </div>

            {selected.isSelected ? <ProjectDetail
                                        project={selected.project}
                                        close={() =>{ setSelected({
                                            isSelected:false,
                                            project: null,
                                        }) }}
                                    />: null}
        </div>
    )
}

export default Projects;
