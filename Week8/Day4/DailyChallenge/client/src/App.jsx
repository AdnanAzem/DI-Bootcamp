import React, { Component } from 'react';

class App extends Component {
    state = {
        message: '',
        inputText: '',
        postResponse: '',
    };

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:5000/api/hello');
            const data = await response.text();
            this.setState({ message: data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    handleChange = (e) => {
        this.setState({ inputText: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/world', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: this.state.inputText }),
            });
            const data = await response.text();
            this.setState({ postResponse: data });
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.inputText}
                        onChange={this.handleChange}
                        placeholder="Type something..."
                    />
                    <button type="submit">Submit</button>
                </form>

                <p>{this.state.postResponse}</p>
            </div>
        );
    }
}

export default App;