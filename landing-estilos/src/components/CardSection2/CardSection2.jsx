import './CardSection2.css'
export default function CardSection2({ image, title, alt, parraph, href, color }) {
    return (
        <div className='cardSection2'>
            <img src={image} alt={alt} />
            <h3 className='cardSection2-h3'>{title}</h3>
            <p className='cardSection2-p'>{parraph}</p>
            <a className='cardSection2-a' href={href} target='_blank' style={{ color: color }}>Learn More<i className='bx bx-right-arrow-alt cardSection2-i'></i></a>
        </div>
    )
}

