import React from 'react';
import axios from 'axios';

class LoginFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    body = {
        'username': "admin",
        'password': "admin"
    }
    handleTest = async () => {
        await axios.post('https://dev.enigmacamp.com/trainings/api/auth/login', {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: this.body
        })
            .then(res => {
                const response = res.data
                console.log(response);
                // this.setState({ items: response })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                Test
                <button onClick={this.handleTest}>Click</button>
            </div>
        )
    }
}

export default LoginFetch