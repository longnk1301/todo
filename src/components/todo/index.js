import React from 'react';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';

import { fetchTodoList, createTodo, updateTodo, deleteTodo } from 'src/api';
import Spinner from 'src/components/Spinner';

import List from './list';
import Filter from './filter';
import Create from './create';
import Search from './search';
import './todos.scss';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                // {id: 1, name: 'Test todo 1', completed: false. isInput: false},
                // {id: 2, name: 'Test todo 2', completed: false},
                // {id: 3, name: 'Test todo 3', completed: true},
                // {id: 4, name: 'Test todo 4', completed: false},
                // {id: 5, name: 'Test todo 5', completed: false},
                // {id: 6, name: 'Test todo 6', completed: true},
                // {id: 7, name: 'Test todo 7', completed: false}
            ],
            filter: 'SHOW_ALL',
            keyword: '',
            isLoading: true
        }

        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        this.handleEditTodo = this.handleEditTodo.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentWillMount() {
        // if(localStorage && localStorage.getItem('todos')) {
        //     var todos = JSON.parse(localStorage.getItem('todos'));
        //     this.setState({
        //         todos: todos
        //     });
        // }
        // 
        fetchTodoList((response) => {
            if (response.status === 200) {
                this.setState({
                    todos: response.data,
                    isLoading: false
                });      
            }
                

            
        });
    }

    onChangeFilter(filter) {
        this.setState({filter});
    }

    handleAddTodo(text) {
        const todos = this.state.todos;
        let ids = _map(todos, 'id');
        let max = Math.max(...ids);
        // todos.push({
        //     id: max+1,
        //     name: text,
        //     completed: false
        // });
        createTodo({ name: text, completed: false }, (response) => {
            todos.push(response.data);
            this.setState({
                todos
            });
        });

        this.setState({
            todos: todos
        });

        localStorage.setItem('todos', JSON.stringify(todos));
    }

    handleRemoveTodo(id) {
        const todos = this.state.todos;
        // let filter = todos.filter(t => t.id !== id);
        // this.setState({todos: filter});
        deleteTodo(id, (response) => {
            let filter = todos.filter(t => t.id !== id);
            this.setState({todos: filter});
        })
    }

    handleEditTodo(id) {
        // const { todos } = this.state;
        // let filter = todos.filter(t => t.id === id);
        // console.log(filter);
        alert('Không được chỉnh sửa nhá!! =))');
    }

    toggleTodo(id) {
        const todos = this.state.todos;
        let index = _findIndex(todos, {id});
        if (index !== -1) {
            let todo = todos[index];
            // todo.completed = !todo.completed;
            // todos[index] = todo;
            // this.setState({todos});
            updateTodo({id, completed: !todo.completed}, (response) => {
                todos[index] = response.data;
                this.setState({todos});
            });
        }
    }

    filterTodo() {
        const {todos, filter, keyword} = this.state;

        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed);
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed);
            case 'SHOW_SEARCH':
                return todos.filter((todo) => {
                    return todo.name.toLowerCase().indexOf(keyword) !== -1;
                });
        }
    }

    onSearch(keyword, typeSearch) {
        this.setState({
            filter: typeSearch,
            keyword: keyword
        })
    }

    countUncompletedTodo() {
        let todos = this.state.todos;
        return todos.filter(t => !t.completed).length;
    }

    render() {
        const style = this.state.isLoading ? 'block' : 'none';

        return (
            <div className="todos">
                <div className="todos--header">
                    You've got {this.countUncompletedTodo()} things to do                    
                </div>
                <Filter onClick={this.onChangeFilter} />
                <Search onSearch={ this.onSearch }/>
                <List todos={this.filterTodo()} onTodoClick={this.toggleTodo} onRemoveTodo={this.handleRemoveTodo} onEditTodo={this.handleEditTodo} />
                <Spinner show={style} />
                <Create onSaveTodo={this.handleAddTodo} />
            </div>
        )
    }
}

export default Index;
