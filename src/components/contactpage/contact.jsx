import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
// import { contactConfig } from "../content_option"
import "./contact.css"

export default function ContactUs() {
    const logotext = 'JOHN';
    const meta = {
      title: 'John Doe',
      description:
        'I’m John Doe data scientist _ Full stack devloper,currently working in Berlin',
    };
    
    const introdata = {
      title: 'I’m John Doe',
      animated: {
        first: 'I love coding',
        second: 'I code cool websites',
        third: 'I develop mobile apps',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum',
      your_img_url: 'https://images.unsplash.com/photo-1514790193030-c89d266d5a9d',
    };
    
    const dataabout = {
      title: 'abit about my self',
      aboutme:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.',
    };
    const worktimeline = [
      {
        jobtitle: 'Designer of week',
        where: 'YAdfi',
        date: '2020',
      },
      {
        jobtitle: 'Designer of week',
        where: 'Jamalya',
        date: '2019',
      },
      {
        jobtitle: 'Designer of week',
        where: 'ALquds',
        date: '2019',
      },
    ];
    
    
    
    const services = [
      {
        title: 'UI & UX Design',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.',
      },
      {
        title: 'Mobile Apps',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.',
      },
      {
        title: 'Wordpress Design',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.',
      },
    ];
    
    const contactConfig = {
      YOUR_EMAIL: 'jayasreekrishnamurthy60@gmail.com',
      YOUR_FONE: '9789191827',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ',
      YOUR_SERVICE_ID: 'service_id',
      YOUR_TEMPLATE_ID: 'template_id',
      YOUR_USER_ID: 'user_id',
    };
    
     
    

  return (
<div className="contactpart">
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h2 className="contactheading">Contact Me</h2>
            {/* <hr className="t_border my-4 ml-0 text-left" /> */}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn1" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
        </div>
  );
}