import './ButtonLearnMore.css'

export default function ButtonLearnMore({ texto, bgcolor }) {
    return (
        <a style={{ backgroundColor: bgcolor }} className='section3-info-button' href="#">{texto}</a>
    )
}
