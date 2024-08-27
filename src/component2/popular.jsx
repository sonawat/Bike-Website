import './popular.css'
import l1 from './lo1.webp'
import l2 from './lo2.webp'
import l3 from './lo3.webp'
import l4 from './lo4.webp'
import l5 from './lo5.webp'
import l6 from './lo6.webp'
const Popular = () =>
{
    return(
        <>
        <div className="l">
        <div className="j">
            <h4 style={{padding:'10px'}}>Bikes in Spotlight</h4>
    <span style={{marginLeft:'10px', fontWeight:'bold'}}>Bike</span>
    <span style={{marginLeft:'25px',color:'gray'}}>Scooter</span>
    <span style={{marginLeft:'25px',color:'gray'}}>Electric</span>

        </div>


            <div className="m">
                <div style={{textAlign:'center',boxShadow:'0px 0px 2px 2px silver',padding:'10px'}}>
                    <div><img src={l1}/></div>
                    <span>TVS</span>
                    </div>

                    <div style={{textAlign:'center',boxShadow:'0px 0px 2px 2px silver',padding:'10px'}}>
                    <div><img src={l2}/></div>
                    <span>Bajaj</span>
                    </div>

                    <div style={{textAlign:'center',boxShadow:'0px 0px 2px 2px silver',padding:'10px'}}>
                    <div><img src={l3}/></div>
                    <span>Royal Enfield</span>
                    </div>

                    <div style={{textAlign:'center',boxShadow:'0px 0px 2px 2px silver',padding:'10px'}}>
                    <div><img src={l4}/></div>
                    <span>Yamaha</span>
                    </div>

                    <div style={{textAlign:'center',boxShadow:'0px 0px 2px 2px silver',padding:'10px'}}>
                    <div><img src={l5}/></div>
                    <span>Honda</span>
                    </div>

                    <div style={{textAlign:'center',padding:'10px',boxShadow:'0px 0px 2px 2px silver'}}>
                    <div><img src={l6}/></div>
                    <span>Hero</span>
                    </div>
                  

                </div>

             

                <span style={{marginLeft:'25px',color:'red',fontWeight:'bold'}}>All Bike Brand</span>

        </div>
        </>
    )
}

export default Popular