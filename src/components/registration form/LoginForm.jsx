import React, { Component } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import goodleImg from './images/google.png';
import facebookImg from './images/fb.png';
import yandexImg from './images/yandex.png';
import css from './loginform.css';

const LoginForm = () => {
  
    return (
      <div className='registration_container'>
        <div className='form_header'>
            <a href='#!' className='form_header_links form_header_links_active'>Войти</a>
            <a href='#!' className='form_header_links'>Зарегистрироваться</a>
        </div>
        <div className='form'>
            <h3 className='form_text'>Логин или номер телефона:</h3>
            <input type="text" />
            <h3 className='form_text'>Пароль:</h3>
            <input type="password" />
            <button className='form_button'>Войти</button>
            <a href='#!' className='form_restore_pass'>Восстановить пароль</a>
        </div>
        <div className='form_links'>
            <h3 className='form_text'>Войти через:</h3>
            <div className='form_links_img'>
                <img src={goodleImg} />
                <img src={facebookImg} />
                <img src={yandexImg} />
            </div>
        </div>
      </div>
    );
}

export default LoginForm
