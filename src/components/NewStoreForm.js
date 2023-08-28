import React, {useState} from "react"

function NewStoreForm({addStore}) {
    const [storeName, setStoreName] = useState("");
    const [image, setImage] = useState("");
    const [season, setSeason] = useState(0);
    const [episode, setEpisode] = useState(0);

    function onStoreNameChange(e){
        setStoreName(e.target.value);
    }
    function onImageChange(e){
        setImage(e.target.value);
    }
    function onSeasonChange(e){
        setSeason(e.target.value);
    }
    function onEpisodeChange(e){
        setEpisode(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addStore({
            "name": storeName,
            "image": image,
            "season": season,
            "episode": episode
        })
    }


    return(
        <form onSubmit={onSubmit}>
            <input type="text" id="name" placeholder="Store Name" onChange={onStoreNameChange}/>
            <input type="text" id="image" placeholder="Image URL" onChange={onImageChange}/>
            <input type="number" id="season" placeholder="Season" step="1" onChange={onSeasonChange}/>
            <input type="number" id="episode" placeholder="Episode" step="1" onChange={onEpisodeChange}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;