import React, { Component } from "react";
import axios from "axios";
import styles from './WelcomeBlock.module.css';

class WelcomeBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { language: this.props.language, content: [] };
    }

    componentDidMount() {
        const { language } = this.props;
        axios.get(`/languages/${language}/home/WelcomeBlock.json`).then(response => this.setState({ content: response.data })).catch(error => console.error(error));
    }

    render() {
        const { content } = this.state;

        if (Object.keys(content).length === 0) return null;

        return (
            <div className={styles.welcome_block}>
                <p className={styles.title}>{content.title}</p>
                <p className={styles.text}>{content.text}</p>
                <ul className={styles.list}>
                    {content.listItems.map((item, index) => (
                        <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                    ))}
                </ul>
                <p className={styles.footer}>{content.footer}</p>
            </div>
        );
    }
}

export default WelcomeBlock;