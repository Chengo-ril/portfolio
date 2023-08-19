import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a
            href='https://twitter.com/chengoril?t=_AWGPFpVyXKxYneT-qaA3w&s=09'
            target='blank'
            rel='noreferrer' 
          >
            <BsTwitter />
          </a>
        </div>
        <div>
          <a
            href='https://www.facebook.com/osineye.olufunso'
            target='_blank'
            rel="noreferrer"
          >
            <FaFacebook  />
          </a>
        </div>
        <div>
        <a
            href='https://www.instagram.com/chengoril/'
            target='_blank'
            rel="noreferrer"
          >
            <BsInstagram />
        </a>
        </div>
    </div>
  )
}

export default SocialMedia