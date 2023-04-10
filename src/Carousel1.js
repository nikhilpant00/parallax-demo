import React from "react";
import image2 from './images/0fbdfa105355065.5f7711b8ae7d2(1).png'
import Card from "./card/Card";
import cardDetails from "./cardDetails";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

function Carousel() {
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState([]);
   
  const HandleCarouselClick= (action)=>{
    if(action=='dec')
    setIndex(index-1);
    else if(action=='inc')
    setIndex(index+1);
    console.log(index)
  }

  useEffect(()=>{
    console.log(index)
      const newCards = cardDetails.map((item, ind) => {
        if (ind == index) return <Card showStatus={"active"} props={item}  />;
        else return <Card props={item} />;
      });
      setCards(newCards);
  }, [index]);

  return (
    <>
      <div
        className="d-flex mb-2 justify-content-end"
        style={{ margin: "0 8%" }}
      >
        <div
          style={{
            marginRight: "1.5rem",
            cursor: "pointer",
            pointerEvents: "inherit",
          }}
          onClick={()=>index>0 ? HandleCarouselClick('dec'):null}
        >
          <BsArrowLeftShort color="white" size={30} />
        </div>
        <div
          style={{ marginRight: "5%", cursor: "pointer" }}
          onClick={() =>index<2 ? HandleCarouselClick('inc'):null}
        >
          <BsArrowRightShort color="white" size={30} />
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-end"
        style={{ margin: "0 8%", height: "25rem" }}
      >
        {/* <Card showStatus={"active"} />
        <Card />
        <Card /> */}
        {cards}
      </div>
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide bg-blue"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block " src={image2} alt="First slide" style={{width:'500px'}} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}
    </>
  );
}

export default Carousel;
