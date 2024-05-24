import React from 'react'


const Contacts = () => {
    return (
        <>
        
            <div className="bg">
                <div className="container">
                    <div className="header my-4">
                        Contact Us
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="enter your name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com" />
                    </div>                  
                    <button type="button" className="btn btn-success mb-5">Submit</button>
                </div>
            </div>
           
        </>
    )
}

export default Contacts