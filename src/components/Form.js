import { useFormik } from "formik";
import * as Yup from 'yup';

const Form = ({ availableTimes, submitForm, dispatch }) => {

  const handleChange = (e) => {
    formik.handleChange(e);
    if (e.target.name === "date") {
      dispatch(e.target.value);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      guests: 1,
      occasion: "",
      time: "",
    },
    onSubmit: (values) => { 
      submitForm(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3,"Must be at least 3 characters").required('Required'),
      email: Yup.string().email("Invalid email address").required("Required"),
      date: Yup.date().required('Required'),
      guests: Yup.number().min(1, "Must be at least 1").max(10, "Cannot exceed 10").required('Required'),
      occasion: Yup.string().required('Required'),
      time: Yup.string().required('Required'),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row g-4">
        <div className="col-12">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="col-md-6">
          <label htmlFor="res-date" className="form-label">Choose date</label>
          <input
            type="date"
            id="res-date"
            className="form-control"
            {...formik.getFieldProps('date')}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="error">{formik.errors.date}</div>
          ) : null}
        </div>

        <div className="col-md-6">
          <label htmlFor="res-time" className="form-label">Choose time</label>
          <select
            id="res-time"
            className="form-select"
            {...formik.getFieldProps('time')}
          >
            {availableTimes.availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {formik.touched.time && formik.errors.time ? (
            <div className="error">{formik.errors.time}</div>
          ) : null}
        </div>

        <div className="col-md-6">
          <label htmlFor="guests" className="form-label">Number of guests</label>
          <input
            type="number"
            id="guests"
            className="form-control"
            {...formik.getFieldProps('guests')}
          />
          {formik.touched.guests && formik.errors.guests ? (
            <div className="error">{formik.errors.guests}</div>
          ) : null}
        </div>

        <div className="col-md-6">
          <label htmlFor="occasion" className="form-label">Occasion</label>
          <select
            id="occasion"
            className="form-select"
            {...formik.getFieldProps('occasion')}
          >
            <option value="">Select Occassion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
            <div className="error">{formik.errors.occasion}</div>
          ) : null}
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
  );
};

export default Form;
