/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import facebook from './images/icons8-facebook-48.png';
import linkedin from './images/icons8-linkedin-48.png';
class footer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

<footer>
        <p>your contact make me happy </p>
        <a href="https://web.facebook.com/ziad.abazid.3/">
            <img src={facebook}/></a>
        <a href="https://www.linkedin.com/in/ziad-abazeed/">
           
            <img src={linkedin}/></a>
    </footer>
            </div>
        );
    }
}

footer.propTypes = {

};

export default footer;