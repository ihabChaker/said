import { useState } from "react"

import Modal from "../modal/index"
export default function State(props) {
    console.log(props)
    const [display, setDisplay] = useState('none')
    return (
        <main style={{ width: "50%", marginBottom: "15px", marginTop: "5px" }}>
            <div className="">
                <div>
                    <img src={props.src} alt="" />
                </div>
                <div>
                    <p>{props.price}</p>
                    <p>Total votes: {props.data.message[props.index + 6]} </p>
                </div>
            </div>
            <div>
                <button onClick={() => setDisplay("")}>More</button>
                {/* <button>bid</button> */}
            </div>
            <Modal index={props.index} display={display} regions={props.data.message} src={props.src} setDisplay={setDisplay} />
        </main>
    )
}