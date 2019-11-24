import React, { Component } from 'react';
import './recipePreview.css';

class RecipePreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo:this.props.photo,
            name:this.props.name
        };
    }

    render() {
        return (
            <div className="recipePreview" >
                <div className='photo-recipe' >
                  <img src={this.props.photo} alt={"Showing " + this.props.name}/>
            </div>
                <div className="name" >
                   {this.props.name}
            </div >
            </div>

        );
    }
}

export default RecipePreview;