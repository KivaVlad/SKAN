import React, { Component } from 'react';
import footerLogo from '../../images/footer_logo.png';
import css from './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
            <div className='footer_item'>
                <img src={footerLogo} />
                <div className='footer_text'>
                <p>г. Москва, Цветной б-р, 40
                +7 495 771 21 11
                info@skan.ru</p>
                <p>by <a href='https://github.com/KivaVlad'>@kivavlad</a> 2023</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
