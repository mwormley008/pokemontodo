import React from 'react'

export default function PokeForm({ updatePoke }) {

    const handleFormSubmit = event => {
        event.preventDefault();
        const pokeName = event.target.pokeName.value;
        updatePoke(pokeName);
        event.target.pokeName.value = ''
    };

    return (
        <form action="" onSubmit={handleFormSubmit}>
            <h1 className="text-center">Pokemon Search</h1>
            <div className="form-group">
                <input type="text" name="pokeName" className="form-control" placeholder='Enter Pokemon'/>
                <input type="submit" value="Search Pokemon" className="btn btn-outline-success w-100 mt-3" />
            </div>
        </form>
    )
}
