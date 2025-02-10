import Project from './components/Project.jsx';
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import transmngment from './assets/projects/transmngment.png';
import PutMeOn from './assets/projects/PutMeOn.png';

function App() {

  return (
    <>
      <Navbar />
      <AboutMe />
      <div className='container'>
        <div className='row justify-content-evenly'>
          <div className='col-md-6 col-lg-4'>
          {/* Financial App */}
            <Project
              cardImage={transmngment}
              cardTitle={"Financial Web Application"}
              cardDescription= {
                "Transaction management tool made with C#, .NET, SQL, JavaScript, " +
                "HTML/CSS. It has features like user login/registration as well as " +
                "full CRUD functionality. Fully hosted and deployed on Azure!"
              }
              cardLink="https://financialapp-demo.azurewebsites.net/"
            />
          </div>
          {/* PutMeOn */}
          <div className='col-md-6 col-lg-4'>
            <Project
              cardImage={PutMeOn}
              cardTitle={"PutMeOn"}
              cardDescription= {
                "Worked with a team of developers for my senior capstone project." +
                " I worked on UI/UX as well as media design for the project."
              }
              cardLink="https://github.com/corbin-poteet/PutMeOn"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
