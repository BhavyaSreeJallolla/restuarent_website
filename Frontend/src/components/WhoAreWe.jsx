import React from 'react'
import { data } from '../restApi.json'
const WhoAreWe = () => {
    return (
        <>
            <section className='who_are_we' id='who_are_we'>
                <div className="container">
                    <div className="text_banner">
                        {
                            data[0].who_we_are.slice(0, 2).map(element => (
                                <div className="card" kay={element.id}>
                                    <h1 className="heading" style={{ fontWeight: "300" }}>{element.number}</h1>
                                    <p>{element.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="image_banner">
                        <img src="whoweare.png" alt="food" className="gradient_bg" />
                    </div>
                    <div className="text_banner">
                        {
                            data[0].who_we_are.slice(2).map(element => (
                                <div className="card" kay={element.id}>
                                    <h1 className="heading" style={{ fontWeight: "300" }}>{element.number}</h1>
                                    <p>{element.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="image_banner">
                        <img src='/center.svg' alt='center'/>
                        <img src='/whoweare.png' alt='who'/>
                    </div>
                </div>

            </section>

        </>
    )
}

export default WhoAreWe