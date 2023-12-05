import './Projects.css';

function Projects(props) {
  const changeCurrentProject = (e) => {
    console.log( e.target.id +  ' -------------+++++++++++++');
    props.setCurrentPr(e.target.id);
    // 88888*****
    // localStorage.setItem('projectDisplayed', JSON.stringify(e.target.id));
  }
  return (
    <div className="projectsList">
      <h2 className='projectsText'>My projects</h2>
      <a id='0' onClick={changeCurrentProject}  className='projectName'>
        Fridge Notes App
      </a>
      <a id='1' onClick={changeCurrentProject}  className='projectName'>
      Quiz
      </a>
      <a id='2' onClick={changeCurrentProject} className='projectName'>
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