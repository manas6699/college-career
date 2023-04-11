import React from 'react'
import { Link } from 'react-router-dom'

const Tpo = () => {
    return (
        <>
            <div className="bg">
                <div className="container">
                    <div className="header my-4">
                        Training & Placement Record
                    </div>
                    <p className='my-4'>lorem ipsum The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis minima facilis harum sit repellat magni omnis corporis iure dolorum itaque quidem ipsam quaerat, fugit fugiat nemo. Quidem error ducimus tenetur quasi beatae veritatis magnam eveniet, eos nemo? Adipisci, id. Omnis, blanditiis. Exercitationem, ea hic, delectus, quisquam laudantium eius tenetur iste fugiat quas sit dolor! Institute have developped well equipped laboratories covering various featured lab machines,instruments with skilled lab assistants and thus making it stand among the best Enginnering lorem ipsum The Institute have developped well equipped laboratories covering various featured lab machines,instruments with skilled lab assistants and thus making it stand among the best Enginnering lorem ipsum The Institute have developped well equipped laboratories covering various featured lab machines,instruments with skilled lab assistants and thus making it stand among the best Enginnering
                    </p>
                    <Link to='/records'>
                    <button type="button" class="btn btn-success">Show Staticstics</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Tpo