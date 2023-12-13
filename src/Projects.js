import './Projects.css';

function Projects(props) {
  const changeCurrentProject = (e) => {
    console.log( e.target.id +  ' -------------+++++++++++++');
    props.setCurrentPr(e.target.id);
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

    </div>
  );
}

export default Projects;