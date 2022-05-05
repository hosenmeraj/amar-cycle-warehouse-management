import React from 'react';

const Item = ({ item }) => {
    const { title, thumbnailUrl } = item
    return (
        <div>
            <div className="card">
                <img src={thumbnailUrl} className="card-img-top " alt="..." style={{ width: "50px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-primary'>Stock Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;