import pic from './assets/pic.jpg'
function Card(){
    return(
        <div className="Card">
            <img className='card-pp' src={pic} alt="random picture"></img>
            <h1 className='card-title'>Jonas</h1>
            <p className='card-p'>Hi this is Jonas and I'm dumb</p>
        </div>
    );

}

export default Card