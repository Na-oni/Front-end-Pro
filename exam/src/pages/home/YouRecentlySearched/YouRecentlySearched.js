import React, { Component } from "react";
import axios from "axios";
import icon from "../../../components/header/icons/ua.png";
import styles from './YouRecentlySearched.module.css';
import {Navigate} from "react-router-dom";

class YouRecentlySearched extends Component {
    constructor(props) {
        super(props);
        const array_latest_requests = JSON.parse(localStorage.getItem('array_latest_requests'));
        this.state = { language: this.props.language, content: { recent_searches: { heading: 'Загрузка...' } }, error: null, array_latest_requests, redirect_to_hotels: false };
    }

    componentDidMount() {
        const { language } = this.props;
        axios.get(`/languages/${language}/home/YouRecentlySearched.json`).then(response => { this.setState({ content: response.data }); }).catch(error => { console.error(error); this.setState({ content: { recent_searches: { heading: 'Ошибка загрузки' } }, error }); });
    }

    on_click_button(request) {
        const { array_latest_requests } = this.props;

        if(array_latest_requests.includes(request)) {
            const updated_array = [...array_latest_requests.filter(item => item !== request), request];
            localStorage.setItem('array_latest_requests', JSON.stringify(updated_array));

            this.setState({ redirect_to_hotels: true });
        }
    }

    render() {
        const { content, error, redirect_to_hotels } = this.state;
        const { array_latest_requests } = this.props;

        if (redirect_to_hotels) return <Navigate to="/hotels" />;
        if (error) return <div className={styles.error}></div>;

        return (
            <div className={styles.you_recently_searched}>
                <p className={styles.title}>{content.recent_searches.title}</p>
                <div className={styles.you_recently_searched_div}>
                    {array_latest_requests && array_latest_requests.length > 0 ? (
                        array_latest_requests.map((item, index) => (
                            <div className={styles.item} key={index} onClick={() => this.on_click_button(item)}>
                                <div className={styles.img}><img src={icon} alt="item.img"/></div>
                                <div className={styles.text}>
                                    <p className={styles.city}>{item.city}</p>
                                    <p className={styles.remainder}>
                                        {item.startDate} - {item.endDate}, {item.adults + item.children} {content.recent_searches.people}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (<></>)}
                </div>
            </div>
        );
    }
}

export default YouRecentlySearched;