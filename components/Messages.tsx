import React from "react";
import { Card, Dropdown, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";

//components
import MessageList from "./MessageList";
import MessageItem from "./MessageItem";

import profileImg from "../assets/images/users/user-2.jpg";
import avatar1 from "../assets/images/users/user-3.jpg";
import avatar2 from "../assets/images/users/user-4.jpg";
import avatar3 from "../assets/images/users/user-5.jpg";
import avatar6 from "../assets/images/users/user-6.jpg";
import classNames from "classnames";
import { FaClock } from "react-icons/fa";
// import Calendar from "../pages/dashboard/Dashboard8/Calendar"
import search from "../assets/images/search.png";
import HyperDatepicker from "../components/Datepicker";
import TimeSlotSelection from "../pages/dashboard/Dashboard8/TimeSlotSelection";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  integrity="sha384-ezfn3a8fQOwR7OJK6n77bi/BtZc0xBw1OuR3x4X1U5L5zuBRFgE6OMQ6M5PjZIe"
/>;
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>;

type Doctor = {
  id: number;
  avatar: string;
  doctorname: string;
  field: string;
  experience: string;
  education: string;
  duration: string;
  fee: string;
  location: string;
};

const Messages = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      avatar: profileImg,
      doctorname: "Dr. Lakshmi K",
      field: "Psychiatrist",
      experience: "42+ years experience",
      education: "MD,Dip.Cardio,FCCP",
      duration: "15 mins",
      fee: "$40",
      location: "Apollo Multispeciality",
    },
    {
      id: 2,
      avatar: avatar1,
      doctorname: "Dr. Lakshmi K",
      field: "Psychiatrist",
      experience: "42+ years experience",
      education: "MD,Dip.Cardio,FCCP",
      duration: "15 mins",
      fee: "$40",
      location: "Apollo Multispeciality",
    },
    {
      id: 3,
      avatar: avatar2,
      doctorname: "Dr. Lakshmi K",
      field: "Psychiatrist",
      experience: "42+ years experience",
      education: "MD,Dip.Cardio,FCCP",
      duration: "15 mins",
      fee: "$40",
      location: "Apollo Multispeciality",
    },
    {
      id: 4,
      avatar: avatar3,
      doctorname: "Dr. Lakshmi K",
      field: "Psychiatrist",
      experience: "42+ years experience",
      education: "MD,Dip.Cardio,FCCP",
      duration: "15 mins",
      fee: "$40",
      location: "Apollo Multispeciality",
    },
    {
      id: 5,
      avatar: avatar6,
      doctorname: "Dr. Lakshmi K",
      field: "Psychiatrist",
      experience: "42+ years experience",
      education: "MD,Dip.Cardio,FCCP",
      duration: "15 mins",
      fee: "$40",
      location: "Apollo Multispeciality",
    },
    {
      id: 6,
      avatar: avatar1,
      doctorname: "Dr. Lakshmi K",
      field: "Psychiatrist",
      experience: "42+ years experience",
      education: "MD,Dip.Cardio,FCCP",
      duration: "15 mins",
      fee: "$40",
      location: "Apollo Multispeciality",
    },
    {
      id: 7,
      avatar: avatar2,
      doctorname: "Dr. Lakshmi K",
      field: "Psychiatrist",
      experience: "42+ years experience",
      education: "MD,Dip.Cardio,FCCP",
      duration: "15 mins",
      fee: "$40",
      location: "Apollo Multispeciality",
    },
  ];
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showAppointmentDetails, setShowAppointmentDetails] = useState(false);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [activeTimeSlot, setActiveTimeSlot] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowAppointmentDetails(true);
  };
  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };
  const handleButtonClick = (selectedDateTime: string) => {
    console.log(`Button clicked for date and time: ${selectedDateTime}`);
  };
  const handleTimeSlotClick = (selectedTime: string) => {
    setActiveTimeSlot(selectedTime);
  };
  const morningTimes = ["09:00 AM", "10:00 AM", "11:00 AM", "11.45 AM"];

  const afternoonTimes = ["01:00 PM", "02:00 PM", "03:00 PM"];

  const eveningTimes = ["04:30 PM", "05:30 PM", "06:30 PM"];

  return (
    <div className="d-flex align-items-center justify-content-center mt-6 ">
      <div className="w-100" style={{ marginRight: "-35px" }}>
        <Row>
          <Col xl={4}>
            <Card className="w-100">
              <Card.Body>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <img
                      src={search}
                      alt="Search Icon"
                      className="search-icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Doctors"
                    aria-label="Search Doctors"
                    aria-describedby="search-icon"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  {searchTerm && (
                    <div className="row mt-3">
                      <div className="col-12">
                        <div className="search-result">{searchTerm}</div>
                      </div>
                    </div>
                  )}
                </div>
                <h4 className="header-title mb-3" style={{ color: "black" }}>
                  Available Doctors
                </h4>

                <MessageList>
                  {(doctors || [])
                    .filter((doctor) =>
                      doctor.doctorname
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((doctor, i) => (
                      <div
                        key={i}
                        className="clickable-card"
                        onClick={() => handleBookAppointment(doctor)}
                      >
                        <MessageItem key={i}>
                          <div className="inbox-item-img">
                            <img
                              src={doctor.avatar}
                              className=" "
                              alt=""
                              style={{
                                borderRadius: "10px",
                                width: "30px",
                                height: "30px",
                              }}
                            />
                          </div>
                          <p
                            style={{ color: "black", fontWeight: "bold" }}
                            className="inbox-item-author"
                          >
                            {doctor.doctorname}
                          </p>
                          <p
                            style={{ color: "black" }}
                            className="inbox-item-text"
                          >
                            {doctor.field}
                          </p>
                          <div className="mb-3">
                            <p className="inbox-item-text">
                              <strong style={{ color: "black" }}>
                                <i
                                  className="fas fa-user-md"
                                  style={{
                                    color: "#006daf",
                                    backgroundColor: "lightblue",
                                    borderRadius: "50%",
                                    width: "30px",
                                    height: "30px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "0px",
                                    position: "relative",
                                    marginBottom: "-20px",
                                    marginTop: "0px",
                                    display: "flex",
                                    marginRight: "400px",
                                  }}
                                ></i>{" "}
                              </strong>{" "}
                              <span
                                style={{
                                  marginLeft: "55px",
                                  color: "black",
                                  fontWeight: "bold",
                                }}
                              >
                                Experience:
                              </span>
                              <span>{doctor.experience}</span>
                            </p>
                            <p className="inbox-item-text">
                              <strong style={{ color: "black" }}>
                                <i
                                  className="fas fa-graduation-cap"
                                  style={{
                                    color: "#006daf",
                                    backgroundColor: "lightblue",
                                    borderRadius: "50%",
                                    width: "30px",
                                    height: "30px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "0px",

                                    marginBottom: "-20px",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                ></i>{" "}
                              </strong>{" "}
                              <span
                                style={{
                                  marginLeft: "55px",
                                  color: "black",
                                  fontWeight: "bold",
                                }}
                              >
                                Education:
                              </span>
                              <span> {doctor.education}</span>
                            </p>
                            <p className="inbox-item-text">
                              <strong style={{ color: "black" }}>
                                <i
                                  className="fas fa-clock"
                                  style={{
                                    color: "#006daf",
                                    backgroundColor: "lightblue",
                                    borderRadius: "50%",
                                    width: "30px",
                                    height: "30px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "0px",

                                    marginBottom: "-20px",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                ></i>{" "}
                              </strong>{" "}
                              <span
                                style={{
                                  marginLeft: "55px",
                                  color: "black",
                                  fontWeight: "bold",
                                }}
                              >
                                Duration:
                              </span>
                              <span style={{ marginLeft: "10px" }}>
                                {doctor.duration}
                              </span>
                            </p>
                            <p className="inbox-item-text">
                              <strong style={{ color: "black" }}>
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{
                                    color: "#006daf",
                                    backgroundColor: "lightblue",
                                    borderRadius: "50%",
                                    width: "30px",
                                    height: "30px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "0px",

                                    marginBottom: "-20px",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                ></i>{" "}
                              </strong>{" "}
                              <span
                                style={{
                                  marginLeft: "55px",
                                  color: "black",
                                  fontWeight: "bold",
                                }}
                              >
                                Fee:
                              </span>
                              <span style={{ marginLeft: "40px" }}>
                                {doctor.fee}
                              </span>
                            </p>
                            <p className="inbox-item-text">
                              <strong style={{ color: "black" }}>
                                <i
                                  className="fas fa-map-marker-alt"
                                  style={{
                                    color: "#006daf",
                                    backgroundColor: "lightblue",
                                    borderRadius: "50%",
                                    width: "30px",
                                    height: "30px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "0px",

                                    marginBottom: "-20px",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                ></i>{" "}
                              </strong>{" "}
                              <span
                                style={{
                                  marginLeft: "55px",
                                  color: "black",
                                  fontWeight: "bold",
                                }}
                              >
                                Location:
                              </span>
                              <span style={{ marginLeft: "10px" }}>
                                {doctor.location}
                              </span>
                            </p>
                          </div>

                          {/* <p className="inbox-item-date">
                          <div
                            style={{
                              backgroundColor: "#006daf",
                              cursor: "pointer",
                            }}
                            className="btn btn-blue btn-sm waves-effect mb-3 waves-light me-1"
                           
                            onClick={() => handleBookAppointment(doctor)}
                          >
                            Book Appointment
                          </div>
                        </p> */}
                        </MessageItem>
                      </div>
                    ))}
                </MessageList>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            {selectedDoctor && showAppointmentDetails && (
              <div className="col ms-10">
                <Card
                  style={{
                    border: "1px solid #ccc",
                    margin: "20px",
                    marginBottom: "50px",
                    marginTop: "120px",
                  }}
                >
                  <Card.Body>
                    <h4
                      style={{
                        marginBottom: "50px",
                        marginTop: "-60px",
                        color: "black",
                        marginLeft: "-25px",
                      }}
                    >
                      Chosen Doctor
                    </h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="text-center">
                        <img
                          src={selectedDoctor.avatar}
                          className=" "
                          alt=""
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <div className="text-end" style={{ marginLeft: "10px" }}>
                        <h4>{selectedDoctor.doctorname}</h4>
                        <p className="text-muted">{selectedDoctor.field}</p>
                      </div>
                    </div>
                    <hr />
                    <div
                      className="mb-3"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p
                        className="inbox-item-text"
                        style={{ alignItems: "center" }}
                      >
                        <strong style={{ color: "black" }}>
                          <i
                            className="fas fa-user-md"
                            style={{
                              color: "#006daf",
                              backgroundColor: "lightblue",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: "-30px",
                              marginBottom: "-30px",
                              marginTop: "-10px",
                              display: "flex",
                            }}
                          ></i>{" "}
                        </strong>{" "}
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            marginLeft: "10px",
                            position: "absolute",
                            left: "50px",
                            display: "inline-block",
                          }}
                        >
                          Experience:
                        </span>
                        <span
                          style={{
                            marginLeft: "90px",
                            left: "100px",
                            display: "inline-block",
                          }}
                        >
                          {selectedDoctor.experience}
                        </span>
                      </p>
                      <p className="inbox-item-text">
                        <strong style={{ color: "black" }}>
                          <i
                            className="fas fa-graduation-cap"
                            style={{
                              color: "#006daf",
                              marginLeft: "-40px",
                              backgroundColor: "lightblue",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                              justifyContent: "center",
                              alignItems: "center",

                              marginBottom: "-30px",
                              marginTop: "-0px",
                              display: "flex",
                            }}
                          ></i>{" "}
                          Education:
                        </strong>{" "}
                        {selectedDoctor.education}
                      </p>
                      <p className="inbox-item-text">
                        <strong style={{ color: "black", marginLeft: "-5px" }}>
                          <i
                            className="fas fa-clock"
                            style={{
                              color: "#006daf",
                              marginLeft: "-132px",
                              backgroundColor: "lightblue",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                              justifyContent: "center",
                              alignItems: "center",

                              marginBottom: "-30px",
                              marginTop: "-25px",
                              display: "flex",
                            }}
                          ></i>{" "}
                        </strong>{" "}
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            marginLeft: "10px",
                            position: "absolute",
                            left: "50px",
                            display: "inline-block",
                          }}
                        >
                          Duration:
                        </span>
                        <span
                          style={{
                            marginLeft: "-15px",
                            left: "100px",
                            display: "inline-block",
                          }}
                        >
                          {selectedDoctor.duration}
                        </span>
                      </p>
                      <p className="inbox-item-text">
                        <strong style={{ color: "black" }}>
                          <i
                            className="fas fa-dollar-sign"
                            style={{
                              color: "#006daf",
                              marginLeft: "-147px",
                              backgroundColor: "lightblue",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                              justifyContent: "center",
                              alignItems: "center",

                              marginBottom: "-30px",
                              marginTop: "-0px",
                              display: "flex",
                            }}
                          ></i>{" "}
                        </strong>{" "}
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            marginLeft: "10px",
                            position: "absolute",
                            left: "50px",
                            display: "inline-block",
                          }}
                        >
                          Fee:
                        </span>
                        <span
                          style={{
                            marginLeft: "-30px",
                            left: "100px",
                            display: "inline-block",
                          }}
                        >
                          {selectedDoctor.fee}
                        </span>
                      </p>
                      <p className="inbox-item-text">
                        <strong style={{ color: "black" }}>
                          <i
                            className="fas fa-map-marker-alt"
                            style={{
                              color: "#006daf",
                              marginLeft: "-30px",
                              backgroundColor: "lightblue",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                              justifyContent: "center",
                              alignItems: "center",

                              marginBottom: "-30px",
                              marginTop: "-0px",
                              display: "flex",
                            }}
                          ></i>{" "}
                        </strong>{" "}
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            marginLeft: "10px",
                            position: "absolute",
                            left: "50px",
                            display: "inline-block",
                          }}
                        >
                          Location:
                        </span>
                        <span
                          style={{
                            marginLeft: "90px",
                            left: "100px",
                            display: "inline-block",
                          }}
                        >
                          {selectedDoctor.location}
                        </span>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )}
          </Col>

          <Col xl={4}>
            {showAppointmentDetails && (
              <div className="ms-5">
                <Card style={{ marginTop: "50px" }}>
                  <Card.Body>
                    <div className="input-group input-group-sm">
                      <h4 style={{ color: "black" }}>Choose Date</h4>
                      <div
                        style={{
                          borderTop: "1px solid #ddd",
                          margin: "20px 0",
                        }}
                      ></div>
                      <HyperDatepicker
                       value={selectedDate}
                        inputClass="border"
                        onChange={(date: Date) => {
                          onDateChange(date);
                        }}
                      />
                    </div>
                    <h5 style={{ color: "black" }}>Choose Time</h5>
                    <div
                      style={{ borderTop: "1px solid #ddd", margin: "10px 0" }}
                    ></div>
                    {selectedDate && (
                      <>
                        <Row className="mt-12">
                          <Col>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div>
                                <h6 className="morning-heading">Morning</h6>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  marginLeft: "3px",

                                  marginBottom: "10px",
                                  paddingBottom: "-60px",

                                  marginRight: "30px",
                                  marginTop: "-40px",
                                }}
                              >
                                {morningTimes
                                  .slice(0, 3)
                                  .map((dateTime, index) => (
                                    <TimeSlotSelection
                                      key={index}
                                      time={dateTime}
                                      isActive={dateTime === activeTimeSlot}
                                      onTimeSlotClick={handleTimeSlotClick}
                                    />
                                  ))}
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  marginLeft: "7px",
                                  marginRight: "150px",
                                  marginBottom: "-20px",
                                  marginTop: "-65px",
                                  width: "80px",
                                  paddingBottom: "-60px",
                                }}
                              >
                                {morningTimes
                                  .slice(3)
                                  .map((dateTime, index) => (
                                    <TimeSlotSelection
                                      key={index}
                                      time={dateTime}
                                      isActive={dateTime === activeTimeSlot}
                                      onTimeSlotClick={handleTimeSlotClick}
                                    />
                                  ))}
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <h6 className="afternoon-heading">Afternoon</h6>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                marginLeft: "3px",
                                marginRight: "20px",
                                marginBottom: "-20px",
                                marginTop: "-40px",
                                width: "100px",
                              }}
                            >
                              {afternoonTimes.map((dateTime, index) => (
                                <TimeSlotSelection
                                  key={index}
                                  time={dateTime}
                                  isActive={dateTime === activeTimeSlot}
                                  onTimeSlotClick={handleTimeSlotClick}
                                />
                              ))}
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <h6 className="evening-heading">Evening</h6>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                marginLeft: "3px",
                                marginRight: "30px",
                                marginTop: "-40px",
                              }}
                            >
                              {eveningTimes.map((dateTime, index) => (
                                <TimeSlotSelection
                                  key={index}
                                  time={dateTime}
                                  isActive={dateTime === activeTimeSlot}
                                  onTimeSlotClick={handleTimeSlotClick}
                                />
                              ))}
                            </div>
                            <Button
                              style={{
                                backgroundColor: "#006daf",
                                width: "130px",
                                marginLeft: "3px",
                              }}
                              onClick={handleOpenModal}
                            >
                              Confirm
                            </Button>
                          </Col>
                        </Row>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </div>
            )}
            <Modal show={showModal}>
              <Modal.Header closeButton onClick={handleCloseModal}>
                <Modal.Title>Confirm Appointment</Modal.Title>
              </Modal.Header>
              <Modal.Header>
                <Modal.Title>
                  <Card>
                    {selectedDoctor && (
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text-center">
                          <img
                            src={selectedDoctor.avatar}
                            className=""
                            alt=""
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50px",
                            }}
                          />
                        </div>
                        <div
                          className="text-end"
                          style={{ marginLeft: "10px" }}
                        >
                          <h4>{selectedDoctor.doctorname}</h4>
                          <p className="text-muted">{selectedDoctor.field}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <h4 className="header-title">
                  <Link
                    rel="noreferrer"
                    to="https://github.com/JedWatson/react-select"
                    target="_blank"
                  ></Link>

                  <Card>
                    {selectedDoctor && (
                      <div style={{ position: "relative" }}>
                        <FaClock
                          style={{
                            position: "absolute",
                            left: "380px",
                            top: "3px",
                            color: "gray",
                          }}
                        />
                        <span
                          style={{
                            marginLeft: "400px",
                            left: "100px",
                            display: "inline-block",
                          }}
                        >
                          {selectedDoctor.duration}
                        </span>
                        
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            marginLeft: "-40px",
                            position: "absolute",
                            left: "50px",
                            display: "inline-block",
                            top:"-10px"
                          }}
                        >
                          Date
                        </span>
                        <span
                          style={{
                            marginLeft: "-10px",
                            left: "100px",
                            display: "inline-block",
                            top:"100px",
                            bottom:"200px"
                          }}
                        >
                          {selectedDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            marginLeft: "155px",
                            position: "absolute",
                            left: "50px",
                            display: "inline-block",
                            top:"-10px"
                          }}
                        >
                          Time
                        </span>
                        <span
                          style={{
                            marginLeft: "50px",
                            left: "100px",
                            display: "inline-block",
                          }}
                        >
                          12:00 - 12:15
                        </span>
                        <span
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            marginLeft: "110px",
                            position: "absolute",
                            left: "50px",
                            display: "inline-block",
                            top:"20px"
                          }}
                        >
                          Address
                        </span>
                        <span
                          style={{
                            marginLeft: "160px",
                            left: "100px",
                            display: "inline-block",
                          }}
                        >
                          {selectedDoctor.location}
                        </span>
                      </div>
                    )}
                  </Card>
                </h4>
                <p className="mb-1 mt-3 fw-bold text-muted"></p>
                <p className="text-muted font-14"></p>
                <Select
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "Patient 1", label: "Patient 1" },
                    { value: "Patient 2", label: "Patient 2" },
                  ]}
                  placeholder="Patient 1"
                />
                <p className="mb-1 mt-3 fw-bold text-muted"></p>
                <p className="text-muted font-14"></p>
                <textarea
                  style={{ width: "470px", height: "80px" }}
                  placeholder="Type your   Concerns"
                />
              </Modal.Body>
              <Modal.Footer>
                {/* Continue button linking to /ui/widgets */}
                <Link to="/ui/widgets">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "150px",
                    }}
                  >
                    <Button
                      style={{ backgroundColor: "#006daf" }}
                      className="mt-3"
                    >
                      Proceed for Payment
                    </Button>
                  </div>
                </Link>
                {/* <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button> */}
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Messages;
