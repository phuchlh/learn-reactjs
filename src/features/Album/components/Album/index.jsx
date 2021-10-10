import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album__thumb">
                <img src={album.thumbURL} alt={album.name} />
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default Album;