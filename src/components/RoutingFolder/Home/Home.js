import React from 'react'
import "./Home.css"
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate();

    // We can use this general function for all the onClick navigations
    const navigateTo = (path) => {
        navigate(path)
    }

    // No need to make these 4 different functions
    // const goToAboutPage = () => {
    //     navigate("/about-me")
    // }

    // const goToOrdersPage = () => {
    //     navigate("/my-orders")
    // }

    // const goToAccountsPage = () => {
    //     navigate("/my-account")
    // }

    // const goToContactPage = () => {
    //     navigate("/contact-us")
    // }

  return (
    <div className='home_container'>
        <button onClick={() => navigateTo("/about-me")}>Go to About Me Page</button>
        <button onClick={() => navigateTo("/my-orders")}>Go to My Orders Page</button>
        <button onClick={() => navigateTo("/my-account")}>Go to My Account Page</button>
        <button onClick={() => navigateTo("/contact-us")}>Go to Contact Us Page</button>
    </div>
  )
}

export default Home