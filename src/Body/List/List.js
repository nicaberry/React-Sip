import React from 'react';
import './List.css';
import Li from './Li/Li'

export default function List(props) {
    return (
        <ol>
          { props.emoji.map((item, index) => {
            return <Li item={item} key={Date.now() + index}></Li>
            })
          }
        </ol>
    )
}