import React from 'react';
import axios from 'axios';

class LimitFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            limit: 10
        }
    }
    handleTest = () => {
        axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos?_limit=${this.state.limit}`)
            .then(res => {
                const response = res.data
                this.setState({ data: response })
                console.log(response);
                // this.setState({ items: response })
            })
            .catch(error => console.log(error))
        this.setState(prevState => {
            return { limit: prevState.limit + 10 }
        })

    }

    render() {
        const { data } = this.state
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value) => {
                                return <tr>
                                    <td >{value.id}</td>
                                    <td key={value.id}><img src={value.thumbnailUrl} alt='img' /></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                Test
                <button onClick={this.handleTest}>Click</button>
            </div>
        )
    }
}

export default LimitFetch