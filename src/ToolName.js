import './Projects.css';
import Button from '@mui/material/Button';
function ToolName(props) {
  return (
    <Button  variant='text' className='toolsName'>{props.name}</Button> 
  );
}

export default ToolName;