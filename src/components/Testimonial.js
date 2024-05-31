import quote from '../images/quote.png';
import rating from '../images/rating.png';

const Testimonial = (props) =>{
    return(
        <div className="card testim-card" style={{maxWidth:'24rem'}}>
  <img src={props.image} className="card-img-top testim-card-img" alt="dish" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <img src={quote} alt='quote'/>
    <p className="card-text" style={{marginLeft: '20px'}}> {props.review}</p>
    <div className='rating'>
    <img src={rating} alt='rating'height={70}/>
    </div>
   
    
  </div>
</div>
    )
}

export default Testimonial