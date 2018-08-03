import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/extends/checkbox'
import './item.scss';

const TodoItem = ({onClick, onEdit,onRemove, name, completed}) => (
    <div className="todo__item">
        <Checkbox onClick={onClick} label={name} checked={completed} onClick={onClick}/>
        <div className="button">
            <span className="button-edit" onClick={onEdit}>Edit</span>
            <span className="button-remove"  onClick={onRemove}>Delete</span>
        </div>
        <input type="text" className="button-edit-name"/>
    </div>
)

// TodoItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//     onClick: PropTypes.func.isRequired
// }

// TodoItem.defaultProps = {
//     name: 'To do',
//     completed: true
// }

// class TodoItem extends React.Component{
//     // constructor(props) {
//     //     super(props);   
//     //     this.state = {
            
//     //     };
//     //     this.onEdit = this.onEdit.bind(this);
//     //     this.onClick = this.onClick.bind(this);
//     //     this.onDelete = this.onDelete.bind(this);
//     // }
//     // onEdit() {

//     // }

//     // onClick() {

//     // }

//     // onDelete() {

//     // }

//     render() {
//         var { todo } = this.props;
//         // console.log(todo.name);
//         return (
//             <div className="todo__item">
//             <Checkbox label={todo.name} checked={todo.completed}/>
//             </div>
//         )
//     }
// }


export default TodoItem;
