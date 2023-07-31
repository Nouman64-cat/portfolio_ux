import "./project-card-container.css";
const ProjectCardContainer = () => {
  return (
    <div className="project-cards1">
      <div className="project-cards-child1" />
      <div className="project-cards-child2" />
      <div className="project-cards-child3" />
      <div className="nettycom">Nettycom</div>
      <div className="todo-list-app">Todo List App</div>
      <div className="uiux">Ui/Ux</div>
      <div className="front-end-development3">
        Front End Development of this project has completed using basics and
        advance concepts of React js.
      </div>
      <div className="front-end-development4">
        Front End Development of this project has completed using basics and
        advance concepts of React js.
      </div>
      <div className="front-end-development5">
        Front End Development of this project has completed using basics and
        advance concepts of React js.
      </div>
      <button className="visit-github-parent">
        <div className="visit-github">Visit Github</div>
        <img className="github-1-icon" alt="" src="/github-1@2x.png" />
      </button>
      <button className="visit-github-group">
        <div className="visit-github">Visit Github</div>
        <img className="github-1-icon" alt="" src="/github-1@2x.png" />
      </button>
      <button className="frame-parent">
        <button className="visit-figma-wrapper">
          <div className="visit-github">Visit Figma</div>
        </button>
        <img className="figma-icon" alt="" src="/figma@2x.png" />
      </button>
    </div>
  );
};

export default ProjectCardContainer;
