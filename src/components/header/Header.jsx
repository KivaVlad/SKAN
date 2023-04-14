import React, { useState } from 'react';
import css from './header.css';
import logo from '../../images/logo.png'

const Header = () => {
    let [activeState, setActiveState] = useState(false);
  return (
    <>
        <div className='container'>
            <div className='header_list'>
                <img src={logo} />
                <div className={`header_nav ${activeState && 'header_nav_active'}`}>
                    <div className='header_nav_items'>
                      <a href='#!'>Главная</a>
                      <a href='#!'>Тарифы</a>
                      <a href='#!'>FAQ</a>
                    </div>
                    <div className='header_nav_form'>
                      <a href='#!'>Зарегистрироваться</a>
                      <button className='header_button'>Войти</button>
                    </div>
                    <div onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_close'>
                      <span className='header_nav_close_line'></span>
                      <span className='header_nav_close_line'></span>
                    </div>
                </div>
                <div className='header_form'>
                    <a href='#!'>Зарегистрироваться</a>
                    <button className='header_button'>Войти</button>
                </div>
                <div onClick={ () => setActiveState(activeState = !activeState) } className='header_burger'>
                  <span className='burger_line burger_line_first'></span>
                  <span className='burger_line burger_line_second'></span>
                  <span className='burger_line burger_line_third'></span>
                </div>
            </div>
        </div>
      </>
  )
}

export default Header
