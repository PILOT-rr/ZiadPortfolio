import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
import Lottie from "lottie-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwkddzrr");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and get notified when I publish
        something new.
      </p>

      <div className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <>
              
              <p style={{ fontSize: "15px", margin: "2rem" }}>
                Your Message has reached Mr. Ziad. We hope to be as you think. <Lottie
                className="flex"
                style={{ width: "35px" }}
                animationData={doneAnimation}
                alt="Success Animation"
              />
              </p>
            </>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="flex"
            animationData={contactAnimation}
            alt="Contact Animation"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
