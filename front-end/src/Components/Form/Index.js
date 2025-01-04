import Banner from "../Banners/Index"
import "./Form.css"
import { useRef} from "react"
import api from "../../Service/api"

     
export default function Form({ games, getBanner, deleteBanner }) {
    
    const inputName = useRef();
    const inputYear = useRef();
    const inputUrl_image = useRef();

    async function createBaner(e) {
        e.preventDefault()
        await api.post("api/banner",{
            name:inputName.current.value,
            year:inputYear.current.value,
            url_image:inputUrl_image.current.value
        })
        getBanner()
        inputName.current.value = ""
        inputYear.current.value = ""
        inputUrl_image.current.value = ""
       
    }


    return (
        <div>
            <form  onSubmit={createBaner}>
                <div className="form">
                    <div className="inputs">
                        <label id="name">Name:</label>
                        <input className="input"
                            type="text"
                            id="name"
                            ref={inputName}
                            required ></input>
                        <label id="year">Year:</label>
                        <input className="input"
                            type="text"
                            id="year"
                            ref={inputYear}
                            required></input>
                        <label id="url_image">URL:</label>
                        <input className="input"
                            type="text"
                            id="url_image"
                            ref={inputUrl_image}
                            required></input>
                    </div>
                    <div>
                        <button className="button" type="Submit" >submit</button>
                    </div>
                </div>    
                <Banner games={games} deleteBanner={deleteBanner}/>
            </form>    
        </div>
    )
}