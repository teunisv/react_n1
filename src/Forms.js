import React from 'react'
import Labels from  './Labels'
import Inputs from './Inputs';
import { v4 as uuidv4 } from 'uuid';
import './Forms.css';

export default function Forms({hardmode}) {
    let ulabels = [
        {id:uuidv4(), text:"a"},
        {id:uuidv4(), text:"b"},
        {id:uuidv4(), text:"c"},
        {id:uuidv4(), text:"d"},
        {id:uuidv4(), text:"e"}];
    let labels = ulabels
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

    return (
        <div>
            <div className="SplitPane-left">
                <Labels labels={labels} hardmode={hardmode} />
            </div> 
            <div className="SplitPane-right">
                <Inputs labels={labels} hardmode={hardmode} /> 
            </div>
        </div>
    )
}
