import Header from "./Header";
import Contacts from "./Contacts";


function mainBtnClickHandler() {
    document.getElementById('second_section')!.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}

function Hero() {
    return (
        <section className="first_section">
            <div className="container">	
                <Header />
                <div className="first_section__content">
                    <div>
                        <h1 className="title main_title"><span>Вторая</span> версия<br />моего сайта</h1>
                        <p>Адаптив будет когда-нибудь!</p>
                        <button className="button main_button" onClick={mainBtnClickHandler}>Посмотреть работы <i className="fas fa-arrow-down"></i></button>
                    </div>
                    <Contacts />
                </div>
            </div>
        </section>
    )
}

export default Hero;