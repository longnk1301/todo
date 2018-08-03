import React from 'react';
import './search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        }, () => {
            this.props.onSearch(this.state.keyword, 'SHOW_SEARCH');
        });
    }

    render() {
        var { keyword } = this.state;

        return (
            <div className="todo__search">
                <input
                    type="text"
                    name="keyword"
                    className="todo__search-input"
                    value={ keyword }
                    onChange={ this.onChange }
                />
            </div>
        );
    } 
}

export default Search;
