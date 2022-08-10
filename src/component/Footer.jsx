import React from "react";
import img1 from '../asset/whatsapp_48px.png'
import img3 from '../asset/facebook_48px.png'
import img2 from '../asset/Instagram_48px.png'
const Footer =()=>{
    return(
        <>
        
             <div style={{width:'1000px',marginBottom:'20px'}} className="container">
             <hr></hr>
            <div className="row footer_1" >

                <div style={{textAlign:'justify'}} className="col-3 ">
                <h4>Discover</h4>
                Trending Restaurants<br></br>
                Super Savers<br></br>
                Contactless Dining
                </div>

                <div  style={{textAlign:'justify'}} className="col-2">
                <h4>About</h4>
                About Us<br></br>
                    Blog<br></br>
                    Careers<br></br>
                    Add Restaurant<br></br>
                    Terms & Conditions<br></br>
                    Privacy Policy
                </div>

                <div  style={{textAlign:'justify'}} className="col-2">
                <h4>Top Cuisine</h4>
                North Indian<br></br>
                    Italian<br></br>
                    Fast Food<br></br>
                    Continental<br></br>
                    Chinese<br></br>
                    American<br></br>
                </div>

                <div  style={{textAlign:'justify'}} className="col-2">
                <h4>Top Facilities</h4>
                Outdoor Seating<br></br>
                    Private Dining
                </div>

                <div style={{textAlign:'justify'}} className="col-3">
                <h4>Top Locations</h4>
                 Trending Restaurants<br></br>
                 Pinto park<br></br>
                Gole ka Mandir<br></br>
                Morar
                </div>
                
            </div>
            <hr></hr>
        </div>


        {/* ----------------------------------------------------------------------------- */}

        <div className="container justify-content-md-center">
            <div className="row justify-content-md-center">
                <div className="col-md-2">
                    <h1>Logo</h1>
                </div>
            </div>

            <div className="row justify-content-md-center">
                <div className="col-4">
                    <h6 style={{color:'gray'}}>Find the best Restaurants, Deals, Discounts & Offers
                    Contact: +91 789654231</h6>
                </div>
{/* -------------------------------------------------------- */}
            <div style={{marginBottom:'13px'}}className="row justify-content-md-center">
                <div className="col-3" >
               
            <img style={{width:'3rem',height:'2.5rem',marginRight:'10px'}} src={img1} class="img-fluid" alt="..."></img>
            <img style={{width:'3rem',height:'2.5rem',marginRight:'10px'}} src={img2} class="img-fluid" alt="..."></img>
            <img style={{width:'3rem',height:'2.5rem'}} src={img3} class="img-fluid" alt="..."></img>
            </div>
            </div>
{/* -------------------------------------------------------------- */}


            </div>
            <div style={{marginBottom:'50px'}} className="row justify-content-md-center">
                <div  className="col-4">
                    <h6>© 2017, VIP.co.in. All Rights Reserved.</h6>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Footer;