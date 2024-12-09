import React, { Component } from 'react';

class ThemeToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkTheme: false,
        };
    }

    componentDidMount() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.setState({ isDarkTheme: savedTheme === 'dark' });
            document.body.className = savedTheme;
        }
    }

    toggleTheme = () => {
        const newTheme = !this.state.isDarkTheme ? 'dark' : 'light';
        this.setState({ isDarkTheme: !this.state.isDarkTheme });
        localStorage.setItem('theme', newTheme);
        document.body.className = newTheme;
    };

    render() {
        return (
            <button className='theme-button' onClick={this.toggleTheme}>
                {this.state.isDarkTheme ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
            </button>
        );
    }
}

export default ThemeToggle;