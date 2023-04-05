import React from 'react'

export default function PokeForm({ updatePoke }) {

    const handleFormSubmit = event => {
        // Prevent the form from making a new request
        event.preventDefault();
        // Get the input value from the form
        const pokeName = event.target.pokeName.value;
        // Call the updatePoke function from parent component to change state and rerender component
        updatePoke(pokeName);
        // Set the input back to empty
        event.target.pokeName.value = ''
    };

    return (
        <form action="" onSubmit={handleFormSubmit}>
            <h1 className="text-center">Pokemon Search</h1>
            <div className="form-group">
                <input type="text" name="pokeName" className="form-control" placeholder='Enter Pokemon'/>
                <input type="submit" value="Search Pokemon" className="btn btn-outline-danger w-100 mt-3" />
            </div>
        </form>
    )
}
