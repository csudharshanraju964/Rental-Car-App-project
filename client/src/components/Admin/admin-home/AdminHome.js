import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AdminHome.css";


function AdminHome({ setAuth }) {

    const navigate = useNavigate()

    return (
        <>
            <div className='adminHeading'>
                <h3 >Hello Admin...</h3>
            </div>
            <br/>
            <div className='headerSection2'>
                <div className='carHeading'>Cars</div>
                <button className='addButton'>Add</button>
            </div>
            <div className='cars-container'>
                <div>
                    <p>Hello</p>
                </div>
            </div>

        </>
    )
}

export default AdminHome