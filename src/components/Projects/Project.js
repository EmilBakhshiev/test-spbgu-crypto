import React from 'react'
import CardLarge from '../Cards/CardLarge/CardLarge'

function Project() {
    return (
        <section className='project'>
            <h2 className='title-section'>Проекты <sup className='title__index'>20</sup></h2> 
            <div className='project__wrapper'>
                <CardLarge></CardLarge>
                <CardLarge></CardLarge>
                <CardLarge></CardLarge>
            </div>
        </section>
    )
}

export default Project
