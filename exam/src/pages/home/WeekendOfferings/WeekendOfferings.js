import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { updateLocalStorageArray } from '../../../utils/updateLocalStorageArray';

import styles from './WeekendOfferings.module.css';

class WeekendOfferings extends Component {
    constructor(props) {
        super(props);
        this.state = { language: this.props.language, content: [] };
    }

    componentDidMount() {
        const { language } = this.props;
        axios.get(`/languages/${language}/home/WeekendOfferings.json`).then(response => this.setState({ content: response.data })).catch(console.error);
    }

    save_local_storage = (hotel_id) => {
        updateLocalStorageArray('array_viewed_options', hotel_id, 4);
    };

    render() {
        const { weekend_offerings } = this.props;
        const { content } = this.state;

        if (!content.title || weekend_offerings.length === 0) return <div>{content.loading}</div>;

        return (
            <div className={styles.hotel_recommendations}>
                <p className={styles.title}>{content.title}</p>
                <div className={styles.list}>
                    {weekend_offerings.map(hotel => (
                        <NavLink onClick={() => this.save_local_storage(hotel.id)} to={`/page/${hotel.id}`} className="nav-link" key={hotel.id}>
                            <div className={styles.card}>
                                <img src={hotel.photo} alt={hotel.name} className={styles.photo} />
                                <div className={styles.info}>
                                    <p className={styles.name}>{hotel.name}</p>
                                    <p className={styles.location}>{hotel.location.city}, {hotel.location.country}</p>
                                    <p className={styles.rating}>{content.hotel.rating}: {hotel.rating}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        );
    }
}

export default WeekendOfferings;