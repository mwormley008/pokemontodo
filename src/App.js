import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pokemon from './views/Pokemon';
import ToDo from './views/ToDo';

export default function App() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<ToDo />} />
                    <Route path='/pokemon' element={<Pokemon />} />
                </Routes>
            </div>
        </>
    )
}
