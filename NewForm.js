import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';

const PageStyle = styled.div`
    background: #ccccff;
    text-align: center;
    color: #333;
`;

class NewForm extends Component {
    state = {
        formData: {
            skillLevel: '',
            category: '',
            question: '',
            answer: '',
            name: '',
            age: ''
        },
        redirectToHome: false
    };
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
                <h2>Create Flash Card</h2>
               <form action="/" method="POST" onSubmit={this.handleSubmit}>
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
                       <textarea rows="10" cols="30" name="question" id="question" onChange={this.handleChange}></textarea>
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
               </PageStyle>
            </div>
        );
    }
}

export default NewForm;