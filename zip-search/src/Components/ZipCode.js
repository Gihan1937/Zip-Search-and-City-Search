import React, {Component} from 'react';
import axios from 'axios';
import './ZipCode.css';

class ZipCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zip: '',
            data: []
        }
    }

    handleChange = (e) => {
        this.setState({
            zip: e.target.value
        });
    }

    componentDidMount = () => {
        axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`)
            .then(response => {
                const newInfo = response.data;
                this.setState({data: newInfo});
            })
            
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.zip !== this.state.zip) {
            this.componentDidMount();
        }
    }

    render() {
        return (
            <div className = "zip">
                <form>
                    Enter a Zip Code: <input type="text" name="zip" placeholder=" Try 10016" onChange={this.handleChange}></input>
                </form>
                <br></br>
                {this.state.data.map(zipData =>
                    <div key={zipData.Number} className="zipCode">
                        <h2 id="cityHeader">{zipData.City}</h2> 
                        <ul id="zipCodeList">
                            <li>State: {zipData.State}</li>
                            <li>Location: ({zipData.Lat}, {zipData.Long})</li>
                            <li>Population(estimated): {zipData.EstimatedPopulation}</li>
                            <li>Total Wages: {zipData.TotalWages}</li>
                        </ul>
                    </div>
                )} 
            </div>
        )
    }
}

export default ZipCode