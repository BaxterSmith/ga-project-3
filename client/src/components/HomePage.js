import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewForm from './NewForm.js';
import styled from 'styled-components';
import axios from 'axios';

const HomePageStyle = styled.div`
    background: #ccccff;
`;

class HomePage extends Component {
    state = {
        cards: []
    };
    componentDidMount = () => {
        if (this.props.match.params) {
            axios.get(`/api/cards/${this.props.match.params.cardId}`)
            .then(res => {
                this.setState({
                    cards: res.data.cards
                });
            });
        }
    }
    render() {
        return (
            <div>
                <h1>Musi-Cards!</h1>
                <Link to="/new">Create New Card</Link>
            </div>
        );
    }
}

export default HomePage;