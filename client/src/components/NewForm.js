import React, { Component } from 'react';

class NewForm extends Component {
    render() {
        return (
            <div>
               <form action="/" method="POST">
                   <div>
                       <label for="skillLevel">Skill Level</label>
                       <input type="text" name="skillLevel" id="skillLevel"/>
                   </div>
                   <div>
                       <label for="category">Category</label>
                       <input type="text" name="category" id="category"/>
                   </div>
                   <div>
                       <label for="question">Question</label>
                       <textarea rows="30" cols="10" name="question" id="question"></textarea>
                   </div>
                   <div>
                       <label for="answer">Answer</label>
                       <input type="text" name="answer" id="answer"/>
                   </div>
                   <div>
                       <label for="name">Your Name</label>
                       <input type="text" name="name" id="name"/>
                   </div>
                   <div>
                       <label for="age">Your Age</label>
                       <input type="number" name="age" id="age"/>
                   </div>
                   <input type="submit" value="Add Card"/>
               </form> 
            </div>
        );
    }
}

export default NewForm;