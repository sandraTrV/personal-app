import './PageContent.css';
import Projects from './Projects';
import ProjectDescr from './ProjectDescr';
import Grid from '@mui/material/Grid';
import {useState} from 'react';

function PageContent() {
  const [project, setProject] = useState(0);
  const appsList = [
    { 
      projectNo: 0,
      projectName : 'Fridge Notes App',
      projectDescription : 'A user-friendly, colorful and nostalgic React App that looks like a vintage fridge. It uses your browser\'s memory to keep your to-do lists, recipes or any small notes that you would put on your fridge. With a few clicks you can create, delete or edit your notes. Moreover, this fridge design looks good on a multitude of devices.',
      projectToolsList : ['React.js',  'HTML', 'CSS', 'MUI'],
      projectLinkList : {
        websiteLnk : 'https://www.pngwing.com/en/free-png-bcahmm',
        codeLink : 'https://www.pinterest.com/pin/792492865674632402/'
      }
      
    },
    { 
      projectNo: 1,
      projectName : 'Quiz App',
      projectDescription : 'This is an easy to use and responsive quiz app that helps you test your knowledge in web development. At the end of each quiz you can see your score and a report of your answers and the right ones in case you got some questions wrong.',
      projectToolsList : [ 'HTML+CSS', 'JS', 'Bootstrap', 'jQuery'],
      projectLinkList :  {
        websiteLnk : 'https://google.com',
        codeLink : 'https://google.com'
      }
      
    },
    {
      projectNo: 2,
      projectName : 'The CatSite',
      projectDescription : 'With the help of an API this online cat guide brings you into the world of cats. Here you can learn a significant amount of facts about over 60 cat breeds using our detailed cat catalogue. If you want more, you can also see a huge amount of random cat photos that will make your day CATtastic! If you have a cat or you are planning to get one, this website is the guide you need!',
      projectToolsList : [ 'HTML+CSS', 'JS', 'Bootstrap', 'API'],
      projectLinkList :  {
        websiteLnk : 'https://www.pinterest.com/pin/358528820352973949/',
        codeLink : 'https://www.pinterest.com/pin/391250286391807255/'
      }
      
    }
  ]

  const changeCurrentProjectHere = (projectNr) => {
    setProject(projectNr);
  }
  
  return (
    <div className="pg">
      <div className='description'>
        <Grid container spacing={5} >
          <Grid className='aboutTxt' item xs={12} sm={12} md={12} lg={8}> 
            <ProjectDescr p={appsList[project]}/>
          </Grid>
          <Grid  item xs={12} sm={12} md={12} lg={4}>
            <Projects setCurrentPr={changeCurrentProjectHere}/>
          </Grid>
        </Grid>  
      </div>
    </div>
  );
}

export default PageContent;