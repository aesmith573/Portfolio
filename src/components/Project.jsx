import { useState } from 'react';

function Project(props) {
  const [isHovered, setIsHovered] = useState(false); 

  return(
    <a
      href={props.cardLink} 
      target="_blank"
      rel="noopener noreferrer"
      className='card-container'
    >
      <div 
        className="card m-4 p-1" style={{ width: "22rem" }} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={isHovered && props.cardGif ? props.cardGif : props.cardImage} 
          className="card-img-top" 
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardDescription}</p>
        </div>
      </div>
    </a>
  );
}

export default Project;