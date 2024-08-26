import './Header.css'

export default function Header() {
    return (
        <section className='app'>
            <header className="app-header">
                <nav className='app-header-nav'>
                    <ul className='nav-list'>
                        <li className='nav-item'><a className='nav-item-a' href="#">Demos</a></li>
                        <li className='nav-item'><a className='nav-item-a' href="#">Pages</a></li>
                        <li className='nav-item'><a className='nav-item-a' href="#">Projects</a></li>
                        <img src="/src/assets/logo-dark.png" alt="Logo Sandbox" className='nav-logo' />
                        <li className='nav-item'><a className='nav-item-a' href="#">Blog</a></li>
                        <li className='nav-item'><a className='nav-item-a' href="#">Blocks</a></li>
                        <li className='nav-item'><a className='nav-item-a' href="#">Documentation</a></li>
                    </ul>
                </nav>
            </header>


            <section className="app-main-section1">

                <section className="container-section1">
                    <img className='section1-img' src="/src/assets/image.png" alt="resaltando easier" />
                    <h1 className="section1-h1">We bring solutions to make life easier</h1>
                    <p className="section1-p">We are a creative company that focuses on long
                        term relationships with customers.</p>
                    <a className='section1-button' href="https://www.youtube.com/@elbrashitan" target="_blank">Read More</a>

                </section>
            </section>

        </section>
    )
}
