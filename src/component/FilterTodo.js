import React, { Component } from 'react';
import { Button } from 'antd';

export default class FilterList extends React.Component {
    render() {
        let status = this.props.filter; 
        
        return (
            <div>
                <ul id="filters">
                    <Button type={status === undefined ? 'primary' : ''}>
                        <a href="../" data-filter="all" className={status === undefined ? 'selected' : ''} >ALL</a>
                    </Button>
                    <Button type={status === 'active' ? 'primary' : ''}>
                        <a href="active" data-filter="active" className={status === 'active' ? 'selected' : ''}>Active</a>
                    </Button>
                    <Button type={status === 'completed' ? 'primary' : ''}>
                        <a href="completed" data-filter="completed" className={status === 'completed' ? 'selected' : ''}>Complete</a>
                    </Button>
                </ul>
            </div>
        );
    }
}