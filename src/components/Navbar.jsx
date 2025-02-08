import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container-fluid"> 
        <div className="d-flex">
          <a 
            className="nav-link px-2" 
            href="https://github.com/aesmith573" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a 
            className="nav-link px-2" 
            href="https://www.linkedin.com/in/andrew-smith-4940001a7/"
            target="_blank"
            rel="noopener noreferrer" //prevents access of window.opener property
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;