import React from 'react';
import MovieForm from './MovieForm';
import './EditMovieModal.css';

const EditMovieModal = ({ movie, onClose, onSave }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Movie</h2>
                <MovieForm newMovie={movie} handleInputChange={() => {}} handlePosterUrlChange={() => {}} handleAddOrUpdateMovie={onSave} isEditing={true} />
                <button className="close-btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default EditMovieModal;
