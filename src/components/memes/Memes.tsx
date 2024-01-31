'use client'
import Meme from "../meme/Meme";
import "./memes.css"

function Memes({memes}: any) {
    const data = memes;

    return (
        <div className="memes">
            {data.map((meme:any)=>{
                return(<Meme meme={meme} key={meme.data.id}/>)
            })}
        </div>    
    )
}

export default Memes