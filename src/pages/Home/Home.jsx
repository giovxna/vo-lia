import Footer from '../../components/Footer/Footer';
import Questions from '../../components/FAQ/Questions';
import Header from '../../components/Header/Header';
import Banner from '../../assets/images/mg1.png'
import Image from '../../assets/images/mg4.png'
import Plate from '../../assets/images/mg3.png'
import './Home.css';

const Home = () => {
    return (
        <main className="main">
            <Header />
            <section className="home" id="home">
                <div className="home-container bd-container bd-grid">
                    <div className="home-data">
                        <h1 className="home-title">Marmitaria Vó Lia</h1>
                        <h2 className="home-subtitle">Comida de verdade, feita com amor e aquele temperinho de vó que acolhe o coração.</h2>
                        <a href="https://api.whatsapp.com/send/?phone=5511930491258&text&type=phone_number&app_absent=0"
                            className="button">Fazer meu pedido</a>
                    </div>

                    <img src={Banner} className="home-img" />

                </div>
            </section>

            <section class="about section bd-container" id="about">
                <div class="about-container bd-grid">
                    <div class="about-data">
                        <span class="section-subtitle about-initial">Sobre nós</span>
                        <h2 class="section-title about-initial">O verdadeiro sabor da comida feita com amor</h2>
                        <p class="about-description">Na Marmitaria Vó Lia, cada prato é preparado como se fosse para a nossa própria família. Com ingredientes frescos, tempero na medida e um carinho que você sente no primeiro garfo. Sabor de casa, conforto de colo de vó.</p>
                        <a href="#" class="button">Conheça nossa história</a>
                    </div>

                    <img src={Image} className="about-img" />

                </div>
            </section>
            <section class="menu section bd-container" id="menu">
                <span class="section-subtitle">Cardápio</span>
                <h2 class="section-title">Menu da semana</h2>

                <div class="menu-container bd-grid">
                    <div class="menu-content">
                        <img src={Plate} alt="" class="menu-img" />
                        <h3 class="menu-name">Filé de frango grelhado</h3>
                        <span class="menu-detail">Acompanhado de arroz branco, feijão fresquinho, legumes salteados e salada.</span>
                        <span class="menu-preci">R$27.90</span>
                        <a href="#" class="button menu-button" onclick="enviarPedido(event, 'Filézinho de frango (sassami)')">
                            <i class='bx bx-cart-alt'></i>
                        </a>
                    </div>

                    <div class="menu-content">
                        <img src={Plate} alt="" class="menu-img" />
                        <h3 class="menu-name">Contra-filé acebolado</h3>
                        <span class="menu-detail">Com arroz soltinho, feijão caseiro, farofa crocante e batata frita douradinha.</span>
                        <span class="menu-preci">R$27.90</span>
                        <a href="#" class="button menu-button" onclick="enviarPedido(event, 'Contrá filé acebolado')">
                            <i class='bx bx-cart-alt'></i>
                        </a>
                    </div>
                    <div class="menu-content">
                        <img src={Plate} alt="" class="menu-img" />
                        <h3 class="menu-name">Linguiça toscana com chimichurri</h3>
                        <span class="menu-detail">Servida com arroz branco, couve refogada e salada fresca do dia.</span>
                        <span class="menu-preci">R$27.90</span>
                        <a href="#" class="button menu-button" onclick="enviarPedido(event, 'Toscana com chimichurri')">
                            <i class='bx bx-cart-alt'></i>
                        </a>
                    </div>
                </div>
            </section>

            <Questions />
            <Footer />
        </main>
    );
};
export default Home;
