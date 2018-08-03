import React from 'react';
import './spinner.scss';

import { Instagram } from 'react-content-loader';

const MyBulletListLoader = () => <Instagram />


export default class Spinner extends React.Component {
    render () {
        return (
            <div style={{display: this.props.show}}>
                <Instagram />
            </div>
        );
    }
}
