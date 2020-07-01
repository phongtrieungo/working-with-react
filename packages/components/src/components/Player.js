import React from 'react'

const getClass = (index) => index === 0 ? `btn btn-success btn-sm disabled` : `btn btn-success btn-sm`; 

export const Player = (props) => (
    <React.Fragment>
        <td>{ props.index }</td>
        <td>{ props.name }</td>
        <td>{ props.name.length } letters</td>
        <td>
            <button className="btn btn-warning btn-sm mr-2" 
                    onClick={ () => props.reverseName(props.index)}>
                Reverse
            </button>
            <button className={ getClass(props.index )}
                    onClick={ () => props.moveUp(props.index)}>
                Move Up
            </button>
            <button className="btn btn-success btn-sm ml-2"
                    onClick={ () => props.moveDown(props.index)}>
                Move Down
            </button>
        </td>
    </React.Fragment>
);

export default Player;