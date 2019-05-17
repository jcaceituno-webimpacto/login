import React, { Component } from 'react';
import styles from './styles.css';
import { ExtensionPoint, useRuntime } from 'vtex.render-runtime';
import Login from 'vtex.login/Login'


export default class Loginjc extends Component {
    render() {
        return (
            <div className="flex items-center">
                <span className={styles.textoLogin}>Sign In</span><Login />
            </div>
        )
    }
}