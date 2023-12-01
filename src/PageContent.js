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

function PageContent() {
  const [projectIsShown, setProjectIsShown] = useState(true);
  return (
    <div className="pg">
      
      <div className='description'>
        <Grid container spacing={5} >
      
          <Grid className='aboutTxt' item xs={12} sm={12} md={7} lg={8}> 
            {projectIsShown && (
              <div>
                <ProjectDescr/>
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
          <Projects/>
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