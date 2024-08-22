import { useState } from 'react';
import CardSection3 from '../../components/CardSection3/CardSection3';
import ButtonLearnMore from '../../components/ButtonLearnMore/ButtonLearnMore';
import './Section3.css';

export default function Section3() {


    const infoComponent = (
        <>
            <div className='container-section3-img'>
                <img className='section3-info-img' src="./src/assets/se5.png" alt="" />
            </div>

            <div className='container-section3-info'>
                <h3 className='section3-info-h3'>Collect Ideas</h3>
                <p className='section3-info-p'>Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.</p>
                <div className='section3-info-list'>
                    <p className='section3-info-list-p'><img className='section3-info-list-img' src="./src/assets/Item.png" alt="" />Aenean eu leo quam. Pellentesque ornare.</p>
                    <p className='section3-info-list-p'><img className='section3-info-list-img' src="./src/assets/Item.png" alt="" />Nullam quis risus eget urna mollis ornare.</p>
                    <p className='section3-info-list-p'><img className='section3-info-list-img' src="./src/assets/Item.png" alt="" />Donec id elit non mi porta gravida at eget.</p>
                </div>
                <ButtonLearnMore bgcolor='#E668B3' texto='Learn More' />
            </div>

        </>
    );

    const infoComponent2 = (
        <>
            <div className='container-section3-img'>
                <img className='section3-info-img' src="./src/assets/se5.png" alt="" />
            </div>

            <div className='container-section3-info'>
                <h3 className='section3-info-h3'>Data Analysis</h3>
                <p className='section3-info-p'>Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.</p>

                <ButtonLearnMore bgcolor='#A07CC5' texto='Learn More' />
            </div>
        </>
    );
    const infoComponent3 = (
        <>
            <div className='container-section3-img'>
                <img className='section3-info-img' src="./src/assets/se5.png" alt="" />
            </div>

            <div className='container-section3-info'>
                <h3 className='section3-info-h3'>Finalize Product</h3>
                <p className='section3-info-p'>Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at soluta doloribus. Alias sapiente veniam cum quidem, fuga iusto laboriosam mollitia quaerat error consectetur suscipit voluptatum illo quis minus tenetur.</p>

                <ButtonLearnMore bgcolor='#45C4A0' texto='Learn More' />
            </div>
        </>
    );

    const [infoText, setInfoText] = useState(infoComponent);
    return (
        <section className='app-main-section3'>
            <section className='section3-title'>
                <img className='section3-title-img' src="/src/assets/image.png" alt="resaltando easier" />
                <p className="section3-title-p">WHY CHOOSE SANDBOX?</p>
                <div className='container-section3-title-h1'>
                    <h2 className="section3-title-h1">Here are a few reasons why our customers choose Sandbox.</h2>
                </div>
            </section>

            <section className='section3-cards'>
                <CardSection3 setInfoText={() => setInfoText(infoComponent)} image={"/src/assets/SVG 5.png"} alt="Idea grupal" title="Collect Ideas" paragraph={"Duis mollis commodo luctus cursus commodo tortor mauris."} />
                <CardSection3 setInfoText={() => setInfoText(infoComponent2)} image={"/src/assets/SVG 6.png"} alt="Torta de analisis" title="Data Analysis" paragraph={"Vivamus sagittis lacus augue fusce dapibus tellus nibh."} />
                <CardSection3 setInfoText={() => setInfoText(infoComponent3)} image={"/src/assets/SVG 4.png"} alt="Paquete" title="Finalize Product" paragraph={"Vestibulum ligula porta felis maecenas faucibus mollis."} />
            </section>

            <section className='section3-info'>
                {infoText}
            </section>
        </section>
    );
}