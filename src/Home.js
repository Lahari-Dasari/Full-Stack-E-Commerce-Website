import React from 'react'
import './Home.css'
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>
        <div className='home_row'>
            <Product
            id="10829332"
            title = "Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB, 256GB Storage)"
            price = {1199.99}
            rating = {4}
            image = "https://m.media-amazon.com/images/I/61imYpK33qL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
        </div>
        <div className='home_row'>
          <Product 
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product 
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product 
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className='home_row'>
          <Product 
          id="23445931"
          title="Max Women's Embroidered Yoke A-line Dress"
          price={34.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71rJIOyfZCL._UY879_.jpg"
          />
          <Product 
          id="4903851"
          title="Lenovo Legion 5 AMD Ryzen 7 5800H 15.6 inch WQHD IPS Gaming Laptop (16GB/512GB SSD/6GB NVIDIA RTX 3060/165Hz/Windows 11"
          price={1366.10}
          rating={5}
          image="https://m.media-amazon.com/images/I/611aDZwqERL._SL1500_.jpg"
          />
          <Product 
          id="3254354341"
          title="Adidas Men's Adivat M Running Shoes"
          price={44.69}
          rating={4}
          image="https://m.media-amazon.com/images/I/71kfO4VXDFL._UX625_.jpg"
          />
        </div>
        <div className='home_row'>
          <Product 
          id="12321346"
          title="Sunon Wood Bookcase Freestanding 3 Shelf Book Case Adjustable Layers Bookshelf for Home and Office, 3-Layers"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61dY3lir6BL._SL1500_.jpg"
          />
          <Product 
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
        </div>
        <div className='home_row'>
          <Product 
          id="4903852"
          title="Safari Pentagon Trolley Bag Set, Small and Medium Suitcase for Travel, 4 Wheel 55 & 65 cm Cyan Luggage for Men and Women, Polypropylene Hard Side Cabin and Check in Bag"
          price={55.12}
          rating={4}
          image="https://m.media-amazon.com/images/I/61c6qHgsmwL._UX679_.jpg"
          />
          <Product 
          id="23445932"
          title="ZAVERI PEARLS Gold Tone Traditional Temple Choker Necklace Set For Women-ZPFK8983"
          price={75.45}
          rating={4}
          image="https://m.media-amazon.com/images/I/71yqFrgW3QL._UY575_.jpg"
          />
          <Product 
          id="3254354342"
          title="Fogg Long-Lasting Fresh & Soothing Fragrance Impressio Scent For Men, Eau De Parfum, 100ml"
          price={30.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/81M9ZNu2IiL._SX425_.jpg"
          />
        </div>
        <div className='home_row'>
          <Product 
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product 
          id="90829338"
          title="Sunon Gaming Chair with Premium PU Leather | 3 Years Warranty | Adjustable Neck & Lumbar Pillow | 2D Adjustable Armrests & Heavy Duty Nylon Base"
          price={208.11}
          rating={4}
          image="https://m.media-amazon.com/images/I/71lrW4rWFwL._SL1500_.jpg"
          />
        </div>
        <div className='home_contact'>
          <img className='home_image1' src='https://www.irpcommerce.com/IRPSupport/ExtraContent/example-bottom-nav-new.jpg' alt=''/>
        </div>
        </div>
    </div>
  )
}

export default Home