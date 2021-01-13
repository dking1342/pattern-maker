import React from 'react'

const Tile = (item) => {

    const { id, cName, path, fill, stroke } = item;

    const drag = e => {
        e.dataTransfer.setData("text", e.target.id);
    }


    return (
        <div id={ id } className={cName} draggable="true" onDragStart={(e)=> drag(e)} >  
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path fill={fill} stroke={stroke} d={path} />
            </svg>
              
        </div>
    )
}

export default Tile
