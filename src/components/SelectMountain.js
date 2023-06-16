import React, { useState, Component } from 'react';
import mountains from "./data/mountains.json";
import Style from "./SelectMountain.css";

class SelectMountain extends Component {
render() {
    return (
        <div>
            <div className='select-container'>
                <select>
                    {mountains.map((name) => (
                        <option name={mountains.name}>{mountains.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}


}
export default SelectMountain();