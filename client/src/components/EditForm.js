import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const PageStyle = styled.div`
    background: #ccccff;
    text-align: center;
    color: #333;
    padding: 5px;
`;

class EditForm extends Component {
    state = {
        skillLevel: '',
        category: '',
        question: '',
        answer: '',
        name: '',
        age: ''
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
                <h1>Musi-Cards!</h1>
                <h2>Edit Flash Card</h2>
                <form action="/:cardId?_method=PUT" method="POST" onSubmit={this.handleSubmit}>
                   <div>
                       <label for="skillLevel">Skill Level</label>
                       <input type="text" name="skillLevel" id="skillLevel" onChange={this.handleChange}/>
                   </div>
                   <div>
                       <label for="category">Category</label>
                       <input type="text" name="category" id="category" onChange={this.handleChange}/>
                   </div>
                   <div>
                       <label for="question">Question</label>
                       <textarea rows="30" cols="10" name="question" id="question" onChange={this.handleChange}></textarea>
                   </div>
                   <div>
                       <label for="answer">Answer</label>
                       <input type="text" name="answer" id="answer" onChange={this.handleChange}/>
                   </div>
                   <div>
                       <label for="name">Your Name</label>
                       <input type="text" name="name" id="name" onChange={this.handleChange}/>
                   </div>
                   <div>
                       <label for="age">Your Age</label>
                       <input type="number" name="age" id="age" onChange={this.handleChange}/>
                   </div>
                   <input type="submit" value="Add Card"/>
               </form>
               <Link to="/">Back to Home</Link>
               <p>Copyright 2019 Baxter Smith</p>
            </div>
        );
    }
}

export default EditForm;