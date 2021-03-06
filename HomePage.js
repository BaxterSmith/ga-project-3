import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewForm from './NewForm.js';
import styled from 'styled-components';
import axios from 'axios';

const PageStyle = styled.div`
    background: #ccccff;
    text-align: center;
    color: #333;
`;
const QuestionList = styled.ul`
    list-style-type: none;
    margin: 0 auto;
`;
const ListItem = styled.li`
    background-color: #ffffcc;
    border: 1px solid #0000ff;
    padding: 10px;
    width: 50%;
    margin: 0 auto;
`;

class HomePage extends Component {
    state = {
        cards: [{}]
    };
    componentDidMount = () => {
        axios.get(`/cards`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    cards: res.data
                });
            });
    }
    render() {
        return (
            <div>
                <PageStyle>
                    <h1>Musi-Cards!</h1>
                    <Link to="/new">Create New Card</Link>
                        <ul>
                            <QuestionList>
                                {this.state.cards.map((card) => (
                                    <li><ListItem><a href="/:cardId">{card.question}</a></ListItem></li>
                                ))}
                            </QuestionList>
                        </ul>
                    <p>Copyright 2019 Baxter Smith</p>
                </PageStyle>
            </div>
        );
    }
}

export default HomePage;