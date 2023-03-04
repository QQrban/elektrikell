import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import EmailModal from './EmailModal'
import { useState } from 'react'

const About = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div
            style={{
                height: '100vh',
                backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: 'rgb(106,180,110)',
                backgroundBlendMode: 'multiply',
                backgroundAttachment: 'fixed',
            }}
            className="d-flex about"
        >
            <Container className=' align-self-center text-white gap-4 pt-3 text-center w-100 d-flex flex-column align-items-center'>
                <h6 className='lh-lg fs-2 w-75 mt-5'>This project was created using React.js and Bootstrap 5 by Kurban Ramazanov, a student of the course "Frontend developer intensive course for beginners based on React.js" by Gamma Intelligence OÜ company</h6>
                <div className=' fs-4 d-flex flex-column align-items-center justify-content-center gap-3 mt-2'>
                    <div>Please, share your opinion about my project</div>
                    <Button variant='success' onClick={() => setShowForm(true)} className=' fs-4 text-white w-50'>Share</Button>
                </div>
                <a href='https://elektrikell.ee' className=' text-white align-self-end text-decoration-underline'>Tänan "elektrikell.ee" inspiratsiooni eest</a>
            </Container>
            <EmailModal showForm={showForm} handleClose={() => setShowForm(false)} />
        </div>
    )
}

export default About