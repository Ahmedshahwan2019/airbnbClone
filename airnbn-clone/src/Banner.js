import React, { useState } from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
import {useHistory} from "react-router-dom"
import Search from './Search'



function Banner() {
    const history =useHistory()
    const [showSearch , setSearch]=useState(false)
    return (
        <div className='banner'>
            <div className="banner__search">
               {showSearch && <Search/>}
                <Button  onClick = {()=> setSearch(!showSearch)}
                className='banner__searchButton' variant='outlined'>{showSearch?"Hide":"Search Date"}</Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination </h1>
                <h5>plan a different kid of getaway uncover the hidden gems near you</h5>
                <Button onClick={()=> history.push('/search')} variant='outlined'>Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner
