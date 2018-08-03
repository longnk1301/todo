import React from 'react';
import PropTypes from 'prop-types';
import Todo from './item';
import './list.scss';

const TodoList = ({todos, onTodoClick, onRemoveTodo, onEditTodo}) => (
    <div className="todo__list">
    {todos.map(todo =>
        <Todo 
            key={todo.id} {...todo} 
            onClick={() => onTodoClick(todo.id)} 
            onEdit={() => onEditTodo(todo.id)}
            onRemove={() => onRemoveTodo(todo.id)} />
    )}
    </div>
)

// class TodoList extends React.Component {
//     render() {
//         var { todos } = this.props;
//         // console.log(todos);
//         var element = todos.map((todo, index) => {
//             // console.log(todo);
//             return <Todo 
//                         key={todo.id} {...todo}
//                         todo={todo}
//                     />
//         });
//         return (
//             <div className="todo__list">
//                 { element }
//             </div>
//         )

//     }
// }

// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             completed: PropTypes.bool.isRequired,
//             name: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
//     onTodoClick: PropTypes.func.isRequired
// }


export default TodoList;
