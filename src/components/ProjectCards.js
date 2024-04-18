import { Col } from "react-bootstrap";

function ProjectCards({title, description, imgUrl}){
    return(
        <Col sm={6} md={4} >
            <div className="proj-imbx">
            a href={'https://zoom-app-xi.vercel.app'} target="_blank" rel="noopener noreferrer">
            <img src={imgUrl}/>
            </a>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
            </div>
        </Col>
    )
}
export default ProjectCards;
