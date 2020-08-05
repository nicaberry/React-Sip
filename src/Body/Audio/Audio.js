import React from 'react';
import './Audio.css';
// import { render } from '@testing-library/react';

export default class Audio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            music: false,
        }
    }
    componentDidMount() {
        this.playAudio();
    }
  
    playAudio() {
        this.setState((prevState) => {
            return {
                music : !prevState.music,
            }
        })

        if (this.state.music) {
            this.audio.play();
        } else {
            this.audio.pause();
        }

    }

    render() {
        return (
            <div>
                <audio  src="http://english-da.ru/wp-content/uploads/2012/09/Blue-Beard-Part-2.mp3" id="audio" ref={(audio) => this.audio = audio}>
                    Nope music
                </audio>
                <button className="audio-btn" onClick={(e) => this.playAudio() }><span role="img" aria-label="headphone">&#127911;</span></button>
            </div>
        )
    }
}