import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import emailjs from "emailjs-com"
import swal from 'sweetalert';



export const Contact = () => {
  
 //Email JS AUTH
 emailjs.init("tnOSVAm1mIWpA3R_S");


 //form vars
 const [to, setTo] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

       //form data
 const handleChangeName = (e) => {
     setTo(e.target.value);
 }
 const handleChangeEmail = (e) => {
     setEmail(e.target.value);
 }
 const handleChangeMessage = (e) => {
     setMessage(e.target.value);
 }

//email js
 function emailDatSend (e, to, email, message){
  e.preventDefault()
     emailjs.send('service_x9kh1kb', 'template_e56nqky', { //service id - template id
     to,
     email,
     message
   }, 'tnOSVAm1mIWpA3R_S') //user id
     .then(() => {
       //sweet alert send popup {
       swal("Email enviado correctamente", "Dentro de poco estare en contacto contigo", "success")
     })
     .catch(() =>{
         //sweet alert error popup
         swal("No se pudo enviar el email", "revisa los datos escritos e intenta nuevamente mas tarde", "error")})

     setTo("")
     setEmail("")
     setMessage("")
 }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={emailDatSend}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name" onChange={(e) => handleChangeName} />
                    </Col>
          
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" onChange={(e) => handleChangeEmail} />
                    </Col>
                   
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" onChange={(e) => handleChangeMessage}></textarea>
                      <button type="submit"><span>Enviar</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
