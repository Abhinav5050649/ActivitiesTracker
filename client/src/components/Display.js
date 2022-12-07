import React from 'react';

export const Display = ({ActNumber, ActName}) => {

    return(
        <>
            <li class="list-group-item"><p>{ActName}</p></li> 
        </>
    )
}

export default Display;