import ItemCount from './ItemCount';

function ItemDetail({detail}) {
    const {stock,name, accion, precio, imagen} = detail
    
    return (

    <div className="card">

                
        <div className="card-body">
      
                <img className="imgSize" alt="imagen" src={imagen}/>
          
                
          <h3 className="card-title">{name}</h3>
                <p className="card-text">{accion}</p>
                <h4>Stock: {stock}</h4>
                <p className="card-text">{precio}</p>
          </div>
          
            <ItemCount stock={stock} initial={1}/>
            
          </div>
      
    );
}

export default ItemDetail;