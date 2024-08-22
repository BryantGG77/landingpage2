import CardSection2 from "../../components/CardSection2/CardSection2";
import './Section2.css';

export default function Section2() {
    return (
        <section className='app-main-section2'>
            <CardSection2 image="/src/assets/SVG.png" alt="libreria" title="Content Marketing" parraph="Nulla vitae elit libero, a
                  pharetra augue. Donec id elit
                  non mi porta gravida at eget
                  metus cras justo." href="#" color={'#E668B3'} />
            <CardSection2 image="/src/assets/SVG 2.png" alt="Sociedad" title="Social Engagement" parraph="Nulla vitae elit libero, a
                  pharetra augue. Donec id elit
                  non mi porta gravida at eget
                  metus cras justo." href="#" color={'#A07CC5'} />
            <CardSection2 image="/src/assets/SVG 3.png" alt="Bombillo idea" title="Identity & Branding" parraph="Nulla vitae elit libero, a
                  pharetra augue. Donec id elit
                  non mi porta gravida at eget
                  metus cras justo." href="#" color={'#F78B77'} />
            <CardSection2 image="/src/assets/SVG 4.png" alt="Paquete" title="Product Design" parraph="Nulla vitae elit libero, a
                  pharetra augue. Donec id elit
                  non mi porta gravida at eget
                  metus cras justo." href="#" color={'#45C4A0'} />
        </section>
    )
}
