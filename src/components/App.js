import React, { useEffect, useState } from "react";
// create your App component here

function App() {
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(data => setImage(data.message))
    }, [])

    if (!image) {
        return <p>Loading...</p>
    }

    return (
        <>
            <img src={image} alt="A Random Dog"></img>
        </>
    )
}

export default App