import React from 'react'


function Gallery(props) {
    return (
        <div>
            <img src={props.objectImg} alt={props.title} style={
                {
                    marginTop: '20px',
                    marginLeft: '25%',
                    width: '400px',
                    height: '400px'
                }
            } />
            <p>{props.artist}</p>

        </div>
    )
}

export default Gallery