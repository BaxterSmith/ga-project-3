import React, { Component } from 'react';

class NewForm extends Component {
    render() {
        return (
            <div>
               <form>
                   <div>
                       <label for="skillLevel">Skill Level</label>
                       <input type="text" name="skillLevel" id="skillLevel"/>
                   </div>
                   <div>
                       <label for="category">Category</label>
                       <input type="text" name="category" id="category"/>
                   </div>
                   <div>
                       <label>Question</label>
                       <textarea></textarea>
                   </div>
                   <div>
                       <label>Answer</label>
                       <input />
                   </div>
                   <div>
                       <label>Your Name</label>
                       <input />
                   </div>
                   <div>
                       <label for="age">Your Age</label>
                       <input type="number" name="age" id="age"/>
                   </div>
               </form> 
            </div>
        );
    }
}

export default NewForm;