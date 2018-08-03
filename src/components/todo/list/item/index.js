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

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

TodoItem.defaultProps = {
    name: 'To do',
    completed: true
}

export default TodoItem;
