import './PageTop.css';
import moon from './moon.png';
import sun from './sun.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import appLogo from './appLogo.png';

// import MailOutlineIcon from '@mui/icons-material/MailOutline';
function PageTop() {
  const openEmail = () => {
    window.location.href = 'mailto:sandra.tr265@gmail.com';
  }
  
  return (
    <div className="top">
      <div id="stars"></div>
      <Grid container spacing={2} >
        <Grid item xs={4} md={4}>
          <Box sx={{textAlign: 'left'}}>
          <img src={appLogo} className="logo" alt="logo" />
          </Box>
        </Grid>
        <Grid item xs={8} md={8}>
          <div className='icons'>
            <LinkedInIcon style={{color:'#ffffff', fontSize: 50}}></LinkedInIcon>
            <MailOutlineIcon onClick={openEmail} style={{color:'#ffffff',  marginRight:'0.7em', fontSize: 50}}></MailOutlineIcon>
          </div>
       </Grid>
      </Grid>

      <Grid className='topParts' container spacing={2} >
        <Grid item xs={12} md={6}>
          <Box className='techn' sx={{alignItems:'right'}}>
              <img src={moon} className="App-logo" alt="logo" />
              <Box className='smallScr'>
               <h3 className='t2'>React.js</h3>
               <h3 className='t3'>HTML</h3>
               <h3 className='t8'>CSS</h3>
               <h3 className='t6'>Bootstrap</h3>
               <h3 className='t1'>jQuery</h3>
               <h3 className='t5'>Git</h3>
               <h3 className='t7'>JS</h3>
               <h3 className='t4'>Material UI</h3>
               </Box>
          </Box>
        </Grid>

        <Grid className='myDescr' item xs={12} md={6}>
          <Box>
            <h1>Welcome to this space of mine!</h1>
            <p>My name is ______ and I'm a passionate Junior Front-End Web Developer with a knack for creating user-friendly, accessible websites. I have a solid understanding of HTML, CSS, and JavaScript, and I'm continually learning and adapting to new technologies and frameworks.</p>
            <p> I have experience working with React.js and Bootstrap, and I'm comfortable using version control systems like Git. I'm always eager to take on new challenges and learn from others.</p>

            </Box>  
        </Grid>
      </Grid>
    </div>
  );
}

export default PageTop;