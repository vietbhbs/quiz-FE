import Video from "./Video";
import {useRef} from "react";

function Demo(){
    const videoRef = useRef();

    const handlePlay = ()=>{
        videoRef.current.play()
    }

    const handlePause = ()=>{
        videoRef.current.pause()
    }
    return (
        <div>
            <Video ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default Demo