import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styles from './ShowHotels.module.css';

class ShowHotels extends Component {
    constructor(props) {
        super(props);

        const array_latest_requests = JSON.parse(localStorage.getItem("array_latest_requests")) || [];
        const latest_request = array_latest_requests.length > 0 ? array_latest_requests[array_latest_requests.length - 1] : null;
        this.state = { language: this.props.language, content: [], latest_request: latest_request };
    }

    componentDidMount() {
        const { language } = this.props;
    }

    save_local_storage = (hotel_id) => {
        let array_viewed_options = JSON.parse(localStorage.getItem("array_viewed_options")) || [];
        array_viewed_options = [...array_viewed_options, hotel_id];
        if (array_viewed_options.length > 4) array_viewed_options.shift();
        localStorage.setItem("array_viewed_options", JSON.stringify(array_viewed_options));
    }

    render() {
        const { hotels } = this.props;
        const { content, latest_request } = this.state;

        return (
            <div className={styles.hotels}>
                <p className={styles.title}>{latest_request.city}: найдено {hotels.length} вариантов</p>
                <div className={styles.list}>
                    {hotels.map(hotel => (
                        <NavLink onClick={() => this.save_local_storage(hotel.id)} to={`/page/${hotel.id}`} className="nav-link" key={hotel.id}>
                            <div className={styles.card}>
                                <div>
                                    <img className={styles.photo} src={hotel.photo} alt={hotel.name}/>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.name}>
                                        <span className={styles.name}>{hotel.name} </span>
                                        <span className={styles.rating}>★ {hotel.rating}</span>
                                    </div>
                                    <p className={styles.location}>{hotel.location.city}, {hotel.location.country}</p>
                                    <p className={styles.description}>{hotel.description}</p>

                                    <div className={styles.card_amenities}>
                                        {hotel.amenities.map((amenity, index) => (
                                            <span className={styles.card_amenity} key={index}>{amenity}</span>
                                        ))}
                                    </div>

                                    <p className={styles.price}>Цена за ночь: {hotel.price_per_night} грн</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        );
    }
}

export default ShowHotels;