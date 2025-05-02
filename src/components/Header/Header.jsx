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
                        <li className="nav-item"><a href="#question" className="nav-link">Dúvidas</a></li>
                        <li className="nav-item">
                            <a
                                href="https://api.whatsapp.com/send/?phone=5511930491258&text&type=phone_number&app_absent=0"
                                className="nav-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#4C6F28', textDecoration: 'underline' }}
                            >
                                Pedir agora
                            </a>
                        </li>

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
