import './Footer.css'

const Footer = () => {
    return (
        <footer class="footer section bd-container">
            <div class="footer-container bd-grid">
                <div class="footer-content">
                    <a href="#" class="footer-logo">Vó Lia</a>
                    <span class="footer-description">Comida artesanal com tempero de vó!</span>
                    <div>
                        <a href="https://api.whatsapp.com/send/?phone=5511930491258&text&type=phone_number&app_absent=0" class="footer-social" target="_blank"><i class='bx bxl-whatsapp'></i></a>
                        <a href="https://www.instagram.com/marmitariavolia/" class="footer-social"><i class='bx bxl-instagram' target="_blank"></i></a>
                    </div>
                </div>

                <div class="footer-content">
                    <h3 class="footer-title">Serviços</h3>
                    <ul>
                        <li><a href="#" class="footer-link">Delivery</a></li>
                        <li><a href="#" class="footer-link">Pratos comerciais</a></li>
                        <li><a href="#" class="footer-link">Marmitas</a></li>
                        <li><a href="#" class="footer-link">Eventos</a></li>
                    </ul>
                </div>

                <div class="footer-content">
                    <h3 class="footer-title">Contato</h3>
                    <ul>
                        <li><a href="https://api.whatsapp.com/send/?phone=5511930491258&text&type=phone_number&app_absent=0" class="footer-link" target="_blank">Fale conosco</a></li>
                        <li><a href="#" class="footer-link">Política de Privacidade</a></li>
                        <li><a href="#" class="footer-link">Termos de Serviço</a></li>
                    </ul>
                </div>

                <div class="footer-content">
                    <h3 class="footer-title">Endereço</h3>
                    <ul>
                        <li>Av. Sapopemba, São Paulo</li>
                        <li>+ (55) 11 93049-1258</li>
                        <li><a href="https://www.ifood.com.br/delivery/sao-paulo-sp/marmitaria-vo-lia-chacara-belenzinho/8830de62-8c30-4953-ae04-871e43403f11" target="_blank"wwwwwwwwwwwwwds>IFood Marmitaria Vó Lia</a></li>
                    </ul>
                </div>
            </div>

            <p class="footer-copy">&#169; 2024 Vó Lia.</p>
        </footer>

    )
};
export default Footer;
