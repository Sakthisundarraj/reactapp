import React from 'react'
import './AboutUs.css'
import ui from '../../assets/ui.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'
const AboutUs = () => {
  return (
    <div className='aboutusSection' id='aboutus'>
        <div className='container'>
            <div className='aboutBody'>
                <div className='col'>
                    <div className='aboutTitle'>
                        <h3>What i do</h3>
                    </div>
                    <div className='aboutMe'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corporis quisquam. Nesciunt velit cumque placeat debitis quas. Facere excepturi rerum nesciunt debitis repellat? Debitis sapiente consequatur delectus commodi quam cum!</p>
                    </div>
                    <div className='card1'>
                        <figure className='a1'>
                            <img src={ui}></img>
                        </figure>
                        <div className='ui'>
                            <h4 className='uiTitle'>UI/UX Design</h4>
                            <p className='uiAbout'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi magnam quasi ratione ex, aliquid quia alias beatae corrupti. Quia quam deleniti veritatis incidunt laborum beatae quibusdam cumque suscipit excepturi.</p>
                        </div>
                    </div>
                    <div className='card1'>
                        <figure className='a1'>
                            <img src={a2}></img>
                        </figure>
                        <div className='ui'>
                            <h4 className='uiTitle'>UI/UX Design</h4>
                            <p className='uiAbout'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi magnam quasi ratione ex, aliquid quia alias beatae corrupti. Quia quam deleniti veritatis incidunt laborum beatae quibusdam cumque suscipit excepturi.</p>
                        </div>
                    </div>
                    <div className='card1'>
                        <figure className='a1'>
                            <img src={a3}></img>
                        </figure>
                        <div className='ui'>
                            <h4 className='uiTitle'>UI/UX Design</h4>
                            <p className='uiAbout'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi magnam quasi ratione ex, aliquid quia alias beatae corrupti. Quia quam deleniti veritatis incidunt laborum beatae quibusdam cumque suscipit excepturi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutUs
