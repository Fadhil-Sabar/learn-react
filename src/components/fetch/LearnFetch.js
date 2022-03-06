import React from 'react';
import axios from "axios"

class LearnFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const response = res.data
                this.setState({ items: response })
            })
    }

    render() {
        const { items } = this.state
        return (
            <div>
                <p>asdasdokasodk</p>
                <ul>
                    {
                        items.map((data, index) =>
                            <li key={index}>{data.name}</li>
                        )
                    }
                </ul>
            </div>
        );
    }

}

export default LearnFetch