import React, { Component, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Forms.css';

export default class Forms extends Component {
    ulabels = []

    constructor(props) {
        super(props)

        this.ulabels = [
            {id:uuidv4(), text:"a", value:""},
            {id:uuidv4(), text:"b", value:""},
            {id:uuidv4(), text:"c", value:""},
            {id:uuidv4(), text:"d", value:""},
            {id:uuidv4(), text:"e", value:""}];
        this.state = {data: this.randomize(this.ulabels)}
    }

    randomize(params) {
        return params
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
    }



    handleInputChange(index, event) {
        var data = this.state.data.slice(); // Make a copy of the values first.
        data[index].value = event.target.value; // Update it with the modified value.
        this.setState({data}); // Update the state.
    }

    render() {
        let hardmode = this.props.hardmode
        let key = 0;
        return (
            <div className="SplitPane">
            <div className="SplitPane-50">
                <form>
                <div className="SplitPane-left">
                    {this.state.data.map((p,index) => (
                        hardmode 
                            ? (<React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>)
                            : (<React.Fragment key={key++}><label htmlFor={p.id}>{p.text}<br/></label></React.Fragment>)                
                    ))}
                </div> 
                <div className="SplitPane-right">
                    {this.state.data.map((p,index) => (
                        hardmode 
                            ? (<React.Fragment key={key++}><input type="text"/><br/></React.Fragment>)
                            : (<React.Fragment key={key++}><input type="text" id={p.id} onChange={this.handleInputChange.bind(this, index)} value={p.value}/><br/></React.Fragment>)                   
                    ))}
                </div>
                </form>
            </div>
            <div className="SplitPane-50">    
                <div className="SplitPane-left">
                    {this.state.data.map((p,index) => (
                        hardmode 
                            ? (<React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>)
                            : (<React.Fragment key={key++}><label htmlFor={p.id+"v"}>{p.text}<br/></label></React.Fragment>)                
                    ))}                    
                </div> 
                <div className="SplitPane-right">
                    {this.state.data.map((p,index) => (
                        hardmode 
                            ? (<React.Fragment key={key++}>{p.text+p.value}<br/></React.Fragment>)
                            : (<React.Fragment key={key++}><input type="text" id={p.id+"v"} value={p.text+p.value} disabled="disabled"/><br/></React.Fragment>)                   
                    ))}                    
                </div>
            </div>
            </div>
        )
    }
}
