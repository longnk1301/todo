import React from 'react';
import PropTypes from 'prop-types';

import 'components/extends/control.scss';
import './checkbox.scss';

const Checkbox = ({label, checked, onClick}) => (
    <label className="control control--checkbox">
        <input type="checkbox" onChange={onClick} checked={checked ? "checked" : ""}/>
        {
            // isInput 
            // ? <input/>
            <span>{label}</span>
        }
        <div className="control__indicator" />
    </label>
);

// class Checkbox extends React.Component {
//     constructor(props) {
//         super(props); 
//         this.state = {
//             check: ''
//         };
//       // this.onClick = this.onClick.bind(this);
//     }

//     onClick(event) {
//         console.log(event);
//         // this.setState({
//         //     check:; 
//         // });
//     }

//     render() {
//         var {label, checked} = this.props;
//         console.log(checked);
//         return (
//             <label className="control control--checkbox">
//                 <input type="checkbox" onChange={this.onClick} checked={checked ? "checked" : ""}/>
//                     <span>{label}</span>
//                 <div className="control__indicator" />
//             </label>
//         )

//     }
// }

// Checkbox.propTypes = {
//     label: PropTypes.string.isRequired,
//     checked: PropTypes.bool.isRequired,
//     onClick: PropTypes.func.isRequired
// }

// Checkbox.defaultProps = {
//     label: 'Checkbox',
//     checked: false
// }

export default Checkbox;
