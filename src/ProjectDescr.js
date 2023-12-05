import './ProjectDescr.css';
import im from './front.jpg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react';

function ProjectDescr(props) {
  const openSite = () => {
    console.log(props.p.projectLinkList.websiteLnk);
    window.open(props.p.projectLinkList.websiteLnk, '_blank');
  }
  const openGithub = () => {
    window.open(props.p.projectLinkList.codeLink, '_blank');
    // setCurrentProject(Number(props.p));
    // const projectDesplayed = JSON.parse(localStorage.getItem('projectDisplayed'));
    // console.log('current project is ' + props.p.projectDescription);
  }
  // const [currentProject, setCurrentProject] = useState(0);
  // useEffect(() => {
  //   // setCurrentProject(Number(props.p));
  //   // document.getElementById('projectDescription').innerHTML = appsList[currentProject].projectDescription;
  //   const projectDesplayed = JSON.parse(localStorage.getItem('projectDisplayed'));
  //   if (projectDesplayed) {
  //     // console.log('user notes found');
  //     setCurrentProject(Number(projectDesplayed));
  //     console.log('hhhhhhhhhhhhhhhhh');
  //     document.getElementById('projectDescription').innerHTML = appsList[currentProject].projectDescription;
  //   } 
    
  // }, []);
  // setCc(props.p);
  // localStorage.setItem('userNotes', JSON.stringify(newNotes));
  // const appsList = [
  //   {
  //     projectName : 'Fridge Notes App',
  //     projectDescription : 'Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 ',
  //     projectToolsList : ['JS', 'HTML+CSS', 'React.js', 'MUI'],
  //     projectLinkList : [ {
  //       websiteLnk : 'https://google.com',
  //       codeLink : 'https://google.com'
  //     }
  //     ]
  //   },
  //   {
  //     projectName : 'Quiz App',
  //     projectDescription : 'Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 ',
  //     projectToolsList : ['JS', 'HTML+CSS', 'Bootstrap', 'jQuery'],
  //     projectLinkList : [ {
  //       websiteLnk : 'https://google.com',
  //       codeLink : 'https://google.com'
  //     }
  //     ]
  //   },
  //   {
  //     projectName : 'The CatSite',
  //     projectDescription : 'Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 ',
  //     projectToolsList : ['JS', 'HTML+CSS', 'Bootstrap', 'API'],
  //     projectLinkList : [ {
  //       websiteLnk : 'https://google.com',
  //       codeLink : 'https://google.com'
  //     }
  //     ]
  //   }
  // ]
  return (
    <div>
    <h2 id='projectName' className='projectTitle'>{props.p.projectName}</h2>
    <img src={im} className="appImage" alt="logo" /> 
    
    <div className='text'>
      <p id='projectDescription'>{props.p.projectDescription} </p>
      <Box  sx={{display: 'flex', flexWrap: 'wrap', padding: '0', marginLeft: '0', textAlign:'left'}}>
        <Button variant='text' className='toolsName'>{props.p.projectToolsList[0]}</Button>  
        <Button variant='text' className='toolsName'>{props.p.projectToolsList[1]}</Button> 
        <Button variant='text' className='toolsName'>{props.p.projectToolsList[2]}</Button>  
        <Button variant='text' className='toolsName'>{props.p.projectToolsList[3]}</Button>
      </Box>
      
      {/* <ul>
       <li id='tool1' className='t'>HTML+CSS</li>
        <li id='tool2' className='t'>JS</li>
        <li id='tool3' className='t'>React</li>

      </ul>
      <ul>
        <li className='t'>MUI</li>
      </ul> */}
    </div>
    
    <Button id='websiteLink' onClick={openSite} variant='outlined' size='large'>
        VISIT
    </Button>
    <Button id='codeLink' onClick={openGithub} variant='outlined' size='large'>
        CODE
    </Button>
    </div>
  );
}

export default ProjectDescr;