import './Section6.css'
import CarouselSection6 from '../../components/CarouselSection6/CarouselSection6'
export default function Section6() {
    return (
        <section className='app-main-section6'>
            <img className='section6-info-img' src="./src/assets/image.png" alt="resaltando creative" />
            <p className='section6-info-p'>LATEST PROJECTS</p>
            <div className='container-section6-h2'>
                <h2 className='section6-info-h2'>Check out some of our awesome projects with creative ideas and great design.</h2>
            </div>
            <CarouselSection6 />
        </section>
    )
}
