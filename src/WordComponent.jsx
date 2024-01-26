import React, { useState } from 'react';
export default function WordComponent({ word }) {

    const [selected, setSelected] = useState(false);

    function handleClick() {
        setSelected(!selected)
    }
    function getSelectionClass(){
        return selected ? 'selected' : ''
    }
    return (
        <div onClick={handleClick} className={"word_component prevent-select " + getSelectionClass()}>
            {word}
        </div>
    )
}
