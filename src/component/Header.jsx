import React from "react";
import img1 from "../asset/Arrow.jpg";
import img2 from "../asset/Location.png";
import img3 from "../asset/Bg.jpg";
function Header() {
  return (
    <>
      <div className="Header">
        <img src={img1}></img>
        <h6>EN</h6>
        <h6>Help</h6>
        <h6>For Businesses</h6>
        <br></br>
      </div>

      <div className="Logo">
        <h5
          style={{
            // position: "absolute",
            marginLeft: "2rem",
            fontSize: "2rem",
            marginTop: ".5rem",
            fontWeight: "lighter",
          }}
        >
          Logo
        </h5>
        <img
          style={{
            // position: 'absolute',
            width: "17px",
            height: "14px",
            left: "293px",
            top: "76px",
          }}
          src={img1}
        ></img>
        <img
          style={{
            // position: 'absolute',
            width: "30px",
            height: "34px",
            left: "263px",
            top: "56px",
          }}
          src={img2}
        ></img>
        <h4
          style={{
            // position: 'absolute',
            width: "194px",
            height: "23px",
            left: "322px",
            top: "48px",
            fontWeight: "400px",
            fontsize: "20px",
            color: "#F40303",
          }}
        >
          Get Current Location
        </h4>
        <button>Login</button>
      </div>

      <div className="Fyt">
        <img
          style={{
            top: "105px",
            width: "1277px",
            height: " 403px"
          }}
          src={img3}
        ></img>
        <h5>Find your table for any occasion</h5>
       </div>
    </>
  )
}

export default Header;
