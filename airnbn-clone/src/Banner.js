import React, { useState } from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'


function Banner() {
    const [showSearch , setSearch]=useState(false)
    return (
        <div className='banner'>
            <div className="banner__search">
               
                <Button  className='banner__searchButton' variant='outlined'>Search Datas</Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination </h1>
                <h5>plan a different kid of getaway uncover the hidden gems near you</h5>
                <Button variant='outlined'>Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner
