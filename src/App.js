import React from "react";
import Nav from "./components/Nav";
import Post from "./components/Post"
import Data from "./data"
import Footer from "./components/Footer";

function App() {


    const viajes = Data.map( viaje => {
        return (
            <Post 
                key = {viaje.id}
                imgURL = {viaje.imageUrl}
                title = {viaje.title}
                location = {viaje.location}
                startDate = {viaje.startDate}
                endDate = {viaje.endDate}
                description = {viaje.description}
            ></Post>
        )
    })

    return (
        <div>
            <Nav />
            {viajes}
            <Footer />
        </div>
    )
}

export default App;