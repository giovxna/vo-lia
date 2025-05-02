import './Questions.css'
import Image from '../../assets/images/mg2.png'

const Questions = () => {
    return (
        <section className="question section" id="question">
            <div className="question-container container grid bd-container bd-grid">
                <div className="question-images">
                    <div className="question-orbe"></div>
                    <div className="question-img">
                        <img src={Image} className="about-img" />
                    </div>
                </div>

                <div className="question-content">
                    <div className="question-data">
                        <span className="section-subtitle">Dúvidas frequentes</span>
                        <h2 className="section-title">Perguntas que ouvimos por aqui<span>.</span></h2>
                        <p className="question-description">
                            Reunimos as perguntas mais comuns para te ajudar a pedir com mais praticidade e confiança!
                        </p>
                    </div>

                    <div className="question-accordion">

                        <div className="question-accordion-item">
                            <header className="question-accordion-header">
                                <i className='bx bx-basket question-accordion-icon'></i>
                                <h3 className="question-accordion-title">
                                    Como faço meu pedido?
                                </h3>
                                <div className="question-accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>
                            <div className="question-accordion-content">
                                <p className="question-accordion-description">
                                    Você pode pedir pelo WhatsApp clicando no botão "Chamar no WhatsApp", ou diretamente pelo nosso perfil no iFood.
                                </p>
                            </div>
                        </div>

                        <div className="question-accordion-item">
                            <header className="question-accordion-header">
                                <i className='bx bx-time-five question-accordion-icon'></i>
                                <h3 className="question-accordion-title">
                                    Qual o horário de funcionamento?
                                </h3>
                                <div className="question-accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>
                            <div className="question-accordion-content">
                                <p className="question-accordion-description">
                                    Atendemos de segunda a sábado, das 10h às 15h. Aos domingos, somente por encomenda antecipada.
                                </p>
                            </div>
                        </div>

                        <div className="question-accordion-item">
                            <header className="question-accordion-header">
                                <i className='bx bx-money question-accordion-icon'></i>
                                <h3 className="question-accordion-title">
                                    Quais formas de pagamento vocês aceitam?
                                </h3>
                                <div className="question-accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>
                            <div className="question-accordion-content">
                                <p className="question-accordion-description">
                                    Aceitamos Pix, dinheiro, cartão de débito e crédito. No iFood, siga as opções da plataforma.
                                </p>
                            </div>
                        </div>

                        <div className="question-accordion-item">
                            <header className="question-accordion-header">
                                <i className='bx bx-package question-accordion-icon'></i>
                                <h3 className="question-accordion-title">
                                    Vocês fazem entrega?
                                </h3>
                                <div className="question-accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>
                            <div className="question-accordion-content">
                                <p className="question-accordion-description">
                                    Sim! Entregamos em diversos bairros da Zona Leste de São Paulo. Consulte a taxa via WhatsApp.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
};
export default Questions;
