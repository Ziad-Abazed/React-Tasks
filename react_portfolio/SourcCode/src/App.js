import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Contant from './components/contant';
import Contact from './components/contact';
import Project from './components/Project';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>

          <Route index element={ <Contant
      
            cardInfo={{
              card1: 'Build easy-to-edit structured structures with HTML-5',
              card2: 'Create beautiful responsive UI designs using css-3',
              card3: 'Ability to handle all github commands',
              card4: 'create wireframes and mockups for the webpages',
              card5: 'I create creative designs byusing the newest technology',
              card6: 'I have the ability to deal with all kinds of personalities',
              card7: 'Working in a team spirit, discussing problems and working to solve them',
              card8: 'I have the ability to work under pressure for the success of the project',
              card9: 'searching for new information is art and I love art',
              card10: 'The ability to solve problems by studying them and developing steps to solve them',
              card11:'Establish a schedule for the work to be completed',
              card12:'Professional working proficiency'
            
            }} />}/>

          <Route path="Project" element={<Project />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>


     

    
      <Footer/>
    </div>
  );
}

export default App;
