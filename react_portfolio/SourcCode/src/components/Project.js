import React, { Component } from 'react';
import i1 from "./images/vegetables.png";
import i2 from './images/iphone.png';
import i3 from './images/calculator.png';
import i4 from "./images/orange.png";
import i5 from "./images/gs-60.png";
import i6 from "./images/bootstrap-screen.png";
import i7 from "./images/mockup.png";
import i8 from "./images/github.png";


class project extends Component {
    constructor(props) {
        super(props);

    }

   
    

    render() {
        return (
            <div>

 
            <div class="container justify-content-center mt-5">
            <h2>projects made by me:</h2>
            <div class="row mb-5 justify-content-center">
              <div class="card col-lg-4 col-sm-8 m-3">
                <img class="card-img-top mt-1" src={i1} alt="Card image"/>
                <div class="card-body">
                  <h4 class="card-title">vegetable store</h4>
                  <p class="card-text">it is a fully responsive website looks good on pc and mobile screens</p>
                  <a href="projects-demo/vegetable-websiteScreen/vegetable.html" target="_blank" class="btn btn-dark">See
                    demo</a>
                </div>
              </div>
              <div class="card col-lg-4 col-sm-8 m-3">
                <img class="card-img-top mt-1" src={i2} alt="Card image"/>
                <div class="card-body">
                  <h4 class="card-title">iphone store</h4>
                  <p class="card-text">this website designed by using bootstrap framework version five</p>
                  <a href="projects-demo/Iphone/Iphone/Iphone-Bootstrap.html" target="_blank" class="btn btn-dark">See demo</a>
                </div>
              </div>
        
            </div>
            <div class="row mb-5 justify-content-center">
              <div class="card col-lg-4 col-sm-8 m-3">
                <img class="card-img-top mt-1" src={i3} alt="Card image"/>
                <div class="card-body">
                  <h4 class="card-title">calculator</h4>
                  <p class="card-text">this calculator designed by using grid layout</p>
                  <a href="projects-demo/calculator-Using-Grid.html" target="_blank" class="btn btn-dark">See demo</a>
                </div>
              </div>
              <div class="card col-lg-4 col-sm-8 m-3">
                <img class="card-img-top mt-1" src={i4} alt="Card image"/>
                <div class="card-body">
                  <h4 class="card-title">orange frontend screen</h4>
                  <p class="card-text">this is screen designed by using grid and flex</p>
                  <a href="projects-demo/orange-grid/orange-grid.html" target="_blank" class="btn btn-dark">See demo</a>
                </div>
              </div>
        
            </div>
            <div class="row mb-5 justify-content-center">
              <div class="card col-lg-4 col-sm-8 m-3">
                <img class="card-img-top mt-1" src={i5} alt="Card image"/>
                <div class="card-body">
                  <h4 class="card-title">GS-60</h4>
                  <p class="card-text">this is a demo using grid to make amazing shape</p>
                  <a href="projects-demo/60GS-gridtask/60GS-grids.html" target="_blank" class="btn btn-dark">See demo</a>
                </div>
              </div>
              <div class="card col-lg-4 col-sm-8 m-3">
                <img class="card-img-top mt-1" src={i6} alt="Card image"/>
                <div class="card-body">
                  <h4 class="card-title">bootstrap demo</h4>
                  <p class="card-text">this is a wep page designed by using bootstrap framework version five</p>
                  <a href="projects-demo/bootstrap-desgin.html" target="_blank" class="btn btn-dark">See demo</a>
                </div>
              </div>
        
            </div>
        
            <div class="row mb-5 justify-content-center">
              <div class="card col-lg-4 col-sm-8 m-3">
                <img class="card-img-top mt-1" src={i7} alt="Card image"/>
                <div class="card-body">
                  <h4 class="card-title">wireframe-mockup</h4>
                  <p class="card-text">see my wireframe and mockup for video game store</p>
                  <a href="https://github.com/Ziad-Abazed/project-one/tree/main/Documentation" target="_blank"
                    class="btn btn-dark">See demo</a>
                </div>
              </div>
              <div class="card col-lg-4 col-sm-8 m-3">
                <img class="card-img-top mt-1" src={i8} alt="Card image"/>
                <div class="card-body">
                  <h4 class="card-title">github </h4>
                  <p class="card-text">to explore my work more go to my github by click explore more below</p>
                  <a href="https://github.com/Ziad-Abazed/HTML-and-CSS-tasks" target="_blank" class="btn btn-dark">explore
                    more</a>
                </div>
              </div>
        
            </div>
        
        </div>
            </div>
        );
    }
}

project.propTypes = {

};

export default project;

    
