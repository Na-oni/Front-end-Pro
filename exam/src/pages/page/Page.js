import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Page.module.css";

const Page = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [arrayLatestRequests, setArrayLatestRequests] = useState(
        JSON.parse(localStorage.getItem("array_latest_requests")) || []
    );
    const [latestRequest, setLatestRequest] = useState(
        arrayLatestRequests.length > 0 ? arrayLatestRequests[arrayLatestRequests.length - 1] : null
    );
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios
            .post(`${process.env.REACT_APP_API_URL}/page`, { id: id })
            .then((response) => {
                setHotel(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            });
    }, [id]);

    const saveLocalStorage = (latestRequest) => {
        let newArrayLatestRequests = [...arrayLatestRequests, latestRequest];
        if (newArrayLatestRequests.length > 3) newArrayLatestRequests.shift();
        localStorage.setItem("array_latest_requests", JSON.stringify(newArrayLatestRequests));
        setArrayLatestRequests(newArrayLatestRequests);
        axios
            .post(`${process.env.REACT_APP_API_URL}/hotels`, { request: latestRequest })
            .then((response) => setHotel(response.data))
            .catch((error) => console.error(error));
    };

    if (isLoading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    const { name, location, description, rating, price_per_night, amenities, photo, contact_info } = hotel;

    return (
        <main>
            <div className={styles.container}>
                <div className={styles.page}>
                    <div className={styles.image}>
                        <img src={photo} alt={name} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            <span className={styles.name}>{hotel.name} </span>
                            <span className={styles.rating}>★ {hotel.rating}</span>
                        </div>
                        <p className={styles.location}>{hotel.location.city}, {hotel.location.country}</p>
                        <p className={styles.description}>{hotel.description}</p>

                        <p className={styles.title}>Удобства</p>
                        <div className={styles.card_amenities}>
                            {hotel.amenities.map((amenity, index) => (
                                <span className={styles.card_amenity} key={index}>{amenity}</span>
                            ))}
                        </div>

                        <div className={styles.contact}>
                            <p className={styles.title}>Контакты</p>
                            <p className={styles.text}>Телефон: {contact_info.phone}</p>
                            <p className={styles.text}>Email: <a href={`mailto:${contact_info.email}`}>{contact_info.email}</a></p>
                            <p className={styles.text}>Веб-сайт:{" "}<a href={contact_info.website} target="_blank" rel="noopener noreferrer">{contact_info.website}</a></p>
                        </div>

                        <p className={styles.price}>Цена за ночь: {hotel.price_per_night} грн</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;