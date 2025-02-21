import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-text">
        <h1>Share Comments</h1>
        <h2>If you have any comments, ideas, or concerns about anything, get in touch through our contact form or the email below:</h2>
        <h3>kaneko.yoshiki@ais.at</h3>
      </div>
      <div className="contact-col">
        <form>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Name *' required />
          <label>Email</label>
          <input type="email" name='email' placeholder='Email *' required />
          <label>Message</label>
          <textarea name="message" rows="6" placeholder='Message *' required></textarea>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

const Story = () => {
  return (
    <div className='contact'>
      <div className="contact-text">
        <h1>Share Story</h1>
        <h2>If you have any personal stories you want to share to this website, send them through our contact form</h2>
      </div>
      <div className="contact-col">
        <form>
          <label>Story</label>
          <textarea name="story" rows="6" placeholder='Story *' required></textarea>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div> 
    </div>
  )
}

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState('1')

  const tabs = [
    {
      id: 1,
      tabTitle: 'Comment',
      content: <Contact/>
    },
    {
      id: 2,
      tabTitle: 'Story',
      content: <Story/>
    }
  ]

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id)
  }

  return (
    <div>
      <div className='tabs'>
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className='content'>
        {tabs.map((tab, i) => (
          currentTab === `${tab.id}` && (
            <div key={i}>
              <p className='title'>{tab.title}</p>
              <p>{tab.content}</p>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default Tabs