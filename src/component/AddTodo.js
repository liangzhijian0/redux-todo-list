import React, { Component } from 'react';
import { Button,Input,Icon} from 'antd';


export default class InputList extends React.Component {
    constructor() {
        super();
        
        this.textValue = React.createRef();
    }

    addItem = () => {
        const inputValue = this.textValue.current.value
        if(inputValue === ""){
            alert("Can not empty!")
            return;
        }
        this.props.addHandler(inputValue)
        this.textValue.current.value = ""
    }

    render() {       
        return (
            <div>
                <input className="input-text" type="text" name="ListItem" ref={this.textValue} />&nbsp;
                {/* <Input placeholder="large size" style={{ size:12 }}/> */}
                {/* <div id="button" onClick={this.addItem}>Add</div> */}
                <Button type="primary" size="middle">Primary</Button>
                {/* <Icon type="plus-circle-o" style={{ fontSize: 16, color: '#08c' }}/> */}
            </div>
        );
    }
}