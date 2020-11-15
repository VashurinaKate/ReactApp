import React, { Component } from 'react';
import './post-status-filter.css';
// import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'}, // применим фильтры all и like
            {name: 'like', label: 'Понравилось'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button 
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}>
                    {label}</button>
            )
        });
        return (
            <div className="btn-group">
                {/* <Button outline color="info">Все</Button> */}
                {buttons}
            </div>
        )
    }
}