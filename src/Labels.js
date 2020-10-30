import React from 'react'

export default function Labels({ labels, hardmode }) {
    return (
        <>
            {labels.map(p => (
                hardmode 
                    ? (<label>{p.text}<br/></label>)
                    : (<label htmlFor={p.id}>{p.text}<br/></label>)                
            ))}
        </>
    )
}
