import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from './Footer'
import Card from '../Card'
import Carousal from '../Carousal'

const Home = () => {
    const [foodcat, setFoodCat] = useState([]);
    const [fooditem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json();
        console.log(response[0], response[1]);
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div>
            <Navbar />
            <Carousal />
            <>
                <Card />
            </>
            <div><Footer /></div>
        </div>
    )
}

export default Home
