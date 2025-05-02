import { useEffect } from 'react';
import './Questions.css';
import Image from '../../assets/images/mg2.png';

const Questions = () => {
    useEffect(() => {
        const accordionItems = document.querySelectorAll('.question-accordion-item');

        const toggleItem = (item) => {
            const accordionContent = item.querySelector('.question-accordion-content');

            if (item.classList.contains('accordion-open')) {
                accordionContent.removeAttribute('style');
                item.classList.remove('accordion-open');
            } else {
                accordionContent.style.height = accordionContent.scrollHeight + 'px';
                item.classList.add('accordion-open');
            }
        };

        accordionItems.forEach((item) => {
            const accordionHeader = item.querySelector('.question-accordion-header');

            accordionHeader.addEventListener('click', () => {
                const openItem = document.querySelector('.accordion-open');

                toggleItem(item);

                if (openItem && openItem !== item) {
                    toggleItem(openItem);
                }
            });
        });

        return () => {
            accordionItems.forEach((item) => {
                const accordionHeader = item.querySelector('.question-accordion-header');
                accordionHeader.replaceWith(accordionHeader.cloneNode(true));
            });
        };
    }, []);

    return (
        <section className="question section bd-container" id="question">
            <div className="question-container bd-grid">
                <div className="question-images">
                    <div className="question-orbe"></div>
                    <div className="question-img">
                        <img src={Image} className="about-img" alt="Perguntas frequentes" />
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
                        {[
                            {
                                icon: 'bx bx-basket',
                                title: 'Como faço meu pedido?',
                                description: 'Você pode pedir pelo WhatsApp clicando no botão "Fazer meu pedido"/"Chamar no WhatsApp", ou diretamente pelo nosso perfil no iFood.'
                            },
                            {
                                icon: 'bx bx-time-five',
                                title: 'Qual o horário de funcionamento?',
                                description: 'Atendemos de segunda a sábado, das 10h às 15h. Aos domingos, somente por encomenda antecipada.'
                            },
                            {
                                icon: 'bx bx-money',
                                title: 'Quais formas de pagamento vocês aceitam?',
                                description: 'Aceitamos Pix, dinheiro, cartão de débito e crédito. No iFood, siga as opções da plataforma.'
                            },
                            {
                                icon: 'bx bx-package',
                                title: 'Vocês fazem entrega?',
                                description: 'Sim! Entregamos em diversos bairros da Zona Leste de São Paulo. Consulte a taxa via WhatsApp.'
                            }
                        ].map((item, index) => (
                            <div className="question-accordion-item" key={index}>
                                <header className="question-accordion-header">
                                    <i className={`${item.icon} question-accordion-icon`}></i>
                                    <h3 className="question-accordion-title">{item.title}</h3>
                                    <div className="question-accordion-arrow">
                                        <i className='bx bxs-down-arrow'></i>
                                    </div>
                                </header>
                                <div className="question-accordion-content">
                                    <p className="question-accordion-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;
