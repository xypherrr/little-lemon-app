import { useState } from "react";

const Form = ({ availableTimes, submitForm, dispatch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState("");

  const handleChange = (e) => {
    setDate(e);
    dispatch(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(e);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row g-4">

        <div className="col-12">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="col-md-6">
            <label htmlFor="res-date" className="form-label">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => handleChange(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="form-control"
            />
          </div>


          <div className="col-md-6">
            <label htmlFor="res-time" className="form-label">Choose time</label>
            <select
              id="res-time "
              className="form-select"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            >
              {availableTimes.availableTimes.map((e) => {
                return <option key={e}>{e}</option>;
              })}
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="guests" className="form-label">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="occasion" className="form-label">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="form-select"
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <div className="col-12">
          <div className="d-grid">
            <input
              type="submit"
              value="Make Your reservation"
              className="btn btn-success"
            />
          </div>
          </div>



        </div>
        

        

        
         
       

     
        
       

       
        
    
      </form>
    </>
  );
};

export default Form;
