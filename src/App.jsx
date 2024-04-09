import Header from "./components/Header";
import InputForm from "./components/InputForm";
import { useState, useEffect } from "react";

function App() {

  const [booking, setBooking] = useState({})
  const [travelClass, setTravelClass] = useState('')
  const [tickets, setTickets] = useState(0)
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [approved, setApproved] = useState(false)

  const handleClass = (event) => {
    console.log(event.target.value);
    setTravelClass(event.target.value)
  }

  const handleTickets = (event) => {
    console.log(event.target.value);
    setTickets(event.target.value)
  }

  const handleTitle = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value)
  }

  const handleFirstName = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value)
  }

  const handleSurname = (event) => {
    console.log(event.target.value);
    setSurname(event.target.value)
  }

  const handleApprove = (event) => {
    console.log(event.target.checked);
    setApproved(!approved)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (approved) {
      const bookingObject = {
        travelClass: travelClass,
        tickets: tickets,
        title: title,
        firstName: firstName,
        surname: surname
      }
      setBooking(bookingObject)
    } else {
      console.log('Du måste godkänna villkoren!');
    }
  }

  useEffect(() => {
    console.log('Booking:', booking);
  }, [booking])

  return (
    <div className="app">
      <Header />
      <InputForm
        handleSubmit={handleSubmit}
        handleClass={handleClass}
        handleTickets={handleTickets}
        handleTitle={handleTitle}
        handleFirstName={handleFirstName}
        handleSurname={handleSurname}
        handleApprove={handleApprove}
      />
    </div>
  )
}

export default App
