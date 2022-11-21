/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
 import img1 from './images/me.jpg';
 import img2 from './images/icons8-education-50.png';
 import img3 from './images/icons8-education-50.png';
 import img4 from './images/html-64.png';
 import img5 from './images/css-64.png';
 import img6 from './images/icons8-github-64.png';
 import img7 from './images/icons8-wireframe-64.png';
 import img8 from './images/icons8-creative-64.png';
 import img9 from './images/icons8-connection-64.png';
 import img10 from './images/icons8-teamwork-64.png';
 import img11 from './images/icons8-work-64.png';
 import img12 from './images/icons8-search-64.png';
 import img13 from './images/icons8-problem-solving-64.png';
 import img14 from './images/icons8-clock-64.png';
 import img15 from './images/icons8-great-britain-64.png';
import '../App.css';


class contant extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
        this.state={
            className:'aboutme'
           
        }


        //   this.state={
        //   name1:'I`M ZIAD ABAZEED',
        //   color:'#8A2BE2'


           
        // }
    }

    Change=(e)=>{
        e.preventDefault()
        this.setState({className:'test'})
    }
    
      info =this.props.cardInfo;
    
    render() {
        
        return (
          <div>
            <button onClick={this.Change} >change color</button>
    <div className={this.state.className}> 
   
    {/* <div className='aboutme'> */}
    {/* <!--this dev has my image and intro about me--> */}
    <div className="about-image">
        <img id="profile-img" src={img1}/>
    </div>
    <div className="about-info">
        <div className="content">
            <h1 className="titles">I`M ZIAD ABAZEED</h1>
            <h2>WEB DEVELOPER</h2>
            <p>I'm a web developer & front‑end developer focused on crafting clean & user‑friendly experiences, I am
                passionate about building excellent software that improves the lives of those around me.</p>
            <a href="contact.html" className="button" target="_blank">contact me</a>
        </div>

    </div>
</div>

<hr/>
<div className="qualification">
    <h1>qualification</h1>

    <img src={img2}/>
    <h4>2022-PRESENT</h4>
    <h4>trainee at coding academy by orange as a full stack web developer</h4>

    <img src={img3}/>
    <h2>2022-2018</h2>
    <h4>Bachelor's degree in Software Engineering from Zarqa University</h4>


</div>
<hr/>

<div className="skills">
    {/* <!--this is skill div has two divs the technical skills and Soft skills--> */}
    <h1>Technical skills</h1>
    <div className="technicalskills">
        {/* <!--this div has technical skills--> */}
        <div className="tools">
            {/* <!--tools div is contain the skill--> */}
            <div><img src={img4}/></div>
            <h2>100%</h2>
            <p>{this.info.card1}</p>
            
        </div>

        <div className="tools">
            <div><img src={img5}/></div>
            <h2>100%</h2>
            <p>{this.info.card2}</p>
        </div>
        <div className="tools">
            <div><img src={img6}/></div>
            <h2>70%</h2>
            <p>{this.info.card3}</p>
        </div>
        <div className="tools">
            <div><img src={img7}/></div>
            <h2>100%</h2>
            <p>{this.info.card4}</p>
        </div>


    </div>
    <h1>Soft skills</h1>
    <div className="soft-skills">
        {/* <!--this div has soft skills--> */}

        <div className="tools">
            <div><img src={img8}/></div>
            <h2>creative designs</h2>
                <p>{this.info.card5}</p>
        </div>
        <div className="tools">
            <div><img src={img9}/></div>
            <h2>communication</h2>
            <p>{this.info.card6}</p>
        </div>
        <div className="tools">
            <div><img src={img10}/></div>
            <h2>team work</h2>
            <p>{this.info.card7}</p>
        </div>
        <div className="tools">
            <div><img src={img11}/></div>
            <h2>hard work</h2>
            <p>{this.info.card8}</p>
        </div>
        <div className="tools">
            <div><img src={img12}/></div>
            <h2>search skill</h2>
            <p>{this.info.card9}</p>
        </div>
        <div className="tools">
            <div><img src={img13}/></div>
            <h2>problem solving</h2>
            <p>{this.info.card10}</p>
        </div>

        <div className="tools">
            <div><img src={img14}/></div>
            <h2>time management</h2>
            <p>{this.info.card11}</p>
        </div>
        <div className="tools">
            <div><img src={img15}/></div>
            <h2>English language</h2>
            <p>{this.info.card12}</p>
        </div>



    </div>
</div>
</div>
        );
    }
}

contant.propTypes = {

};

export default contant;
