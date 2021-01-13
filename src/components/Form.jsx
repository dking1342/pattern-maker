import React from 'react';
import { colors, bg} from './../colors';
import { useGlobalContext } from './../context';

const Form = () => {
    const { setPalette } = useGlobalContext();

    const handleBGChange = (e) => {
        document.getElementById('main-svg').style.backgroundColor= `${e.target.value}`;
    }

    const handlePaletteChange = (e) => {
        let palette = colors
            .filter(color=> color.value === e.target.value)
            .map(item=> item.palette)
            .flat(Infinity)
        setPalette(palette);        
    }

    return (
        <form action="">
            <div className="form-control">
                <label htmlFor="tileColor">Tile Palette</label>
                <select name="palettes" id="palettes" onChange={ handlePaletteChange }>
                {
                    colors.map((color,index)=>(
                        <option key={index} value={ color.value }>
                            { color.value }
                        </option>
                    ))
                }
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="bgColor">Mosiac Color</label>
                <select name="bg" id="bgColors" onChange={ handleBGChange }>
                {
                    bg.map((item,index)=>(
                        <option key={ index } value={ item.value }>
                            { item.value }
                        </option>
                    ))
                }
                </select>
            </div>


        </form>
    )
}

export default Form
