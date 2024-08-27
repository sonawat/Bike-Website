import lo from './logo.svg'
import {Table} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Navbar.css'
import { useState } from 'react';
const Navbar = () =>
{
    const[show,setShow] = useState(false);

    const ani = () =>
    {
        setShow(true);
    }

    const ani1 = () =>
    {
        setShow(false);
    }

    const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => setOpenIndex(index);
  const handleMouseLeave = () => setOpenIndex(null);

  const dropdowns = [
    { name: 'BIKE', items: ['Item 1A', 'Item 1B', 'Item 1C'] },
    { name: 'SCOOTERS', items: ['Item 2A', 'Item 2B', 'Item 2C'] },
    { name: 'ELECTRIC ZONE', items: ['Item 3A', 'Item 3B', 'Item 3C'] },
    { name: 'BIKE FINANCE', items: ['Item 4A', 'Item 4B', 'Item 4C'] },
    { name: 'BUY & SELL ', items: ['Item 5A', 'Item 5B', 'Item 5C'] },
    { name: 'NEWS & VIDEOS', items: ['Item 5A', 'Item 5B', 'Item 5C'] },
  ];
  return(
    <>
    <Table className='custom-table'>
      <tbody>
        <tr style={{lineHeight:'50px'}}>
          <td colSpan={2}><img src={lo} style={{height:'35px',marginLeft:'24px'}}/></td>
          <th colSpan={4}><input className='a' type='text' placeholder='Search Bikes or Scooters eg. YZF R15 V3,Activa 6G'/><button className='b'> <i className="fas fa-search"></i></button></th>
        <td><spna className="c">
        <span style={{fontSize:'12px',color:'rgb(72, 70, 70)',marginLeft:'154px'}}><u>English</u></span> 
    
       <span style={{marginLeft:'30px',marginRight:'30px',fontSize:'20px'}}><i className='fa-regular fa-heart'></i></span>
       <span style={{marginRight:'10px'}}><i className='fa-regular fa-user'></i></span>
         Login/ Register</spna></td>
        </tr>
    

    <tr>
      
      {dropdowns.map((dropdown, index) => (
        <th>
        <div
          key={index}
          className="dropdown"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Dropdown>
            <Dropdown.Toggle variant="light" id={`dropdown-${index}`} className="dropdown-toggle">
              {dropdown.name}
            </Dropdown.Toggle>
            <Dropdown.Menu
              className={`custom-dropdown-menu ${openIndex === index ? 'show' : ''}`}
            >
              {dropdown.items.map((item, itemIndex) => (
                <>
                <Dropdown.Item key={itemIndex}>{item}</Dropdown.Item>
                </>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        </th>
      ))}
      
      <td style={{width:'35%'}}>
     <span style={{marginLeft:'300px',color:'gray'}}><i className='fa-solid fa-location-crosshairs '></i>
     </span><span style={{marginLeft:'5px',color:'gray'}}>Select city</span></td>
    </tr>
      </tbody>
    </Table>
   
    </>
  )
}

export default Navbar