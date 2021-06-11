import State from "./state"
import states from "./states"
export default function States(props) {
    return (
        <main style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-        around", width: "80%" }}>
            {states.map((state, i) => {
                return <State index={i} key={i} src={state.src} desc={state.desc} data={props.data} />
            })}
        </main>
    )
}