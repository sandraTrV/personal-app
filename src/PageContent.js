import './PageContent.css';
import Projects from './Projects';
import ProjectsGeneralInfo from './ProjectsGeneralInfo';
import ProjectDescr from './ProjectDescr';

import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import sun from './front.jpg';
import {useState} from 'react';
import { dialogActionsClasses } from '@mui/material';
// import {useEffect} from 'react';
function PageContent() {
  const [projectIsShown, setProjectIsShown] = useState(true);
  const [project, setProject] = useState(0);
  const appsList = [
    {
      projectName : 'Fridge Notes App',
      projectDescription : 'Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 ',
      projectToolsList : ['JS', 'HTML+CSS', 'React.js', 'MUI'],
      projectLinkList : {
        websiteLnk : 'https://www.pngwing.com/en/free-png-bcahmm',
        codeLink : 'https://www.pinterest.com/pin/792492865674632402/'
      }
      
    },
    {
      projectName : 'Quiz App',
      projectDescription : 'Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 ',
      projectToolsList : ['JS', 'HTML+CSS', 'Bootstrap', 'jQuery'],
      projectLinkList :  {
        websiteLnk : 'https://google.com',
        codeLink : 'https://google.com'
      }
      
    },
    {
      projectName : 'The CatSite',
      projectDescription : 'Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 ',
      projectToolsList : ['JS', 'HTML+CSS', 'Bootstrap', 'API'],
      projectLinkList :  {
        websiteLnk : 'https://www.pinterest.com/pin/358528820352973949/',
        codeLink : 'https://www.pinterest.com/pin/391250286391807255/'
      }
      
    }
  ]
    // ***************************
    // useEffect(() => {
    //   // setCurrentProject(Number(props.p));
    //   // document.getElementById('projectDescription').innerHTML = appsList[currentProject].projectDescription;
    //   const projectDesplayed = JSON.parse(localStorage.getItem('projectDisplayed'));
    //   if (projectDesplayed) {
    //     // console.log('user notes found');
    //     setProject(Number(projectDesplayed));
    //     console.log(project);
    //     // document.getElementById('projectDescription').innerHTML = appsList[currentProject].projectDescription;
    //   } 
      
    // }, []);

  // here use state
  

  const changeCurrentProjectHere = (projectNr) => {
    setProject(projectNr);
  }
  // const dosth =() => {
  //   const projectDesplayed = JSON.parse(localStorage.getItem('projectDisplayed'));
  //     if (projectDesplayed) {
  //       // console.log('user notes found');
  //       // setProject(Number(projectDesplayed));
  //       console.log(projectDesplayed + 'acum' + appsList[projectDesplayed].projectDescription);
  //       // document.getElementById('projectDescription').innerHTML = appsList[currentProject].projectDescription;
  //     } 
  // }
  return (
    <div className="pg">
      <div className='description'>
        <Grid container spacing={5} >
      
          <Grid className='aboutTxt' item xs={12} sm={12} md={7} lg={8}> 
            {projectIsShown && (
              <div>
                <ProjectDescr p={appsList[project]}/>
              </div>
            ) || (  !projectIsShown  && (
              <div>
                <ProjectsGeneralInfo/>
              </div>
            )
            )
          }
          </Grid>
          <Grid  item xs={12} sm={12} md={5} lg={4}>
          <Projects setCurrentPr={changeCurrentProjectHere}/>
          </Grid>
        </Grid>
       
    </div>
    </div>
  );
}

export default PageContent;