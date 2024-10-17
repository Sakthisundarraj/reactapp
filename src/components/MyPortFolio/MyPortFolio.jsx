import React from 'react'
import './MyPortFolio.css'
import p1 from '../../assets/p1.webp'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.jpg'
const MyPortFolio = () => {
  return (
    <div className='myportfolioSection' id='portfolio'>
        <div className='container'>
            <div className='portfolioBody'>
                <div className='col'>
                <div className='portTitle'>
                        <h3>What i do</h3>
                        </div>
                    <div className='portDetails'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corporis quisquam. Nesciunt velit cumque placeat debitis quas. Facere excepturi rerum nesciunt debitis repellat? Debitis sapiente consequatur delectus commodi quam cum!</p>
                    </div>
                </div>
                <div className='cardContainer'>
                    <figure className='card'>
                        <img src={p1}></img>
                    </figure>
                    <figure className='card'>
                        <img src={p2}></img>
                    </figure>
                    <figure className='card'>
                        <img src={p3}></img>
                    </figure>
                    <figure className='card'>
                        <img src={p1}></img>
                    </figure>
                    <figure className='card'>
                        <img src={p2}></img>
                    </figure>
                    <figure className='card'>
                        <img src={p3}></img>
                    </figure>
                </div>
                <button className='portButton'>See More</button>
            </div>
        </div>
      
    </div>
  )
}

export default MyPortFolio
