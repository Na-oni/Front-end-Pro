import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { updateLocalStorageArray } from '../../../utils/updateLocalStorageArray';
import styles from './ViewedOptions.module.css';

class ViewedOptions extends Component {
    constructor(props) {
        super(props);
        this.state = { language: this.props.language, array_viewed_options: [], content: [], isLoading: true };
    }

    componentDidMount() {
        const { language, array_viewed_options_id } = this.props;
        axios.get(`/languages/${language}/home/ViewedOptions.json`).then(response => this.setState({ content: response.data })).catch(console.error);
        axios.post(`${process.env.REACT_APP_API_URL}/hotels_by_ids`, { array_id: array_viewed_options_id }).then(response => {
            this.setState({ array_viewed_options: response.data, isLoading: false });
        }).catch(error => console.error('Error fetching data:', error));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.array_viewed_options_id !== this.props.array_viewed_options_id) {
            axios.post(`${process.env.REACT_APP_API_URL}/hotels_by_ids`, { array_id: this.props.array_viewed_options_id }).then(response => {
                this.setState({ array_viewed_options: response.data, isLoading: false });
            }).catch(error => console.error('Error updating data:', error));
        }
    }

    save_local_storage = (hotel_id) => {
        updateLocalStorageArray('array_viewed_options', hotel_id, 4);
    };

    render() {
        const { array_viewed_options, content, isLoading } = this.state;

        if (isLoading) { return <div>Loading...</div>; }

        return (
            <div className={styles.hotel_recommendations}>
                <p className={styles.title}>{content.title}</p>
                <div className={styles.list}>
                    {array_viewed_options.map(hotel => (
                        <NavLink onClick={() => this.save_local_storage(hotel.id)} to={`/page/${hotel.id}`} className="nav-link" key={hotel.id}>
                            <div className={styles.card}>
                                <img src={hotel.photo} alt={hotel.name} className={styles.photo} />
                                <div className={styles.info}>
                                    <p className={styles.name}>{hotel.name}</p>
                                    <p className={styles.location}>{hotel.location.city}, {hotel.location.country}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        );
    }
}

export default ViewedOptions;