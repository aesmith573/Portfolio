import { useState } from 'react';

function Project(props) {
  const [isHovered, setIsHovered] = useState(false); 

  return(
    <div className="card m-4 p-1" style={{ width: "22rem" }} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={isHovered && props.cardGif ? props.cardGif : props.cardImage} 
        className="card-img-top" 
        alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardDescription}</p>
        <a 
          href={props.cardLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary">Check it out!</a>
      </div>
    </div>
  );
}

export default Project;