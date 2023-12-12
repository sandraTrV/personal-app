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
          {/* <div id="starss"></div> */}
         {/* <div id="stars"></div> */}
        {/* <img src={sun} className="App-logo" alt="logo" /> */}
        {/* <ul style={{display:'flex', listStyle:'none'}}>
          <li sx={{listStyle:'none'}}>aa</li>
          <li sx={{listStyle:'none'}}>aaaa</li>
        </ul> */}
      {/* <Box >
        
        <Grid container spacing={2} >
        
          <Grid item xs={6} md={6}>
          <h2>About</h2>
          </Grid>
          <Grid item xs={6} md={6}>
          
          
          </Grid>

        </Grid>
      </Box> */}

      <Grid container spacing={2} >
      
        <Grid item xs={4} md={4}>
          <Box sx={{textAlign: 'left'}}>
          <img src={appLogo} className="logo" alt="logo" />
            {/* <AccountCircleIcon style={{color:'#fff373',  marginRight:'1em', fontSize: 80}}></AccountCircleIcon> */}
          </Box>
        </Grid>
        <Grid item xs={8} md={8}>
          <div className='icons'>
            
            <LinkedInIcon  fontSize='large' style={{color:'#ffffff'}}></LinkedInIcon>
            <MailOutlineIcon onClick={openEmail} fontSize='large' style={{color:'#ffffff',  marginRight:'0.7em'}}></MailOutlineIcon>
          </div>
       </Grid>
      </Grid>

      {/* <Box sx={{textAlign: 'left', margin: '0 1em 0'}}>
      <AccountCircleIcon fontSize='large' style={{color:'#ffffff',  marginRight:'1em'}}></AccountCircleIcon>
        
      </Box> */}

     
      <Grid className='topParts' container spacing={2} >
        <Grid item xs={12} md={6}>
          <Box className='techn' sx={{alignItems:'right'}}>
              <img src={moon} className="App-logo" alt="logo" />
              <Box className='smallScr'>
               <h3 className='t1'>React.js</h3>
               <h3 className='t2'>HTML</h3>
               <h3 className='t3'>CSS</h3>
               <h3 className='t4'>Bootstrap</h3>
               <h3 className='t5'>jQuery</h3>
               <h3 className='t6'>Git</h3>
               <h3 className='t7'>JS</h3>
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

      {/* <Box sx={{alignItems:'right'}}>
        <img src={moon} className="App-logo" alt="logo" />
      </Box> */}
      {/* <h3>aaaaaaa</h3> */}
      
    </div>
  );
}

export default PageTop;