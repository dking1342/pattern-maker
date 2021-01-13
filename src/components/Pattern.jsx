import React, { useState } from 'react';
import { useGlobalContext } from './../context';

const Pattern = () => {
    const { setPanel1, setPanel2, setPanel3, setPanel4 } = useGlobalContext();
    const [dragged, setDragged]=useState(null);

    const drop = (e) => {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        document.getElementById(`${dragged}`).appendChild(document.getElementById(data));
        
        switch (document.getElementById(`${dragged}`).id) {
            case 'empty0':
                let p1 = document.getElementById(`${dragged}`).firstElementChild.firstElementChild.firstElementChild.getAttribute('d').replace('M0 0', 'M0 0');
                setPanel1(p1);
                break;
            case 'empty1':
                let p2 = document.getElementById(`${dragged}`).firstElementChild.firstElementChild.firstElementChild.getAttribute('d').replace('M0 0', 'M50 0');
                setPanel2(p2);
                break;
            case 'empty2':
                let p3 = document.getElementById(`${dragged}`).firstElementChild.firstElementChild.firstElementChild.getAttribute('d').replace('M0 0', 'M0 50');
                setPanel3(p3);
                break;
            case 'empty3':
                let p4 = document.getElementById(`${dragged}`).firstElementChild.firstElementChild.firstElementChild.getAttribute('d').replace('M0 0', 'M50 50');
                setPanel4(p4);
                break;
        
            default:
                break;
        }


    }    
    const allowDrop = e => {
        e.preventDefault();
        setDragged(e.target.id)
    }

    return (
        <div id="pattern" onDrop={(e)=>drop(e, this)} onDragOver={(e)=> allowDrop(e)}>
            <div id="empty0"  ></div>
            <div id="empty1"  ></div>
            <div id="empty2"  ></div>
            <div id="empty3"  ></div>
        </div>
    )
}

export default Pattern
