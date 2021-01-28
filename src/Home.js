import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Banner" />
            
                <div className='home__row'>
                    
                    <Product 
                    title ='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback' 
                    price={11.95} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" 
                    rating={5} />

                    <Product 
                     id="2"
                     title="Kernwood kmix stand mixer for Baking"
                     price={165.99}
                     rating={2}
                     image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/KMH754CR/KMX754CR_Picasso-KM-Glass-Bowl-BMK-CMYK_800x600.png"
                     
                    />
                </div>

                <div className='home__row'>
                    <Product
                    id="3"
                    title="XIAOMI Smartwatch Amazfit GTS Lava Grey Gri"
                    price={99.99}
                    rating={3}
                    image="https://static.quickmobile.ro/cs-photos/products/original/smartwatch-amazfit-gts-lava-grey-gri_10066765_1_1585896055.jpg"
                    
                    />
                    <Product
                    id="4"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={4}
                    image="https://www.worldshop.eu/medias/sys_master/h5d/he5/8895597838366.png"
                    />
                    <Product 
                     id="5"
                     title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                     price={598.99}
                     rating={5}
                     image="https://www.wesolveall.com/wp-content/uploads/2020/07/Apple-iPad-Pro-12.9-2020__0031_Background.png"
                    />
                </div>

                <div className='home__row'>
                     <Product 
                     title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                     price={199.99}
                     rating={6}
                     image="https://assets-prd.ignimgs.com/2020/11/30/image-2020-11-30-150206-1606748564844.png"
                     />
                </div>
            
            </div>
        </div>
    )
}

export default Home
