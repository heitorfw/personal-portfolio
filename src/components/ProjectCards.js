import { Col } from "react-bootstrap";

function ProjectCards({ title, description, imgUrl, link }) {
  
  return (
    <Col sm={6} md={4}>
      <div className="proj-imbx position-relative">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} className="rounded img-fluid mx-2" style={{ width: '110%', borderRadius: '100vh', whiteSpace:'10px'}}/>
          <div className="overlay">
            <br></br>
            <h4 style={{color: '#fff', opacity: '1'}}>{title}</h4>
            <p style={{color: '#fff', opacity: '0.8'}}>{description} </p>
          </div>
        </a>
        <div className="proj-txtx">
          
        </div>
      </div>
    </Col>
  );
}

export default ProjectCards;
