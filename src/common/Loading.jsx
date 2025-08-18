import { BeatLoader } from "react-spinners"

function Loading({ size = "15" }) {
    return (

        <BeatLoader
            color="rgb(var(--color-primary))"
            cssOverride={{
                display: "flex",
                justifyContent: "center"
            }}
            loading
            margin={4}
            size={size}
            speedMultiplier={1}

        />

    )
}

export default Loading
