import React from 'react'
import './CardSection1.css'
export default function CardSection1({ img, title, alt, parraph, href, color }) {
    return (
        <div className='CardSection1'>
            <img src={img} alt={alt} />
            <h3 className='cardSection1-h3'>{title}</h3>
            <p className='cardSection1-p'>{parraph}</p>
            <a className='cardSection1-a' href={href} target='_blank' style={{ color: color }}>Learn More<i className='bx bx-right-arrow-alt cardSection1-i'></i></a>
        </div>
    )
}

