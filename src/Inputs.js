import React from 'react'

export default function Inputs({ labels, hardmode }) {
    return (
        <form>
            {labels.map(p => (
                hardmode 
                    ? (<><input type="text"/><br/></>)
                    : (<><input type="text" id={p.id}/><br/></>)                
            ))}
        </form>
    )
}
