import React, { useState } from 'react'
import Tile from './Tile'
import tiles from './../data';

const Board = () => {
    const [dragged, setDragged]=useState(null);

    const drop = (e) => {
        e.preventDefault();
        if(dragged === '' || dragged === null) return;
        let data = e.dataTransfer.getData("text");
        document.getElementById(`${dragged}`).appendChild(document.getElementById(data));
    }
    const allowDrop = e => {
        e.preventDefault();
        setDragged(e.target.id);
    }


    return (
        <div id="board" >
            {
                tiles.map((tile,index)=>(
                    <div key={index} id={`board${index}`} onDrop={(e)=>drop(e)} onDragOver={(e)=> allowDrop(e)}>
                        <Tile 
                            key={ index }
                            {...tile} 
                        />                        
                    </div> 
                ))
            }
        </div>
    )
}

export default Board
