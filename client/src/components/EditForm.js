import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const PageStyle = styled.div`
    background: #ccccff;
    text-align: center;
    color: #333;
    padding: 5px;
`;

class EditForm extends Component {
    state = {
        card: {}
    };
    componentDidMount = () => {
        axios.get(`/${this.props.match.params.cardId}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    card: res.data
                });
            });
    }
    handleChange = (evt) => {
        const clonedFormData = {...this.state.formData}
        clonedFormData[evt.target.name] = evt.target.value
        this.setState({formData: clonedFormData});
    }
    handleSubmit(evt) {
        evt.preventDefault();
    }
    render() {
        return (
            <div>
                <PageStyle>
                <h1>Musi-Cards!</h1>
                <h2>Edit Flash Card</h2>
                <form action={`/${this.state.card._id}?_method=PUT`} method="POST" onSubmit={this.handleSubmit}>
                   <div>
                       <label for="skillLevel">Skill Level</label>
                       <input type="text" name="skillLevel" id="skillLevel" value={this.state.card.skillLevel} onChange={this.handleChange}/>
                   </div>
                   <div>
                       <label for="category">Category</label>
                       <input type="text" name="category" id="category" value={this.state.card.category} onChange={this.handleChange}/>
                   </div>
                   <div>
                       <label for="question">Question</label>
                       <textarea rows="10" cols="30" name="question" id="question" value={this.state.card.question} onChange={this.handleChange}></textarea>
                   </div>
                   <div>
                       <label for="answer">Answer</label>
                       <input type="text" name="answer" id="answer" value={this.state.card.answer} onChange={this.handleChange}/>
                   </div>
                   <input type="submit" value="Update Card"/>
               </form>
               <Link to="/">Back to Home</Link>
               <p>Copyright 2019 Baxter Smith</p>
               </PageStyle>
            </div>
        );
    }
}

export default EditForm;