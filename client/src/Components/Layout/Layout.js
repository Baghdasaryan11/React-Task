import React, { useEffect } from 'react';
import './Layout.css'

import Header from '../Header';
import Advertisement from '../Advertisement';
import FeaturedProducts from '../FeaturedProducts';
import LatestProducts from '../LatestProducts';

import Categoreis from '../Categoreis';
import BestSealers from '../BestSealers';
import Tags from '../Tags';

function Layout({ products }) {




    return (


        <div className="App">
            <Header />
            <Advertisement />
            <main>
                <div>
                    <FeaturedProducts products={products} />
                    <LatestProducts products={products} />

                </div>
                <aside>
                    <Categoreis />
                    <br />
                    <BestSealers products={products} />
                    <br />
                    <Tags />
                </aside>

            </main>

        </div>

    );
}

export default Layout;
