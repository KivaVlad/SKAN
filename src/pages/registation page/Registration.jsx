import React, { Component } from 'react';
import css from './registration.css';
import registrImage from '../../images/Characters.jpg';
import LoginForm from '../../components/registration form/LoginForm';
import lockImg from '../../images/lock.png';


export default class Registration extends Component {
  render() {
    return (
      <>
        <div className='container'>
            <div className='registration_content'>
                <div className='registration_text'>
                    <h1 className='title registration_title'>
                        Для оформления подписки на тариф, необходимо авторизоваться
                    </h1>
                      <img className='registration_image' src={registrImage} />
                </div>
                <div className='registration_form'>
                  <img className='lock_img' src={lockImg} />
                  <LoginForm />
                </div>
                  <img className='registration_img_mobile' src={registrImage} />
            </div>
        </div>
      </>
    )
  }
}
