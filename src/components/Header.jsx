import arrow from '../assets/arrow.png'

function Header() {
    return (
        <div>
            <section className="title__section">
                <h1 className="title">
                    ÅKA TÅG
                </h1>
            </section>
            <section className="dest__container">
                <span className="dest__left">
                    <h3 className="dest__text">
                        STOCKHOLM
                    </h3>
                    <p className="time__text">
                        10:30
                    </p>
                </span>
                <img src={arrow} className="header__arrow">

                </img>
                <span className="dest__right">
                    <h3 className="dest__text">
                        GÖTEBORG
                    </h3>
                    <p className="time__text">
                        14:45
                    </p>
                </span>
            </section>
        </div>
    )
}

export default Header
