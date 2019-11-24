import React from 'react';
import RecipePreview from '../RecipePreview/RecipePreview';
import './body.css';



function Body() {
    return (
        <div className="body" >
            <div className="line">
                <RecipePreview name="Tiramisu" photo="" />
                <RecipePreview name="Tiramisu" photo="" />
                <RecipePreview name="Tiramisu" photo="" />
                <RecipePreview name="Tiramisu" photo="" />
            </div>
            <div className="line">
                <RecipePreview name="Tiramisu" photo="" />
                <RecipePreview name="Tiramisu" photo="" />
            </div>
        </div>

    );
}

export default Body;