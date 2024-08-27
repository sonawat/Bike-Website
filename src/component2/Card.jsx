import './card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import my from './bi7.webp'
import my1 from './bi8.webp'
import my2 from './bi9.webp'
import my3 from './bi10.webp'
const Carda = () =>
{
    return(
        <>
        <div className="i">
        <div className="j">
            <h4 style={{padding:'10px'}}>Bikes in Spotlight</h4>
    <span style={{marginLeft:'10px', fontWeight:'bold'}}>Most Popular</span>
    <span style={{marginLeft:'25px',color:'gray'}}>Sports Bikes</span>
    <span style={{marginLeft:'25px',color:'gray'}}>Best Mileage Bikes</span>
    <span style={{marginLeft:'25px',color:'gray'}}>Cruiser Bikes</span>
    <span style={{marginLeft:'25px',color:'gray'}}>Commuter Bikes</span>
    <span style={{marginLeft:'25px',color:'gray'}}>Off Road Bikes</span>
    <span style={{marginLeft:'25px',color:'gray'}}></span>
        </div>

        <div className="k">
        <Card style={{ width: '18rem',height:'340px'}}>
      <Card.Img variant="top" src={my} />
      <Card.Body>
        
        <Card.Text>
        <span style={{fontWeight:'bold'}}>Yamaha MT 15 V2</span><br/>
        <span style={{fontWeight:'bold'}}>$ 1.68-1.74 Lakh</span>
        </Card.Text>
        <button style={{width:'250px',padding:'9px',backgroundColor:'white',color:'red',fontWeight:'bold',border:'1px solid red',borderRadius:'10px'}}>View Next Offers</button>
      </Card.Body>
    </Card>

    
    <Card style={{ width: '18rem',height:'340px'}}>
      <Card.Img variant="top" src={my1} />
      <Card.Body>
        
        <Card.Text>
        <span style={{fontWeight:'bold'}}>Yamaha MT 15 V2</span><br/>
        <span style={{fontWeight:'bold'}}>$ 1.68-1.74 Lakh</span>
        </Card.Text>
        <button style={{width:'250px',padding:'9px',backgroundColor:'white',color:'red',fontWeight:'bold',border:'1px solid red',borderRadius:'10px'}}>View Next Offers</button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem',height:'340px'}}>
      <Card.Img variant="top" src={my2} />
      <Card.Body>
        
        <Card.Text>
        <span style={{fontWeight:'bold'}}>Yamaha MT 15 V2</span><br/>
        <span style={{fontWeight:'bold'}}>$ 1.68-1.74 Lakh</span>
        </Card.Text>
        <button style={{width:'250px',padding:'9px',backgroundColor:'white',color:'red',fontWeight:'bold',border:'1px solid red',borderRadius:'10px'}}>View Next Offers</button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem',height:'340px'}}>
      <Card.Img variant="top" src={my3} />
      <Card.Body>
        
        <Card.Text>
        <span style={{fontWeight:'bold'}}>Yamaha MT 15 V2</span><br/>
        <span style={{fontWeight:'bold'}}>$ 1.68-1.74 Lakh</span>
        </Card.Text>
        <button style={{width:'250px',padding:'9px',backgroundColor:'white',color:'red',fontWeight:'bold',border:'1px solid red',borderRadius:'10px'}}>View Next Offers</button>
      </Card.Body>
    </Card>
    </div>
    <span style={{marginLeft:'25px',color:'red',fontWeight:'bold'}}>View All Most Poular</span>
        </div>
        </>
    )
}

export default Carda