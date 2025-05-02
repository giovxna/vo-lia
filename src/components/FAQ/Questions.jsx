import './Questions.css'

const Questions = () => {
    return (
        <section className="question section" id="question">
            <div className="question-container container grid">
                <div className="question-images">
                    <div className="question-orbe"></div>
                    <div className="question-img">
                        {/* <img src="assets/img/question.jpg" alt=""> */}
                    </div>
                </div>
                <div className="question-content">
                    <div className="question-data">
                        <span className="section-subtitle">Our question</span>
                        <h2 className="section-title">question We Give To You<span>.</span></h2>
                        <p className="question-description">
                            We always ready to help by providing the best service for you.
                            We believe a good place to live can make your life better.
                        </p>
                    </div>
                    <div className="question-accordion">
                        <div className="question-accordion-item">
                            <header className="question-accordion-header">
                                <i className='bx bxs-shield-x question-accordion-icon'></i>
                                <h3 className="question-accordion-title">
                                    Best interest rates on the market
                                </h3>
                                <div className="question-accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>
                            <div className="question-accordion-content">
                                <p className="question-accordion-description">
                                    Price we provides is the best for you,
                                    we guarantee no price changes on your property due
                                    to various unexpected costs that may come.
                                </p>
                            </div>
                        </div>

                        <div className="question-accordion-item">
                            <header className="question-accordion-header">
                                <i className='bx bxs-x-square question-accordion-icon'></i>
                                <h3 className="question-accordion-title">
                                    Prevent unstable prices
                                </h3>
                                <div className="question-accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>
                            <div className="question-accordion-content">
                                <p className="question-accordion-description">
                                    Price we provides is the best for you,
                                    we guarantee no price changes on your property due
                                    to various unexpected costs that may come.
                                </p>
                            </div>
                        </div>

                        <div className="question-accordion-item">
                            <header className="question-accordion-header">
                                <i className='bx bx-bar-chart-square question-accordion-icon'></i>
                                <h3 className="question-accordion-title">
                                    Best prices on the market
                                </h3>
                                <div className="question-accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>
                            <div className="question-accordion-content">
                                <p className="question-accordion-description">
                                    Price we provides is the best for you,
                                    we guarantee no price changes on your property due
                                    to various unexpected costs that may come.
                                </p>
                            </div>
                        </div>

                        <div className="question-accordion-item">
                            <header className="question-accordion-header">
                                <i className='bx bxs-check-square question-accordion-icon'></i>
                                <h3 className="question-accordion-title">
                                    Security of your data
                                </h3>
                                <div className="question-accordion-arrow">
                                    <i className='bx bxs-down-arrow'></i>
                                </div>
                            </header>
                            <div className="question-accordion-content">
                                <p className="question-accordion-description">
                                    Price we provides is the best for you,
                                    we guarantee no price changes on your property due
                                    to various unexpected costs that may come.
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
