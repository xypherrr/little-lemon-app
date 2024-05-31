import confirmIcon from "../images/confirm-icon.svg"
import { Link } from "react-router-dom";

const ConfirmedBookings = () => {
  return (
    <section className="confirmed justify-content-center d-flex">
      <div className="row container justify-content-center">
        <div className="col-lg-8 col-sm-12 text-center confirm-box">
          <img src={confirmIcon} alt="confirmed" className="mb-4"/>
      <h2 className="text-center mb-4">Your booking has been confirmed !</h2>
      <p className="mb-4">We look forward to welcoming you.</p>
      <Link to="/" className="btn btn-warning">Go to Home</Link>

        </div>
      </div>
    </section>
  )
}

export default ConfirmedBookings
