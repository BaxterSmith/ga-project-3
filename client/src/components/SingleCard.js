import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

class SingleCard extends Component {
    render() {
        return (
            <div>
                <h1>Musi-Cards!</h1>
                <a href="/:cardId/edit">Edit Card</a>
                <form action="/:cardId?_method=DELETE" method="POST">
                    <input type="submit" value="Delete Card"/>
                </form>
            </div>
        );
    }
}

export default SingleCard;