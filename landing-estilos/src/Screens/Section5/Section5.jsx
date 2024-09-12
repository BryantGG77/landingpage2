import './Section5.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselSection5 from '../../components/CarouselSection5/CarouselSection5'
export default function Section5() {
    return <>
        <section className='app-main-section5'>

            <section className='section5-info-relative'>
                <figure className='section5-info-relative-img-container'>
                    <img className='section5-info-relative-img' src="./src/assets/corporativo.png" alt="Personas corporativas sentadas dialogando" />
                </figure>
                <div className='section5-info-relative-info-container'>
                    <CarouselSection5 />
                </div>
            </section>
        </section>
    </>

}
