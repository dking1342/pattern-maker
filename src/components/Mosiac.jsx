import React from 'react'
import { useGlobalContext } from './../context';

const Mosiac = () => {
    const { panel1, panel2, panel3, panel4, palette } = useGlobalContext();

    return (
        <div id="mosiac">
            <svg id="main-svg" >
            <defs>
                <pattern id="mosiac-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" viewBox="0,0 100,100">
                <g>
                    <path className="mosiacs" id="mosiac1" fill={palette[0]} d={ panel1 } />
                    <path className="mosiacs" id="mosiac2" fill={palette[1]} d={ panel2 } />
                    <path className="mosiacs" id="mosiac3" fill={palette[2]} d={ panel3 } />
                    <path className="mosiacs" id="mosiac4" fill={palette[3]} d={ panel4 } />
                </g>
                </pattern>
            </defs>
            <rect id="mosiac" x="0" y="0" width="100%" height="100%" fill="url('#mosiac-pattern')" />
            </svg>
        </div>
    )
}

export default Mosiac
