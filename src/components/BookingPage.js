import Form from "./Form";

const BookingPage = ({availableTimes, dispatch, submitForm}) => {

    

   
  return (
    <>
      <section className="booking">
        <div className="container row justify-content-center">
          <div className="col-lg-10 col-md-12 col-sm-12 form-container">
            <h2 className="text-center">Table Reservation Form</h2>
           <Form availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
