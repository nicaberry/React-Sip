import React from 'react';
import './Warning.css';

export default  class Warning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
        }
    }

    render() {
        let clsName = this.state.open === "true" ? "danger" : "not-danger";
        return (
            <div className={clsName}>
                <h2>{clsName}</h2>
            </div>
        )
    }
    
}