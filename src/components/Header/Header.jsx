import Footer from '../../components/Footer/Footer';
import './Header.css';

const Header = () => {
    return (
        
        <header class="header" id="header">
            <nav class="nav bd-container">
                <a href="#" class="nav-logo">Vó Lia</a>
            
                <div class="nav-menu" id="nav-menu">
                    <ul class="nav-list">
                        <li class="nav-item"><a href="#home" class="nav-link active-link">Home</a></li>
                        <li class="nav-item"><a href="#about" class="nav-link">Sobre</a></li>
                        <li class="nav-item"><a href="#menu" class="nav-link">Menu</a></li>
                        <li class="nav-item"><a href="#contact" class="nav-link">Contato</a></li>
                    </ul>
                </div>

                <div class="nav-toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

    )
};
export default Header;
