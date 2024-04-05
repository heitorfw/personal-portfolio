import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import { useState } from "react";
import emailjs from '@emailjs/browser'
function Contact(){
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
   
    function SendEmail(e){
        e.preventDefault();
        if(email  === '' || firstName === '' || phone === '' || lastName === ''|| message === ''){
                alert('Preencha todos os campos')
                return;
            }
        const templateParams ={
            from_name: firstName,
            message: message,
            email: email
        }
            emailjs.send("service_y98bud8", "template_spkpeh6", templateParams, "phi47p0kVccu8lX6q").then(
                (response) => {
                    console.log('email enviado', response.status, response.text)
                    setEmail('')
                    setFirstName('')
                    setLastName('')
                    setPhone('')
                    setMessage(' ')
                },(err) => {
                    console.log('erro', err)
                }
            )
    }



    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Entre em Contato" />
                    </Col>
                    <Col md={6}>
                        <h2>Entre em Contato</h2>
                        <form onSubmit={SendEmail}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={firstName} placeholder="Primeiro Nome" onChange={(e) => setFirstName( e.target.value)}/>
                                </Col>

                                <Col sm={6} className="px-1">
                                <input type="text" value={lastName} placeholder="último Nome" onChange={(e) => setLastName( e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="tel" value={phone} placeholder="Telefone" onChange={(e) => setPhone(e.target.value)}/>
                                </Col>
                                <textarea rows={6} value={message} placeholder="Mensagem" onChange={(e) => setMessage( e.target.value)}  />
                                <button type="submit"><span>Enviar</span></button>
                               
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;