import Footer from '../../components/Footer/Footer';
import './Header.css';

const Header = () => {
    return (
        
        <header className="header" id="header">
            <nav className="nav bd-container">
                <a href="#" className="nav-logo">Vó Lia</a>
            
                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home" className="nav-link active-link">Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">Sobre</a></li>
                        <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contato</a></li>
                    </ul>
                </div>

                <div className="nav-toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>

    )
};
export default Header;
