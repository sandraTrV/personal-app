import './PageContent.css';
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import sun from './front.jpg';

function PageContent() {
  return (
    <div className="pg">
      <div className='description'>
        <Grid container spacing={2} >

          <Grid className='aboutTxt' item xs={12} sm={12} md={8}>
            <h2 className='aa'>Project 1</h2>
            <img src={sun} className="appImage" alt="logo" />
            <div className='text'>
              <p>The components implement keyboard navigation using the "manual activation" behavior. If you want to switch to the "selection automatically follows focus" behavior you have to pass</p>
              <ul>
                <li className='t'>JS</li>
                <li className='t'>React</li>
                <li className='t'>MUI</li>
              </ul>
            </div>
            
            <Button variant='outlined' size='large'>
                VISIT
            </Button>
            <Button variant='outlined' size='large'>
                CODE
            </Button>
          </Grid>
          <Grid className='pr' item xs={12} sm={12} md={4}> 
          <h2 className='aa'>Projects</h2>
          <ul>
            <li className='pp'>
            Fridge Notes App
            </li>
            <li className='pp'>Quiz</li>
            <li className='pp'>The Cat App</li>
          </ul>
          </Grid>
        </Grid>
       
    </div>
      <Box>
      {/* <MailOutlineIcon  style={{color:'#ffffff', fontSize: 100}}></MailOutlineIcon> */}
      </Box>
    </div>
  );
}

export default PageContent;