import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Card1 from '../asset/Card1.jpg';
import Card2 from '../asset/Card2.jpg';
import Card3 from '../asset/Card3.jpg';
import Card4 from '../asset/Card4.jpg';
import Card5 from '../asset/Card5.jpg';
import Card6 from '../asset/Card6.jpg';

function GroupExample() {
  return (
    <>
    <div className='container'>
    <div className='Card'>
    <CardGroup>
      <Card style={{margin:'0px 10px'}}>
        <Card.Img variant="top" src={Card1} />
        <Card.Body>
          <Card.Title style={{position:'inherit'}}>Tiffin</Card.Title>
          <Card.Text style={{color:'grey',fontSize:'14px'}}>
            Hotel Winway, South Tukoganj, East Indore<br></br>Rs 1,000 for 2 (approx) | North Indian, Chinese, Malvani
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card style={{margin:'0px 10px'}}>
        <Card.Img variant="top" src={Card2} />
        <Card.Body>
          <Card.Title>Boozer's Bar</Card.Title>
          <Card.Text style={{color:'grey',fontSize:'14px'}}>
            Dwarkapuri, South Indore <br>
            </br>Rs 600 for 2 (approx) | North Indian
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card style={{margin:'0px 10px'}}>
        <Card.Img variant="top" src={Card3} />
        <Card.Body>
          <Card.Title>Tonicue The Bar</Card.Title>
          <Card.Text style={{color:'grey',fontSize:'14px'}}>
            Hotel Malwa lnn, Rajendra Nagar, South Indian<br></br>Rs 1300 for 2 (approx) | Chinese, North Indian
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
   </div>

   <div className='Card'>
   <CardGroup>
      <Card style={{margin:'0px 10px'}}>
        <Card.Img variant="top" src={Card4} />
        <Card.Body>
          <Card.Title>Shere Punjab Restaurant</Card.Title>
          <Card.Text style={{color:'grey',fontSize:'14px'}}>
            Morar, Gwalior<br></br>Pizza, Fast Food, Burger
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card style={{margin:'0px 10px'}}>
        <Card.Img variant="top" src={Card5} />
        <Card.Body>
          <Card.Title>Shere Punjab Restaurant</Card.Title>
          <Card.Text style={{color:'grey',fontSize:'14px'}}>
            Morar, Gwalior<br></br>Pizza, Fast Food, Burger
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card style={{margin:'0px 10px'}}>
        <Card.Img variant="top" src={Card6} />
        <Card.Body>
          <Card.Title>Shere Punjab Restaurant</Card.Title>
          <Card.Text style={{color:'grey',fontSize:'14px'}}>
            Morar, Gwalior<br></br>Pizza, Fast Food, Burger
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
   </div>
   </div>
   </>
    
  );
}

export default GroupExample;