
import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import 'dotenv/config';
import {
    Button
  } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";




function Gallery() {
    const [photos, setPhotos] = useState([]);
    const [next, setNext] = useState("");
    
    useEffect(() => {
        axios.get("https://graph.facebook.com/v16.0/me/accounts?fields=albums%7Bphotos%7Blink%2Ccreated_time%2Cimages%7D%7D&access_token=" + process.env.FACEBOOK_ACCESS_TOKEN).then(function (response) {
        
        setPhotos(...photos, response.data.data[0].albums.data[1].photos.data);
        

        setNext(response.data.data[0].albums.data[1].photos.paging.next);
        
    });
        
    }, []);
    function loadNext(){
        axios.get(next)
        .then(function (response) {
        // console.log(response);
        // console.log(photos);
        // console.log([...photos, ...response.data.data]);
        setPhotos([...photos, ...response.data.data]);
        // console.log(photos);

        // console.log(next);
        setNext(response.data.paging.next);
        // console.log(next);
        });
    };

    

 
  return (
    <>
    <IndexNavbar />
    <div  style={{
        "background-color": "#0b1011",
        "padding": "20px",
        "paddingTop":"100px",
        "margin": "auto"
        
        }}>
        {
            photos.length && photos.map(photo =>(
            <img
            style={{
                "padding": "2px",
                "position": "relative", 
                "borderRadius" : "10px"
            }}
            key= {photo.id}
            alt="image"
            src={photo.images[5].source}
            />
            ))
        }
    <br/>
    <Button style={{"margin": "30px"}} onClick={loadNext} className="btn-round ml-1" color="success" type="button">
            Load more
    </Button>
    
    </div>
    
    

    
      
      
    </>
  );
}

export default Gallery;
