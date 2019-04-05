import React, { PureComponent } from "react";
import ColorBox from "./ColorBox";
import './ColorPage.css';

interface Props {

}

class ColorPage extends PureComponent<Props> {
    render() {
        return (
            <div className='ColorPage'>
                <ColorBox colorCode='#000000'/>
                <ColorBox colorCode='#eeeeee'/>
                <ColorBox colorCode='#aacc44'/>
                
                <ColorBox colorCode='#cffffa'/>
                <ColorBox colorCode='#aa0000'/>
                <ColorBox colorCode='#affff1'/>
                
                <ColorBox colorCode='#cf3ff1'/>
                <ColorBox colorCode='#bffff1'/>
                <ColorBox colorCode='#afaff1'/>
            </div>
        )
    }
}

export default ColorPage;