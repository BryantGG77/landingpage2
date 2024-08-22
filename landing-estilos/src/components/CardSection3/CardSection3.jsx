import './CardSection3.css';

export default function CardSection3({ setInfoText, image, alt, title, paragraph }) {
    return (
        <div onClick={setInfoText} className='CardSection3'>
            <img src={image} alt={alt} className='CardSection3-img' />
            <div>
                <h3 className='CardSection3-h3'>{title}</h3>
                <p className='CardSection3-p'>{paragraph}</p>
            </div>
        </div>
    );
}