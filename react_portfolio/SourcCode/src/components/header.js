/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";


class header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

   
    render() {
        return (
            <div>
  <header>
        <div class="icon-bar">
            <Link title="home" to="/"><i class="fa fa-home"></i></Link>
            <Link title="contact me" to="/Contact" ><i class="fa fa-envelope"></i></Link>
            <Link title="my projects" to="/Project"><i class="fa fa-briefcase"></i></Link>
            <a title="my linked in" href="https://www.linkedin.com/in/ziad-abazeed-529532244/" target="_blank"><i
                    class="fa fa-linkedin"></i></a>
        </div>
    </header>
    <Outlet />
            </div>
        );
    }
}

header.propTypes = {

};

export default header;