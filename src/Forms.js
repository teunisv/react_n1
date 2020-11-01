import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Forms.css';

export default class Forms extends Component {
    ulabels = []

    constructor(props) {
        super(props)

        this.ulabels = [
            {id:uuidv4(), text:"a", value:"", sort:Math.random()},
            {id:uuidv4(), text:"b", value:"", sort:Math.random()},
            {id:uuidv4(), text:"c", value:"", sort:Math.random()},
            {id:uuidv4(), text:"d", value:"", sort:Math.random()},
            {id:uuidv4(), text:"e", value:"", sort:Math.random()}];
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
        let hardmode = this.props.level
        let hardtext = "L" + hardmode
        let key = 0;
        return (
            <div className="SplitPane" aria-labelledby={hardtext}>
            <div className="SplitPane-50"  aria-labelledby={hardtext+"input"}>
                <h4>{hardtext}input</h4>
                <form>
                <div className="SplitPane-left">
                    {this.state.data.map((p,index) => (                        
                        (hardmode === 0 && <React.Fragment key={key++}><label htmlFor={p.id+hardmode}>{p.text}<br/></label></React.Fragment>) ||
                        (hardmode === 1 && <React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>) ||
                        (hardmode === 2 && (p.sort>=0.5
                            ? <React.Fragment key={key++}><input type="text" id={p.id+hardmode} onChange={this.handleInputChange.bind(this, index)} value={p.value}/><br/></React.Fragment> 
                            : <React.Fragment key={key++}><label htmlFor={p.id+hardmode}>{p.text}<br/></label></React.Fragment>)) ||
                        (hardmode === 3 && (p.sort>=0.5
                            ? <React.Fragment key={key++}><input type="text" onChange={this.handleInputChange.bind(this, index)} value={p.value}/><br/></React.Fragment> 
                            : <React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>))
                    ))}
                </div> 
                <div className="SplitPane-right">
                    {this.state.data.map((p,index) => (
                        (hardmode === 0 && <React.Fragment key={key++}><input type="text" id={p.id+hardmode} onChange={this.handleInputChange.bind(this, index)} value={p.value}/><br/></React.Fragment>) ||
                        (hardmode === 1 && <React.Fragment key={key++}><input type="text" onChange={this.handleInputChange.bind(this, index)} value={p.value}/><br/></React.Fragment>) ||
                        (hardmode === 2 && (p.sort>=0.5
                            ? <React.Fragment key={key++}><label htmlFor={p.id+hardmode}>{p.text}<br/></label></React.Fragment>
                            : <React.Fragment key={key++}><input type="text" id={p.id+hardmode} onChange={this.handleInputChange.bind(this, index)} value={p.value}/><br/></React.Fragment>)) ||
                        (hardmode === 3 && (p.sort>=0.5
                            ? <React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>
                            : <React.Fragment key={key++}><input type="text" onChange={this.handleInputChange.bind(this, index)} value={p.value}/><br/></React.Fragment>))
                                               
                    ))}
                </div>
                </form>
            </div>
            <div className="SplitPane-50"   aria-labelledby={hardtext+"output"}>    
                    <h4>{hardtext}output</h4>
                <div className="SplitPane-left">
                    {this.state.data.map((p,index) => ( 
                            (hardmode === 0 && <React.Fragment key={key++}><label htmlFor={p.id+hardmode+"o"}>{p.text}<br/></label></React.Fragment>) ||
                            (hardmode === 1 && <React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>) ||
                            (hardmode === 2 && (p.sort>=0.5
                                ? <React.Fragment key={key++}><input type="text" id={p.id+hardmode+"o"} value={p.text+p.value} disabled="disabled"/><br/></React.Fragment> 
                                : <React.Fragment key={key++}><label htmlFor={p.id+hardmode+"o"}>{p.text}<br/></label></React.Fragment>)) ||
                            (hardmode === 3 && (p.sort>=0.5
                                ? <React.Fragment key={key++}><input type="text" value={p.text+p.value} disabled="disabled"/><br/></React.Fragment> 
                                : <React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>))          
                    ))}                    
                </div> 
                <div className="SplitPane-right">
                    {this.state.data.map((p,index) => (
                            (hardmode === 0 && <React.Fragment key={key++}><input type="text" id={p.id+"v"} value={p.text+p.value} disabled="disabled"/><br/></React.Fragment>) ||
                            (hardmode === 1 && <React.Fragment key={key++}><input type="text" value={p.text+p.value} disabled="disabled"/><br/></React.Fragment>) ||
                            (hardmode === 2 && (p.sort>=0.5
                                ? <React.Fragment key={key++}><label htmlFor={p.id+hardmode+"o"}>{p.text}<br/></label></React.Fragment>
                                : <React.Fragment key={key++}><input type="text" id={p.id+hardmode+"o"} value={p.text+p.value} disabled="disabled"/><br/></React.Fragment>)) ||                            
                            (hardmode === 3 && (p.sort>=0.5
                                ? <React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>
                                : <React.Fragment key={key++}><input type="text" value={p.text+p.value} disabled="disabled"/><br/></React.Fragment>))  
                    ))}                    
                </div>
            </div>
            </div>
        )
    }
}
