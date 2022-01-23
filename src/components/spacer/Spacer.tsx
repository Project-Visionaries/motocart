import React from 'react'

interface Props {
    height?: string,
    width?: string,
}

export const Spacer = ({height, width}: Props) => {
    return (
        <div style={{
            height: height? height: "20px",
            width: width? width : '100%'
        }}>
            
        </div>
    )
}
