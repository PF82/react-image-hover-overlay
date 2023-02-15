import React from 'react'
import '../page/portfolio.css'

const Portfolio = ({ projects }) => {
    return (
        <>
            {projects.map((project) => {
                const { id, image, title, text } = project;
                return (
                    <article key={id} className='container'>
                        <img src={image} alt={title} className='image' />
                        <div className='overlay'>
                            <div className='title'>{title}</div>
                            <br />
                            <div className='text'>({text})</div>
                            <button className='button' style={{
                                width: '40%',
                                height: '30px',
                                fontSize: '16px',
                                paddingLeft: '5px',
                                paddingBottom: '25px'
                            }}>Visit Website</button>
                        </div>
                    </article>
                )
            })
            }
        </>
        // <div className="container">
        //     <img src={logo} alt="Avatar" className="image" />
        //     <div className="overlay">
        //         <div className="text">Hello World</div>
        //     </div>
        // </div>
    )
}

export default Portfolio