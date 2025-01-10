import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import BookingForm from "./BookingForm/BookingForm";
import WelcomeBlock from "./WelcomeBlock/WelcomeBlock";
import YouRecentlySearched from "./YouRecentlySearched/YouRecentlySearched";
import WeekendOfferings from "./WeekendOfferings/WeekendOfferings";
import ViewedOptions from "./ViewedOptions/ViewedOptions";

import { updateLocalStorageArray } from '../../utils/updateLocalStorageArray';
import styles from './Home.module.css';

class Home extends Component {
    constructor(props) {
        super(props);
        const language = localStorage.getItem('language');
        const array_latest_requests = JSON.parse(localStorage.getItem('array_latest_requests') || '[]');
        const array_viewed_options_id = JSON.parse(localStorage.getItem('array_viewed_options') || '[]');
        const latest_request = array_latest_requests.length > 0 ? array_latest_requests[array_latest_requests.length - 1] : null;
        this.state = { language, array_latest_requests, array_viewed_options_id, array_latest_views: [], cities: [], weekend_offerings: [], redirect_to_hotels: false, latest_request };
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/cities`).then(response => this.setState({ cities: response.data })).catch(error => console.error(error));
        axios.get(`${process.env.REACT_APP_API_URL}/weekend_offerings`).then(response => this.setState({ weekend_offerings: response.data })).catch(error => console.error(error));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.cities !== this.state.cities && this.state.cities.length > 0 && !this.state.latest_request) {
            this.setState({ latest_request: { city: this.state.cities[0], startDate: "", endDate: "", adults: 1, children: 0 } });
        }
    }

    save_local_storage = (latest_request) => {
        const array_latest_requests = updateLocalStorageArray('array_latest_requests', latest_request, 3);
        this.setState({ array_latest_requests, redirect_to_hotels: true });
    };

    render() {
        const { language, cities, array_latest_requests, array_viewed_options_id, weekend_offerings, redirect_to_hotels, latest_request } = this.state;
        if (redirect_to_hotels) return <Navigate to="/hotels" />;

        return (
            <main>
                <div className={styles.container}>
                    <BookingForm language={language} cities={cities} latest_request={latest_request} onSubmit={this.save_local_storage} />
                    {array_latest_requests.length === 0 && <WelcomeBlock language={language} />}
                    {array_latest_requests.length > 0 && <YouRecentlySearched language={language} array_latest_requests={array_latest_requests} />}
                    {array_viewed_options_id.length > 0 && <ViewedOptions language={language} array_viewed_options_id={array_viewed_options_id}/>}
                    {weekend_offerings.length > 0 && <WeekendOfferings language={language} weekend_offerings={weekend_offerings} />}
                </div>
            </main>
        );
    }
}

export default Home;