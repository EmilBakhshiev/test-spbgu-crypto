import React from 'react'

function CardLarge({title, subtitle}) {
    return (
        <div className='card card_size_large'>
            <div className='card__header-wrapper'>
        <h3 className='card__title card__title_size_large'>Lorem ipsum dolor sit amet</h3>
      </div>
      <p className='card__subtitle'>Lorem ipsum dolor sit amet</p>
      <div className='card__data-wrapper'>
          <p className='data__info'>1 млн</p>
      </div>
      <button className='card__btn element-hover'>Подробнее</button>
        </div>
    )
}

export default CardLarge
