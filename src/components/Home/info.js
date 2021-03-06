import React from 'react'
import { Link } from "gatsby"
import Title from '../Globals/Title'

export default function info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            n the industry's standard dummy text ever since the 1500s, Lorem
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into e
                            lectronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to="/">
                           <button className="btn text-uppercase btn-crimson">home page</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
