import addIcon from "../images/add-icon.png"

const Card = (props) =>{
    return(
        <div className="card" style={{maxWidth:'24rem'}}>
  <img src={props.image} className="card-img-top" alt="dish" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-warning"><span>Add to Basket <i><img src={addIcon} alt='add-icon' width={16}/></i></span></a>
  </div>
</div>
    )
}

export default Card