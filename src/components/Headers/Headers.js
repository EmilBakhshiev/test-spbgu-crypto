import React from 'react'

function Headers({onSignOut}) {
    return (
        <header className='header'>
           <button className='header__menu-btn'></button>
           <h1 className='header__title'>testSYSTEM</h1>
           <input className='header__search-input' type='text' placeholder='Поиск'></input>
           <select className='header__departaments-list'>
               <option className='header__departaments-item'>Подразделения</option>
               <option className='header__departaments-item'>Департамент</option>
               <option className='header__departaments-item'>Отдел</option>
               <option className='header__departaments-item'>Бухгалтерия</option>
           </select>
           <nav className='header__nav'>
               <ul className='header__nav-list'>
                   <li className='header__nav-item element-hover'>Система</li>
                   <li className='header__nav-item element-hover'>Первая система</li>
                   <li className='header__nav-item element-hover'>Вторая система</li>
                   <li className='header__nav-item element-hover'>Третья система</li>
                   <li className='header__nav-item element-hover'>Система</li>
               </ul>
           </nav>
           <button className='header__btn element-hover'>Помощь</button>
           <button className='header__btn element-hover'  onClick={onSignOut}>Выйти</button>
        </header>
    )
}

export default Headers
