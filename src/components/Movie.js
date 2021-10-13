import React from "react";

import {  Button} from "react-bootstrap";
import axios from "axios";
import "../styles/styles.css";

class Movie extends React.Component {
  constructor(){
    super();
    this.state={
      movies:[],
      display:0
    }
    
}

componentDidMount(){
  
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cfb0f0748a91342f252f0157a4a31698&language=en-US&page=1
    `).then((res)=>{
      this.setState({
        movies:res.data.results
      },()=>{
        console.log(this.state.movies)
      })
    })
  
}
display=(str,overview,img,avg,count,date,popularity)=>{

  this.props.history.push(`/movie:${str}`,{Title:str,Desc:overview,Img:img,Avg:avg,Count:count,Date:date,Popularity:popularity});
}
  
  render() {
    return (
      <div>
        
        <nav className="navbar navbar-inverse">
    <div className="container-fluid">
     <div>
      <span className="navv">My Movies</span>
      <span><Button className="logout" onClick={()=>{this.props.history.push("/")}}>Logout</Button></span>
      </div>     
     </div>
   
  </nav>
  
      <div className="row">
      {this.state.movies.length !== 0 ?
                this.state.movies.map((d)=>{
                    return  <div className="block">
                            
                            <img className = "img-responsive" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${d.poster_path}`}></img>
                            <Button className = "btn" onClick = {()=>this.display(d.title,d.overview,d.poster_path,d.vote_average,d.vote_count,d.release_date,d.popularity)}>About</Button>
                            
                      </div>
                }):"Loading"}
       </div>
       </div>
         
    );
  }
}

export default Movie;