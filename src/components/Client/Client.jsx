import React from 'react'
import './Client.css'
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
const Client = () => {
  return (
    <div className='clientSection' id='clients'>
      <div className='container'>
        <div className='clientBody'>
          <div className='col'>
            <div className='clientTitle'>
              <h3>My Clients</h3>
            </div>
            <div className='clientDetails'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sapiente odit voluptatibus architecto optio maiores, vel officia corrupti laboriosam blanditiis officiis, similique voluptates aut cum reprehenderit et quam, esse sit.</p>
            </div>
          </div>
          <div className='clientImage'>
            <figure className='clinetlogo'>
              <img src={c1}></img>
            </figure>
            <figure className='clinetlogo'>
              <img src={c2}></img>
            </figure>
            <figure className='clinetlogo'>
              <img src={c3}></img>
            </figure>
            <figure className='clinetlogo'>
              <img src={c4}></img>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client
