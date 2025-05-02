import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer section bd-container">
            <div className="footer-container bd-grid">
                <div className="footer-content">
                    <a href="#" className="footer-logo">Vó Lia</a>
                    <span className="footer-description">Comida artesanal com tempero de vó.</span>
                    <div>
                        <a href="https://api.whatsapp.com/send/?phone=5511930491258&text&type=phone_number&app_absent=0" className="footer-social" target="_blank" rel="noreferrer">
                            <i className='bx bxl-whatsapp'></i>
                        </a>
                        <a href="https://www.instagram.com/marmitariavolia/" className="footer-social" target="_blank" rel="noreferrer">
                            <i className='bx bxl-instagram'></i>
                        </a>
                    </div>
                </div>

                <div className="footer-content">
                    <h3 className="footer-title">O que oferecemos</h3>
                    <ul>
                        <li><a href="#" className="footer-link">Entrega rápida</a></li>
                        <li><a href="#" className="footer-link">Pratos executivos</a></li>
                        <li><a href="#" className="footer-link">Marmitas individuais</a></li>
                        <li><a href="#" className="footer-link">Refeições para eventos</a></li>
                    </ul>
                </div>

                <div className="footer-content">
                    <h3 className="footer-title">Peça agora</h3>
                    <ul>
                        <li><a href="https://api.whatsapp.com/send/?phone=5511930491258&text&type=phone_number&app_absent=0" className="footer-link" target="_blank" rel="noreferrer">Chamar no WhatsApp</a></li>
                        <li><a href="https://www.ifood.com.br/delivery/sao-paulo-sp/marmitaria-vo-lia-chacara-belenzinho/8830de62-8c30-4953-ae04-871e43403f11" className="footer-link" target="_blank" rel="noreferrer">Pedir pelo iFood</a></li>
                    </ul>
                </div>

                <div className="footer-content">
                    <h3 className="footer-title">Nosso endereço</h3>
                    <ul>
                        <li>Av. Sapopemba – São Paulo/SP</li>
                        <li>(11) 93049-1258</li>
                    </ul>
                </div>
            </div>

            <p className="footer-copy">&#169; 2025 Marmitaria Vó Lia. Todos os direitos reservados.</p>
        </footer>


    )
};
export default Footer;
