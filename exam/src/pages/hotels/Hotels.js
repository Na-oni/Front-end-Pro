import React, { Component } from "react";
import axios from "axios";

import BookingForm from "../home/BookingForm/BookingForm";
import ShowHotels from "./ShowHotels/ShowHotels";

import styles from "./Hotels.module.css";

class Hotels extends Component {
    constructor(props) {
        super(props);
        const language = localStorage.getItem("language");
        const array_latest_requests = JSON.parse(localStorage.getItem("array_latest_requests")) || [];
        const latest_request = array_latest_requests.length > 0 ? array_latest_requests[array_latest_requests.length - 1] : null;
        this.state = { language, array_latest_requests, cities: [], latest_request, hotels: [] };
    }

    componentDidMount() {
        const { latest_request } = this.state;
        axios.get(process.env.REACT_APP_API_URL + "/cities").then(response => this.setState({ cities: response.data })).catch(error => console.error(error));
        if (latest_request) {
            axios.post(process.env.REACT_APP_API_URL + "/hotels", { request: latest_request }).then(response => this.setState({ hotels: response.data })).catch(error => console.error(error));
        }
    }

    save_local_storage = (latest_request) => {
        let array_latest_requests = [...this.state.array_latest_requests, latest_request];
        if (array_latest_requests.length > 3) array_latest_requests.shift();
        localStorage.setItem("array_latest_requests", JSON.stringify(array_latest_requests));
        this.setState({ array_latest_requests }, () => {axios.post(process.env.REACT_APP_API_URL + "/hotels", { request: latest_request }).then(response => this.setState({ hotels: response.data })).catch(error => console.error(error));});
    }

    render() {
        const { language, cities, latest_request, hotels } = this.state;

        return (
            <main>
                <div className={styles.container}>
                    <BookingForm language={language} cities={cities} latest_request={latest_request} onSubmit={this.save_local_storage}/>

                    {hotels.length > 0 && (
                        <ShowHotels language={language} hotels={hotels}/>
                    )}
                </div>
            </main>
        );
    }
}

export default Hotels;