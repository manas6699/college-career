import React from 'react'
import Navbar from './Navbar'


const Contacts = () => {
    return (
        <>
        
            <div className="bg">
                <div className="container">
                    <div className="header my-4">
                        Contact Us
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-success mb-5">Submit 📎</button>
                </div>
            </div>
           
        </>
    )
}

export default Contacts