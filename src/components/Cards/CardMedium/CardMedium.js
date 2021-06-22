import React from 'react';

function CardMedium({text, title, status, time}) {
  return (
    <div className={`card card_size_medium ${status==='fail' ? 'card_status_fail' : ''}`}>
      <div className='card__header-wrapper'>
        <h3 className={`card__title ${status==='success' ? 'card__title_status_success': ''} ${status==='fail' ? 'card__title_status_fail': ''}`}>{title}</h3>
        <p className='card__time'>{time}</p>
      </div>
      <p className='card__text card__text_size_medium'>
       {text}
      </p>
      {status==='fail' ? <p className='card__text card__text_size_medium'>
      Изменен статус на <span className='card__text-span-fail'>Отклонен</span>
      </p> : ''}

      {status==='success' ? <p className='card__text card__text_size_medium'>
      Изменен статус на <span className='card__text-span-success'>Одобрен</span>
      </p> : ''}
      {status==='' ? <button className='card__btn element-hover'>Смотреть</button> : ''}
    </div>
  );
}

export default CardMedium;
