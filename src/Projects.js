import './Projects.css';

function Projects() {
  const aaa = () => {
    console.log('aaaaaaaaaaa');
  }
  return (
    <div className="projectsList">
      <h2 className='projectsText'>My projects</h2>
      <a  className='projectName'>
        Fridge Notes App
      </a>
      <a className='projectName'>
      Quiz
      </a>
      <a onClick={aaa} className='projectName'>
        The Cat App
      </a>
      {/* <ul>
        <li className='projectsName'>
          Fridge Notes App
        </li>
        <li className='projectsName'>Quiz</li>
        <li className='projectsName'>The Cat App</li>
      </ul> */}
    </div>
  );
}

export default Projects;