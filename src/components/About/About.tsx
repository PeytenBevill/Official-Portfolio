import React from 'react'
import './about.css'

const About: React.FC = () => {
  return (
    <div className='about-body'>
      <p className='about-text'>Hello, my name is Peyten. I'm a recent graduate of Austin Coding Academy, where I have spent 9 months learning full stack web development. I was drawn to coding and web development because I was looking for ways to express my creativity. Being someone who isn't naturally gifted at drawing or your typical "creative outputs", it took me a while to figure out the best way to express myself. I seriously enjoyed my time with Austin Coding Academy and I have been growing my skills even more for about 2 years.</p>
      <img className='about-pic' src="/secondPic.jpeg" alt="Me on Lady Bird Lake" />
      <p className='about-text'>I was born and raised in Austin Texas. I currently live in South Austin, but I grew up a little further south in a small town called Buda. Being in South Austin means I'm close to lots of hiking trails and outdoor activities. I love the Lady Bird Lake area. If I'm not on my paddle board or in a kayak on Lady Bird Lake, I'm probably hiking around it! I also frequent Mckinney Falls State Park with my dog for a nice hike. Above is a picture of me on my paddle board!</p>
    </div>
  )
}

export default About