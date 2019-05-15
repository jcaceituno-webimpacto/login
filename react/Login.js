import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
library.add(faUser);


export default class Login extends Component {
    render() {
        return (
            <div>
                <span>Sign In</span><FontAwesomeIcon icon="user"/>
            </div>
        )
    }
}