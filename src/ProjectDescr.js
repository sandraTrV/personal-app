import './ProjectDescr.css';
import im from './front.jpg';
import Button from '@mui/material/Button';

function ProjectDescr() {
  const openSite = () => {
    window.open('https://google.com', '_blank');
  }
  const openGithub = () => {
    window.open('https://github.com/', '_blank');
  }
  return (
    <div>
    <h2 className='projectTitle'>Project 1</h2>
    <img src={im} className="appImage" alt="logo" /> 
    
    <div className='text'>
      <p>Here you can see some information about my projects and where to visit them.  </p>
      <ul>
       <li className='t'>HTML+CSS</li>
        <li className='t'>JS</li>
        <li className='t'>React</li>
      </ul>
      <ul>
        <li className='t'>MUI</li>
      </ul>
    </div>
    
    <Button onClick={openSite} variant='outlined' size='large'>
        VISIT
    </Button>
    <Button  onClick={openGithub} variant='outlined' size='large'>
        CODE
    </Button>
    </div>
  );
}

export default ProjectDescr;