import React from 'react'
import './HeroSection.css'
import heroimg from '../../assets/heroimg.jpg'
import logo from    '../../assets/logo.jpg'
import {Link} from 'react-scroll';
const HeroSection = () => {
  return (
    <div className='herosection' id='herosection'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 heroLeft'>
                    <div className='heroGreet'>
                        <p>Hello!</p>
                    </div>
                    <div className='heroName'>
                        <h3>I am Sakthi</h3>
                    </div>
                    <div className='heroJob'>
                        <h3>Web Designer</h3>
                    </div>
                    <div className='heroabout'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sequi pariatur ab veniam. Esse ex quis voluptatibus reiciendis provident asperiores quod eum cupiditate voluptates maxime voluptas ad rerum, aperiam aut!</p>
                    </div>
                    <div className='heroButton'>
                        <Link><button>Hire me!</button></Link>
                    </div>
                </div>
                <div className='col-6 heroRight'>
                    <figure className='heroImage'>
                        <img src={heroimg}></img>
                    </figure>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
