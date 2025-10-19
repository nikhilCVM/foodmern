import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Courasal from '../components/Courasal'

export default function Home() {
  return (
    <>
    <div><Navbar/></div>
    <div><Courasal/></div>
    <div className='d-flex m-20'>

    <div ><Cards image="https://th.bing.com/th/id/OIP.VFZPQNKwQuLi-NhNLcIHgQHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7" name= "burger" /></div>
    <div><Cards image="https://www.bing.com/images/search?view=detailV2&ccid=ZZsn6lD6&id=3AAE98D47CCC2E73DB7727B11FF6DBB1FA54FAE8&thid=OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo&mediaurl=https%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f22%2f371886-food-pizza.jpg&exph=1600&expw=2560&q=pizza+image&simid=608037524795572958&FORM=IRPRST&ck=85EEB692C8A9D542865D0635A43BEE55&selectedIndex=1&itb=0name" name= "pizza"/></div>
    <div><Cards image="https://images7.alphacoders.com/596/596343.jpg" name="pizzaBest" /></div>
    <div><Cards/></div>
    </div>
        <div>Home</div>
    <div><Footer/></div>
    </>
  )
}
