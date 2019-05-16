import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
library.add(faUser);
import styles from './styles.css';


export default class Login extends Component {
    render() {
        return (
            <div>
                <span className={styles.textoLogin}>Sign In</span><FontAwesomeIcon icon="user" className={styles.icono}/>
            </div>
        )
    }
}