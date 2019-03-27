import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const PageStyle = styled.div`
    background: #ccccff;
    text-align: center;
    color: #333;
    padding: 5px;
`;

class SingleCard extends Component {
    render() {
        return (
            <div>
                <PageStyle>
                    <h1>Musi-Cards!</h1>
                    <a href="/:cardId/edit">Edit Card</a>
                    <form action="/:cardId?_method=DELETE" method="POST">
                        <input type="submit" value="Delete Card"/>
                    </form>
                    <p>Copyright 2019 Baxter Smith</p>
                </PageStyle>
            </div>
        );
    }
}

export default SingleCard;