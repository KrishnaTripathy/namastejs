import "../styles/doctorcard.css";
import React, { useState } from "react";
import BookAppointment from "../components/BookAppointment";

interface DoctorCardProps {
  ele: {
    userId: {
      _id: string;
      pic: string;
      firstname: string;
      lastname: string;
      mobile: string;
    };
    specialization: string;
    experience: number;
    fees: number;
    duration: string;
  };
}

const DoctorCard: React.FC<DoctorCardProps> = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(true);
  };

  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        <img className="img-fluid rounded" width="200"
          src={
            ele?.userId?.pic ||
            "../assets/images/users/user-11.jpg"
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name">
        Dr. {ele?.userId?.firstname + " " + ele?.userId?.lastname}
      </h3>
      <p className="specialization">
        <strong>Specialization: </strong>
        {ele?.specialization}
      </p>
      <p className="experience">
        <strong>Experience: </strong>
        {ele?.experience}yrs
      </p>
      <p className="fees">
        <strong>Fees per consultation: </strong>$ {ele?.fees}
      </p>
      <p className="fees">
        <strong>Duration: </strong>{ele?.duration}
      </p>
      
      <p className="phone">
        <strong>Phone: </strong>
        {ele?.userId?.mobile}
      </p>
      <button className="btn appointment-btn" onClick={handleModal}>
        Book Appointment
      </button>
      {modalOpen && <BookAppointment setModalOpen={setModalOpen} ele={ele} />}
    </div>
  );
};

export default DoctorCard;
