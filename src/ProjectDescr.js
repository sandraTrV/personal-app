import './ProjectDescr.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import quizImg from './quiz.PNG';
import quizImg2 from './quiz2.PNG';
import fridgeNotesImg from './fridge-notes.PNG';
import fridgeNotesImg2 from './fridge-notes2.PNG';
import catApp from './catApp.PNG';
import catApp2 from './catApp2.PNG';

function ProjectDescr(props) {
  const openSite = () => {
    // console.log(props.p.projectLinkList.websiteLnk);
    window.open(props.p.projectLinkList.websiteLnk, '_blank');
  }
  const openGithub = () => {
    window.open(props.p.projectLinkList.codeLink, '_blank');
  }

  const images = [
    [fridgeNotesImg, fridgeNotesImg2], [quizImg, quizImg2], [catApp, catApp2]
  ];
  
  return ( 
    <div>
      <h2 id='projectName' className='projectTitle'>{props.p.projectName}</h2>
      <Box >
        <img src={images[props.p.projectNo][1]} id='appImage' className="appImage zoom-on-hover" alt="logo" /> 
        <img src={images[props.p.projectNo][0]} id='appImage' className="appImage zoom-on-hover" alt="logo" />
      </Box>

      <div className='text'>
        <p className='ddd' id='projectDescription'>{props.p.projectDescription} </p>
        <Box  sx={{display: 'flex', flexWrap: 'wrap', padding: '0', marginLeft: '0', textAlign:'left'}}>
          <Button  variant='text' className='toolsName'>{props.p.projectToolsList[0]}</Button>  
          <Button variant='text' className='toolsName'>{props.p.projectToolsList[1]}</Button> 
          <Button variant='text' className='toolsName'>{props.p.projectToolsList[2]}</Button>  
          <Button variant='text' className='toolsName'>{props.p.projectToolsList[3]}</Button>
        </Box>
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