import React, { Component } from 'react'
import './Forms.css';

export default class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {data: this.props.ulabels}
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
            <div className="SplitPane" aria-label={hardtext}>
            <div className="SplitPane-50"  aria-label={hardtext+"input"}>
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
            <div className="SplitPane-50"   aria-label={hardtext+"output"}>    
                    <h4>{hardtext}output</h4>
                <div className="SplitPane-left">
                    {this.state.data.map((p,index) => ( 
                            (hardmode === 0 && <React.Fragment key={key++}><label htmlFor={p.id+hardmode+"o"}>{p.text}<br/></label></React.Fragment>) ||
                            (hardmode === 1 && <React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>) ||
                            (hardmode === 2 && (p.sort>=0.5
                                ? <React.Fragment key={key++}><input type="text" id={p.id+hardmode+"o"} value={index+p.value} disabled="disabled"/><br/></React.Fragment> 
                                : <React.Fragment key={key++}><label htmlFor={p.id+hardmode+"o"}>{p.text}<br/></label></React.Fragment>)) ||
                            (hardmode === 3 && (p.sort>=0.5
                                ? <React.Fragment key={key++}><input type="text" value={index+p.value} disabled="disabled"/><br/></React.Fragment> 
                                : <React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>))          
                    ))}                    
                </div> 
                <div className="SplitPane-right">
                    {this.state.data.map((p,index) => (
                            (hardmode === 0 && <React.Fragment key={key++}><input type="text" id={p.id+hardmode+"o"} value={index+p.value} disabled="disabled"/><br/></React.Fragment>) ||
                            (hardmode === 1 && <React.Fragment key={key++}><input type="text" value={index+p.value} disabled="disabled"/><br/></React.Fragment>) ||
                            (hardmode === 2 && (p.sort>=0.5
                                ? <React.Fragment key={key++}><label htmlFor={p.id+hardmode+"o"}>{p.text}<br/></label></React.Fragment>
                                : <React.Fragment key={key++}><input type="text" id={p.id+hardmode+"o"} value={index+p.value} disabled="disabled"/><br/></React.Fragment>)) ||                            
                            (hardmode === 3 && (p.sort>=0.5
                                ? <React.Fragment key={key++}><>{p.text}<br/></></React.Fragment>
                                : <React.Fragment key={key++}><input type="text" value={index+p.value} disabled="disabled"/><br/></React.Fragment>))  
                    ))}                    
                </div>
            </div>
            </div>
        )
    }
}
