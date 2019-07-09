import React from "react";
import { Container, Jumbotron as Jumbo } from "react-bootstrap";
import Timer from "react-compound-timer";
import styled from "styled-components";
import boatImage from "../assets/boatImage.jpg";


const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => {
  
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay" />
        <Container>
          <h1>#TaSaidHa</h1>
          <br/>
          <h2>Harsh & Ankita</h2>
          <p>We request the honor of your company at our Wedding Ceremony</p>
          <Timer initialTime={3500000000} direction="backward">
            {() => (
              <React.Fragment>
                <Timer.Days /> days 
                <br/>
                <Timer.Hours /> hours 
                <Timer.Minutes /> minutes 
              <Timer.Seconds /> seconds 
              </React.Fragment>
            )}
          </Timer>
        </Container>
      </Jumbo>
    </Styles>
  )
};
