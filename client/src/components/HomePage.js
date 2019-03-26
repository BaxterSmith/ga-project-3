import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewForm from './NewForm.js';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to="/new">Create New Card</Link>
            </div>
        );
    }
}

export default HomePage;