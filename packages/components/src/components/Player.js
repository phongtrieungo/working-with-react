import React from 'react'
import { CallbackButton } from '../button/callback-button';

const getClass = (index) => index === 0 ? `btn btn-success btn-sm disabled` : `btn btn-success btn-sm`; 

export const Player = (props) => (
    <React.Fragment>
        <td>{ props.index }</td>
        <td>{ props.name }</td>
        <td>{ props.name && props.name.length } letters</td>
        <td>
            <CallbackButton theme="primary" text="Reverse" callback={ () => props.reverseName(props.index) }/>
            <CallbackButton theme="info" text="Move Up" callback={ () => props.moveUp(props.index) }/>
            <CallbackButton theme="warning" text="Move Down" callback={ () => props.moveDown(props.index) }/>
            <CallbackButton callback={ () => props.moveDown(props.index) }/>
        </td>
    </React.Fragment>
);

export default Player;