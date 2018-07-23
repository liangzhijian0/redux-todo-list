import React, { Component } from 'react';

export default class FilterList extends React.Component {
    render() {
        let status = this.props.filter; 
        
        return (
            <div>
                <ul id="filters">
                    <li>
                        <a href="../" data-filter="all" className={status === undefined ? 'selected' : ''} >ALL</a>
                    </li>
                    <li>
                        <a href="active" data-filter="active" className={status === 'active' ? 'selected' : ''}>Active</a>
                    </li>
                    <li>
                        <a href="completed" data-filter="completed" className={status === 'completed' ? 'selected' : ''}>Complete</a>
                    </li>
                </ul>
            </div>
        );
    }
}