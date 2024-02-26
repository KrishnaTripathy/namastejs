import React, { useState, ChangeEvent, FormEvent } from "react";
import "../styles/bookappointment.css";
// import axios from "axios";
import swal from "sweetalert2";

interface BookAppointmentProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ele: {
    userId: {
      _id: string;
      firstname: string;
      lastname: string;
    };
  };
}

const BookAppointment: React.FC<BookAppointmentProps> = ({
  setModalOpen,
  ele,
}) => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    phoneno: "",
    date: "",
    time: "",
    sessionmode: "video",
    paymentmode: "",
  });

  const [notification, setNotification] = useState<{
    type: "success" | "error" | "loading";
    message: string;
  } | null>(null);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const bookAppointment = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Validation: Check if date and time are not empty
    if (
      !formDetails.name ||
      !formDetails.phoneno ||
      !formDetails.date ||
      !formDetails.time  ||
      !formDetails.sessionmode ||
      !formDetails.paymentmode
    ) {
      setNotification({
        type: "error",
        message: "Please provide the information",
      });
      return;
    }

    try {
      const doctorName = `${ele?.userId?.firstname} ${ele?.userId?.lastname}`;

      // Set loading notification
      setNotification({
        type: "loading",
        message: "Booking appointment...",
      });

      // Simulate API call
      // const response = await axios.post("/appointment/bookappointment", {
      //   doctorId: ele?.userId?._id,
      //   name: formDetails.name,
      //   phoneno: formDetails.phoneno,
      //   date: formDetails.date,
      //   time: formDetails.time,
      //   doctorname: doctorName,
      // });

      // Simulated success response
      // const successResponse = {
      //   data: "Appointment booked successfully",
      // };

      // Set success notification
      setNotification({
        type: "success",
        message: "Appointment booked successfully",
      });

      // Show confirmation
      setShowConfirmation(true);
    } catch (error) {
      // Set error notification
      setNotification({
        type: "error",
        message: "Unable to book appointment",
      });
      console.error("Error booking appointment:", error);
    }
  };

  // const confirmBooking = () => {
  //   // Add logic for confirming the booking
  //   // For now, you can just close the modal
  //   setModalOpen(false);
  // };
  const confirmBooking = () => {
    // Add logic for confirming the booking
    // For now, you can just close the modal

    // Show success message using SweetAlert2
    swal.fire({
      title: "Good job!",
      text: "You successfully booked the appointment!",
      icon: "success",
      
      
    });

    setModalOpen(false);
  };



  return (
    <div className="modal flex-center">
      <div className="modal__content">
        <h2 className="page-heading">Book Appointment</h2>
        <div className="close-btn" onClick={() => setModalOpen(false)}>
          Close
        </div>
        <div className="register-container flex-center book">
          {!showConfirmation ? (
            <form className="register-form">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                value={formDetails.name}
                onChange={inputChange}
              />
              <label htmlFor="phoneno" className="form-label">
                Phoneno:
              </label>
              <input
                type="tel"
                name="phoneno"
                id="phoneno"
                className="form-input"
                value={formDetails.phoneno}
                onChange={inputChange}
              />
              <label htmlFor="date" className="form-label">
                Date:
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-input"
                value={formDetails.date}
                onChange={inputChange}
              />
              <label htmlFor="time" className="form-label">
                Time:
              </label>
              <input
                type="time"
                name="time"
                id="time"
                className="form-input"
                value={formDetails.time}
                onChange={inputChange}
              />
               <label className="form-label">Session Mode:</label>
              <div className="session-mode">
                <label>
                  <input
                    type="radio"
                    name="sessionmode"
                    value="video"
                    checked={formDetails.sessionmode === "video"}
                    onChange={inputChange}
                  />
                  Video
                </label>
                <label>
                  <input
                    type="radio"
                    name="sessionmode"
                    value="call"
                    checked={formDetails.sessionmode === "call"}
                    onChange={inputChange}
                  />
                  Call
                </label>
              </div>
              <label className="form-label">Payment Mode:</label>
              <div className="payment-mode">
                <label>
                  <input
                    type="radio"
                    name="paymentmode"
                    value="credit-card"
                    checked={formDetails.paymentmode === "credit-card"}
                    onChange={inputChange}
                  />
                  Credit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentmode"
                    value="upi"
                    checked={formDetails.paymentmode === "upi"}
                    onChange={inputChange}
                  />
                  UPI
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentmode"
                    value="cash"
                    checked={formDetails.paymentmode === "cash"}
                    onChange={inputChange}
                  />
                  Cash
                </label>
              </div>

              <button
                type="submit"
                className="btn form-btn"
                onClick={bookAppointment}
              >
                Book
              </button>
            </form>
          ) : (
            <div className="confirmation-form">
              <p>Appointment Details:</p>
              <p>Name: {formDetails.name}</p>
              <p>Phoneno: {formDetails.phoneno}</p>
              <p>Date: {formDetails.date}</p>
              <p>Time: {formDetails.time}</p>
              <p>Session mode: {formDetails.sessionmode}</p>
              <p>Payment mode: {formDetails.paymentmode}</p>
              <button
                className="btn form-btn"
                onClick={confirmBooking}
              >
                Confirm
              </button>
              
            </div>
          )}
        </div>
        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
