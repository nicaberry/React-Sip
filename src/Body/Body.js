import React from 'react';
import './Body.css';
import List from './List/List';
import Audio from './Audio/Audio';

export default function Body(props) {
    return (
       <div className="body">

           <section>
               <h2>Список эмодзи:</h2>
                <List emoji={props.emoji}></List>
           </section>

           <section>
               <h2>Blue Beard:</h2>
               <Audio/>
           </section>

       </div>
    )
}