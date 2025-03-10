import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from '../../assets/images/mg1.png'
import Image from '../../assets/images/mg2.png'
import './Home.css';

const Home = () => {
    return (
        <main className="main">
            <Header />
            <section className="home" id="home">
                <div className="home-container bd-container bd-grid">
                    <div className="home-data">
                        <h1 className="home-title">Marmitaria Vó Lia</h1>
                        <h2 className="home-subtitle">Comida artesanal, feita com carinho e o autêntico tempero de vó.</h2>
                        <a href="https://api.whatsapp.com/send/?phone=5511930491258&text&type=phone_number&app_absent=0"
                            className="button">Garantir a minha</a>
                    </div>

                    <img src={Banner} className="home-img" />

                </div>
            </section>

            <section class="about section bd-container" id="about">
                <div class="about-container  bd-grid">
                    <div class="about-data">
                        <span class="section-subtitle about-initial">Sobre nós</span>
                        <h2 class="section-title about-initial">O melhor sabor <br/> caseiro</h2>
                        <p class="about-description">Cozinhamos a melhor comida caseira da região, com aquele tempero de vó
                            que você adora! Pratos deliciosos, atendimento acolhedor e o melhor preço. Venha provar!</p>
                        <a href="#" class="button">Explorar nossa história</a>
                    </div>

                    <img src={Image} className="home-img" />

                </div>
            </section>


            <section className="menu section bd-container" id="menu">
                <span className="section-subtitle">Cardápio</span>
                <h2 className="section-title">Menu da semana</h2>

                <div className="menu-container bd-grid">
                    <div className="menu-content">
                        <img src={Banner} alt="" className="menu-img" />
                        <h3 className="menu-name">Filézinho de frango sassami</h3>
                        <span className="menu-detail">Arroz, feijão, legumes salteados e salada. (Serve 1 pessoa)</span>
                        <span className="menu-preci">R$27.90</span>
                        <a href="#" className="button menu-button" onclick="enviarPedido(event, 'Filézinho de frango (sassami)')">
                            <i className='bx bx-cart-alt'></i>
                        </a>
                    </div>

                    <div className="menu-content">
                        <img src={Banner} alt="" className="menu-img" />
                        <h3 className="menu-name">Contra filé acebolado </h3>
                        <span className="menu-detail">Arroz, feijão, farofa da casa e batata frita. (Serve 1 pessoa)</span>
                        <span className="menu-preci">R$27.90</span>
                        <a href="#" className="button menu-button" onclick="enviarPedido(event, 'Contrá filé acebolado')">
                            <i className='bx bx-cart-alt'></i>
                        </a>
                    </div>
                    <div className="menu-content">
                        <img src={Banner} alt="" className="menu-img" />
                        <h3 className="menu-name">Toscana com chimichurri (Serve 1 pessoa)</h3>
                        <span className="menu-detail">Arroz, couve e salada do dia. (Serve 1 pessoa)</span>
                        <span className="menu-preci">R$27.90</span>
                        <a href="#" className="button menu-button" onclick="enviarPedido(event, 'Toscana com chimichurri')">
                            <i className='bx bx-cart-alt'></i>
                        </a>
                    </div>
                </div>
            </section>

            <section className="contact section bd-container" id="contact">
                <div className="contact-container bd-grid">
                    <div className="contact-data">
                        <span className="section-subtitle contact-initial">Contato</span>
                        <h2 className="section-title contact-initial">Bora pedir?</h2>
                        <p className="contact-description">Se você deseja fazer um pedido na nossa marmitaria, entre em contato
                            conosco! Nosso whatsapp está disponível no horário comercial para atender você rapidamente.</p>
                    </div>

                    <div className="contact-button">
                        <a href="https://api.whatsapp.com/send/?phone=5511930491258&text&type=phone_number&app_absent=0" target="_blank" className="button">Fale conosco agora</a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};
export default Home;
