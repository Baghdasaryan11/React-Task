import React from 'react';
import './Advertisement.css';


const Advertisement = () => {

    return (
        <section className={'advertisement'}>
            <div>
                <h4>2014 Chuck Taylor ALL STARS</h4>
                <p>NOW IN STOCK! <br />
                    FREE SHIPPING <br />
                </p>
                <span>STARTING AT $24.99</span>
                <button>SHOW ME MORE</button>
            </div>
            <div>
                <h4>2014 Chuck Taylor ALL STARS</h4>
                <p className='desc'>NOW IN STOCK! <br />
                    FREE SHIPPING <br />
                </p>
                <span>STARTING AT $24.99</span>
                <button>SHOW ME MORE</button>
            </div>
        </section>
    )
};

export default Advertisement;