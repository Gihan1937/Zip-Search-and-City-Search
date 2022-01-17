import React, {Component} from 'react';
import axios from 'axios';
import './CitySearch.css';

class CitySearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            data: []
        }
    }

    handleChange = (e) => {
        this.setState({
            city: e.target.value
        });
    }

    componentDidMount = () => {
        axios.get(`http://ctp-zip-api.herokuapp.com/city/${this.state.city.toUpperCase()}`)
            .then(response => {
                const newInfo = response.data;
                this.setState({data: newInfo});
            })
            
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.city !== this.state.city) {
            this.componentDidMount();
        }
    }

    render() {
        return ( 
            <div>
                <form>
                    Enter a City: <input type = "text" name = "city" placeholder ="City" onChange = {this.handleChange}></input>
                </form>
                <br></br>
                {this.state.data.map(cityData =>
                    <div key = {cityData.Number} className = "city">
                        <ul>
                            <li>{cityData}</li>
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default CitySearch