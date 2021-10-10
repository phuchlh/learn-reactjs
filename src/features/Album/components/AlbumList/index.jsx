import PropTypes from 'prop-types';
import React from 'react';
import Album from '../Album';
import './style.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
    return (
        <ul className="album-list">
            {albumList.map(album => (
                <li key={album.id}>
                    {/* do album ở đây render phức tạp, cho nên tạo 1 cái component album để tiện cho việc style */}
                    <Album album={album}/> 
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;