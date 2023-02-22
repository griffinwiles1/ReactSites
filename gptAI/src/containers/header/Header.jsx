import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Help Adolescents Cheat in School with GPT-3 OpenAI</h1>
        <p>
          The Technology Wizards have finally managed to breathe sentience into the life they created with shiny metals & crystals nearly 80 years ago. This new breakthrough 
          technology's primary use is with children trying to get out of school-work, and employees trying to get out of doing work. I see no downsides here, please consider investing.
        </p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address'></input>
          <button type="button">Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={ people } alt="people" />
          <p>3+ people have requested access in the last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ ai } alt="ai" />
      </div>
      <div className='gpt3__header-image__text'>
        <p>*Modeled after the the hit "Blue Man Group" to give user's a false sense of security</p>
      </div>
      <div className='gpt3__header-image__warning'>
        <p>Yikes, you should resize the page if you want to see the whole site</p> <br />
        <p>This is just for testing purposes</p>
      </div>
    </div>
  )
}

export default Header