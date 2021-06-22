import React from 'react';
import CardMedium from '../Cards/CardMedium/CardMedium';

function News({notification, amount}) {
  return (
    <section className='news'>
      <div className='news__header'>
        <h2 className='news__title'>
          Новости <sup className='title__index'>{amount}</sup>
        </h2>
        <button className='news__btn-close element-hover'>закрыть все</button>
      </div>
      {notification.map((item)=>{
          return (<CardMedium key={item.id} text={item.text} title={item.title} status={item.status} time={item.time} />)
      })}

    </section>
  );
}

export default News;
