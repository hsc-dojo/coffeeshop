import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/f/hscdojo20@gmail.com" method="post">
            {/* name*/}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John Smith"
              />
            </div>
            {/* email*/}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="smith@smith.com"
              />
            </div>
            {/* description*/}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                placeholder="Your Description here .."
                rows="10"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-crimson btn-block text-capitalize mt-5"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
