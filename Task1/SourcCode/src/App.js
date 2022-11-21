import log from './student.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (   

<div className="parent">
    <div className="container">
        <h2 className="text-center heading parent__head">Parent</h2>
        <div className="row">
            <div className="col-lg-5 col-md-12  h-100">
                <div className="parent__img"> <img src={log}></img></div>
            </div>
            <div className="col-lg-7 col-md-12">
                <p className="mb-4">
                    This Software also helps Parents too to track their children’s
                    progress in a few clicks. Transparent communication between school
                    and parents about the student is really ecstatic. Below features
                    are for the parents provided by
                    <strong> our School Management Software</strong> .
                </p>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill"></i><span className="pl-2"> School Calendar </span>
                    </div>
                    
                    <div className="col-lg-6 col-md-12 mb-4 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill"></i><span className="pl-2">Latest News & Circular </span>
                    </div>
                   
                    <div className="col-lg-6 col-md-12 mb-4 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill"></i><span className="pl-2">Daily attendance status </span>
                    </div>
                   
                    <div className="col-lg-6 col-md-12 mb-4 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill"></i><span className="pl-2">Queries & Complains </span>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                   
             
            
       
   


  
  );
}

export default App;
