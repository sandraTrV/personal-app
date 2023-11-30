import './PageTop.css';
import moon from './moon.png';
import sun from './sun.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
function PageTop() {
  return (
    <div className="top">
          <div id="stars"></div>
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
            <AccountCircleIcon style={{color:'#fff373',  marginRight:'1em', fontSize: 80}}></AccountCircleIcon>
          </Box>
        </Grid>
        <Grid item xs={8} md={8}>
          <div className='icons'>
            
            <LinkedInIcon  fontSize='large' style={{color:'#ffffff'}}></LinkedInIcon>
            <MailOutlineIcon fontSize='large' style={{color:'#ffffff',  marginRight:'0.7em'}}></MailOutlineIcon>
          </div>
       </Grid>
      </Grid>

      {/* <Box sx={{textAlign: 'left', margin: '0 1em 0'}}>
      <AccountCircleIcon fontSize='large' style={{color:'#ffffff',  marginRight:'1em'}}></AccountCircleIcon>
        
      </Box> */}

     
      <Grid className='topParts' container spacing={2} >
        <Grid item xs={12} md={6}>
          <Box sx={{alignItems:'right'}}>
              <img src={moon} className="App-logo" alt="logo" />
               
          </Box>
        </Grid>

        <Grid className='myDescr' item xs={12} md={6}>
          <Box>
            <h1>About me</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
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