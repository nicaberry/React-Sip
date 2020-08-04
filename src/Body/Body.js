import React from 'react';
import './Body.css';
import List from './List/List';

export default function Body(props) {
    return (
       <div className="body">
           <section className="container-for-list-emoji">
               <h2>Список эмодзи:</h2>
                <List emoji={props.emoji}></List>
           </section>
       </div>
    )
}