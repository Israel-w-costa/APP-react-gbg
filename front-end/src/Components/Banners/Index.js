import './Banners.css'

export default function Banner ({games, deleteBanner}) {

    
    return ( 
        <div className="banners" >
            {games.map((game)=>(
               <div className="content" key={game.id}>     
                    <div>
                        <button className="delete" onClick={
                            (e)=>{ 
                                e.preventDefault()
                                deleteBanner(game.id)}
                            }>X</button>
                    </div>
                    <div>
                        <img
                        className="banner"
                        src={game.url_image}
                        alt={game.name}
                        />
                    </div>
                    <div>
                        <h3 className="banner_text">{ game.name}</h3>
                        <h3 >{game.year}</h3>
                    </div>
                </div>    
            ))}
           
        </div>

    )
}


