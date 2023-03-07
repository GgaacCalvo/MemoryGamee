
function Card({ title, id, selected, picture }) { 
    return (
        <div id={id + 98} className={selected ?  "pickcard" : "opencard"}>
            {/* <h1>{title}</h1> */}
            <img className="card" src={picture}/>
        </div>
    )
}
export default Card;    