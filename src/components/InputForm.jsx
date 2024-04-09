

function InputForm({ handleClass, handleTickets, handleTitle, handleFirstName, handleSurname, handleApprove, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>

            <section className="checkbox__row">
                <aside>

                    <input onChange={handleClass} type="radio" name="class" id="firstClass" value="1st" />
                    <label htmlFor="firstClass" className="form__text"> 1:a klass</label>
                </aside>
                <aside>
                    <input onChange={handleClass} type="radio" name="class" id="secondClass" value="2nd" />
                    <label htmlFor="secondClass" className="form__text"> 2:a klass
                    </label>
                </aside>
            </section>

            <section className="input__row">
                <div>
                    <label htmlFor="numberofTickets" className="form__text">Antal biljetter:</label>

                    <input onChange={handleTickets} type="number" name="tickets" />

                </div>
                <div className="form-group">
                    <label htmlFor="title">Titel</label>
                    <select onChange={handleTitle} name="title" id="title">
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                    </select>
                </div>
            </section>

            <section className="name__container">
                <article className="input__name">
                    <label htmlFor="firstName" className="form__text">Förnamn: </label>
                    <input onChange={handleFirstName} id="firstName" type="text" name="firstName" />

                </article>
                <article className="input__name">
                    <label htmlFor="surname" className="form__text">Efternamn: </label>
                    <input onChange={handleSurname} type="text" name="lastName" />

                </article>
            </section>

            <article className="villkor__container">
                <input onChange={handleApprove} id="approve" type="checkbox" name="terms" value="accepted" />
                <label htmlFor="approve" className="form__text"> Godkänner Villkoren</label>
            </article>

            <article>
                <button className="boka__btn form__text" value="submit" type="submit">Boka Biljetter</button>
            </article>
        </form >
    )
}

export default InputForm
