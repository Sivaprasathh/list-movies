import React from "react";

import { Button,Carousel } from "react-bootstrap";
import "../styles/styles.css";
import common from "../img/common.jpeg"
class Display extends React.Component {
 


  render() {
    let imgg = this.props.location.state.Img;
    let desc = this.props.location.state.Desc;
    let date = this.props.location.state.Date;
    let title = this.props.location.state.Title;
    let avg = this.props.location.state.Avg;
    let count = this.props.location.state.Count;
    let popularity = this.props.location.state.Popularity;
    return (
      <div className="display">
        
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="center"
      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${imgg}`}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="center"
      src={common}
      alt="First slide"
    />
    
  </Carousel.Item>
  
</Carousel>
       <div className="info">
       <div className="name">{title}</div>
       <div className = "datas">Movie Release date : {date} </div>
       <div className = "datas">Average : {avg} </div>
       <div className = "datas">Count : {count} </div>
       <div className = "datas">Popularity : {popularity} </div>
       <div className="desc"> Description : {desc}</div>
      
       </div>
       <Button className = "back-btn" onClick = {()=>{this.props.history.push("/movie")}}>Back to list</Button>
       </div>

         
    );
  }
}

export default Display;