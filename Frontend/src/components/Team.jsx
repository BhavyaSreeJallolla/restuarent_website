import React from 'react'
import {data} from '../restApi.json'
const Team = () => {
    return (
        <section className="team" id='team'>
            <div className="container">
                <div className="heading_section">
                    <h className="heading">OUR TEAM</h>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam dignissimos distinctio, ex in vero ducimus delectus vel exercitationem quibusdam
                        at provident iure modi est odio necessitatibus numquam sed beatae officiis?
                    </p>
                </div>
                <div className="team_container">
                    {data[0].team.map((element) => {
                        return (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name} />
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
                            </div>
                        );

                    })}
                </div>
            </div>
        </section>
    )
}

export default Team