import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ferstInput: "",
            secondInput: "",
        };

        this.writeName = this.writeName.bind(this);
    }

    writeName(e) {
        this.setState( {[e.target.name]: e.target.value,})
    }

    render() {
        return (
            <form>
                <label>
                    <input name="firstInput" type="text"  onChange={this.writeName}/>
                    <p> {this.state.firstInput}</p>
                </label>

                <label>
                    <input name="secondInput" type="text"  onChange={this.writeName}/>
                    <p> {this.state.secondInput}</p>
                </label>

            </form>
        )
    }
}