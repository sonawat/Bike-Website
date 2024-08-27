import b from './bi6.jpg'
import c from './b.jpg'
import './div.css'
const Div = () =>
{
    return(
        <>
        <div className="e" style={{backgroundImage:`url(${c})`,backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className='f'>
                <h2>Search the right bike</h2>
                <br/>
                <input type='text' className='g' placeholder='New Bike' style={{width:'160px',padding:'10px',backgroundColor:'black',borderRadius:'8px',border:'none',textAlign:'center'}}/><span style={{marginLeft:'10px'}}><input type='text' placeholder='Used Bike' style={{width:'160px',padding:'10px',borderRadius:'8px',border:'1px solid gray',textAlign:'center'}}/></span>
        <br/> <br/>
        <input type='radio' style={{width:'17px',height:'17px', color:'red'}} checked />
        <span style={{marginLeft:'8px',marginRight:'38px',color:'red'}}>By Brand</span>
          <input type='radio' style={{width:'17px',height:'17px'}}/>
          <span style={{marginLeft:'8px'}}>By Budget</span><br/><br/>

            <select style={{width:'100%',padding:'12px',border:'1px solid silver',borderBottom:'none',borderRadius:'6px'}}>
        <option selected>Selected Brand</option>
        <option>dwdw</option>
        <option>dwdw</option>
        <option>dwdw</option>
            </select>
            <select style={{width:'100%',padding:'12px',border:'1px solid silver',borderRadius:'6px'}}>
        <option selected>Selected Brand</option>
        <option>dwdw</option>
        <option>dwdw</option>
        <option>dwdw</option>
            </select><br/><br/>


        <button style={{width:'100%',padding:'12px',backgroundColor:'red',border:'none',color:'white',borderRadius:'10px',fontWeight:'bold'}}>Search</button>
           <br/><br/>
           <small  style={{marginLeft:'216px'}}>Advance Search
            <small style={{marginLeft:'6px'}}><i className='fa solid fa-arrow-right'></i></small>
           </small>
            </div>

            {/*

        <h3 style={{textDecoration:'underline',textDecorationColor:'red',color:'white'}}>Launched</h3>
    <h3 style={{color:'white'}}>Iconic Retro Bike</h3>
    <h1 style={{color:'white'}}>BSA Gold Star</h1>
    <h3 style={{color:'white'}}>Know More
    <small style={{backgroundColor:'red', fontSize:'12px', padding:'8px',borderRadius:'50%',marginLeft:'8px'}}><i className='fa solid fa-greater-than'></i></small> </h3>
      <br/>    
      <br/>    
      <br/>    
   */}
         <div className='h'>
         <small style={{color:'white'}}>BSA Gold Star</small>
    <small style={{color:'white',marginLeft:'40px'}}>Ola RoadStar Lineup</small>

        <br/>
        <small style={{ color:'white',textDecoration:'underline',textDecorationThickness:'5px'}}>Launched</small>
    <small style={{color:'white',marginLeft:'65px',textDecoration:'underline',textDecorationThickness:'5px',textDecorationColor:'silver'}}>Launched</small>
            </div> 
        </div>

        
        </>
    )
}

export default Div