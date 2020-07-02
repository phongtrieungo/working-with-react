import React from 'react'
import { CallbackButton } from '../button/callback-button';
import { HookButton } from '../button/hook-button';

const getClass = (index) => index === 0 ? `btn btn-success btn-sm disabled` : `btn btn-success btn-sm`; 

export const Player = (props) => (
    <React.Fragment>
        <td>{ props.index }</td>
        <td>{ props.name }</td>
        <td>{ props.name && props.name.length } letters</td>
        <td>
            <CallbackButton theme="primary" text="Reverse" 
                counter={ props.counter }
                callback={ () => {props.reverseName(props.index)} }
                incrementCallback={ props.incrementCallback }/>
            <CallbackButton theme="info" text="Move Up" callback={ () => props.moveUp(props.index) }/>
            <CallbackButton theme="warning" text="Move Down" callback={ () => props.moveDown(props.index) }/>
            <CallbackButton />
            <HookButton text="Hook Button" className="btn btn-sm btn-success m-1"/>
        </td>
    </React.Fragment>
);

export default Player;