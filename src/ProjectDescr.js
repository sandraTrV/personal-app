import './ProjectDescr.css';
import im from './front.jpg';
import sun from './sun.png';
import moon from './moon.png';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import {useState, useEffect} from 'react';
// import MuiImageSlider from 'mui-image-slider';
import Grow from '@mui/material/Grow';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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

  const images = [
    [im, sun, moon], [sun, moon, im], [moon, im, sun]
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const moveToNextImg = () => {
    console.log('next, current is ' + currentImage);
    
    if (currentImage < 2) {
      console.log('next, current is ' + currentImage);
      setCurrentImage(currentImage+1);
      document.getElementById('appImage').src = images[props.p.projectNo][currentImage+1];
    }
  }

  const moveToPrevImg = () => {
    console.log('prev, current is ' + currentImage);
    if (currentImage >= 1) {
      console.log('prev, current is ' + currentImage);
      setCurrentImage(currentImage-1);
      document.getElementById('appImage').src = images[props.p.projectNo][currentImage-1];
    }
  }
  return ( 
    
    <div>
    <h2 id='projectName' className='projectTitle'>{props.p.projectName}</h2>
    {/* <Box className='ce'> */}
      {/* <KeyboardArrowLeftIcon onClick={moveToPrevImg} id='prev' className='prev' style={{color:'#ffffff'}}></KeyboardArrowLeftIcon> */}

         <img src={images[props.p.projectNo][0]} id='appImage' className="appImage" alt="logo" /> 
      
      {/* <KeyboardArrowRightIcon onClick={moveToNextImg} id='next' className='next' style={{color:'#ffffff'}}></KeyboardArrowRightIcon> */}
    {/* </Box> */}
    <div className='text'>
 
          <p className='ddd' id='projectDescription'>{props.p.projectDescription} </p>
        
       
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