import React from 'react';
import choseme from '../../../images/choseme1.jpg'

const ChoseUs = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center text-primary py-3'>Why Choose Us</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <h3>1. This is heading element</h3>
                    <p>
                        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <h3>2. This is heading element</h3>
                    <p>
                        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <h3>3. This is heading element</h3>
                    <p>
                        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div className="col-md-4">
                    <img src={choseme} alt="" className='w-75' />
                </div>
                <div className="col-md-4">
                    <h3>4. This is heading element</h3>
                    <p>
                        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <h3>5. This is heading element</h3>
                    <p>
                        I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ChoseUs;