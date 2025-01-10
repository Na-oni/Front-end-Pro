import React, { Component } from "react";
import axios from 'axios';

import styles from './About.module.css';

class About extends Component {
    constructor(props) {
        super(props);
        const language = localStorage.getItem('language');
        this.state = { language: language, menu: [], content: [], select_menu: "about" };
    }

    componentDidMount() {
        const { language } = this.state;
        axios.get('/languages/' + language + '/about/menu.json').then(response => this.setState({ menu: response.data })).catch(error => console.error(error));
        axios.get('/languages/' + language + '/about/content.json').then(response => this.setState({ content: response.data })).catch(error => console.error(error));
    }

    on_click_about_menu(key) {
        this.setState({ select_menu: key });
    }

    render() {
        const { menu, content, select_menu } = this.state;
        const filtered_content = content.filter(item => item.key === select_menu);

        return (
            <main>
                <div className={styles.container}>
                    <div className={styles.about_menu}>
                        {menu.map((item) => (
                            <button onClick={() => this.on_click_about_menu(item.key)} className={styles.item} key={item.key}>
                                {item.text}
                            </button>
                        ))}
                    </div>

                    <div className={styles.about_content}>
                        {filtered_content.map((item, index) => (
                            <p className={styles[item.style]} key={index}>{item.text}</p>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}

export default About;