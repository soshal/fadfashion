import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const FormContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  z-index: 0;
  padding: 5rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  overflow: hidden;
  font-family: "tenon";
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    padding: 3rem 1rem;
    flex-direction: column;
    min-height: 100vh;
    height: 100%;
  }

  .left {
    width: 50%;
    height: 100%;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 3rem 0;
    }

    .heading {
      width: 100%;
      height: 100%;
      margin-bottom: 3rem;

      @media screen and (max-width: 768px) {
        display: grid;
        place-items: center;
      }

      h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #111;
        margin-bottom: 3rem;
        font-family: "tenon";
        margin: 0 auto;
      }
    }

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      @media screen and (max-width: 768px) {
        align-items: center;
      }

      label {
        color: #111;
        font-family: "tenon";
        font-weight: 700;
        font-size: 1.5rem;
        margin: 1.5rem 0;
        letter-spacing: 1px;
      }

      input {
        width: 70%;
        padding: 1.5rem;
        border: 1.5px solid #00000050;
        border-radius: 100px;
        color: #111;
        transition: all 0.3s ease-in-out;
        margin-bottom: 3rem;

        &:focus {
          outline: none;
          border: 1.5px solid #111;
        }

        @media screen and (max-width: 768px) {
          width: 90%;
        }
      }

      textarea {
        width: 70%;
        padding: 1rem 2rem;
        border: 1.5px solid #00000020;
        border-radius: 100px;
        color: #111;
        transition: all 0.3s ease-in-out;
        margin-bottom: 4rem;
        margin-top: 1rem;
        resize: none;
        font-family: "tenon";
        display: none;

        &::placeholder {
          color: #999;
        }

        &:focus {
          outline: none;
          border: 1.5px solid #111;
        }

        @media screen and (max-width: 768px) {
          width: 90%;
        }
      }

      button {
        padding: 1.5rem 3rem;
        border-radius: 100px;
        background: #111;
        width: 70%;
        border: none;
        outline: none;
        cursor: pointer;
        color: #eee;
        font-family: "tenon";
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out;
        margin: 3rem 0;

        &:hover {
          background: #ff005c;
        }

        @media screen and (max-width: 768px) {
          width: 90%;
        }
      }
    }
  }

  .right {
    width: 50%;
    position: relative;
    z-index: 0;
    height: 90vh;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 80vh;
      margin-bottom: 5rem;
    }

    video {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
      border-top-left-radius: 100px;
      border-bottom-right-radius: 100px;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        height: 80vh;
      }
    }

    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      background: rgb(0, 0, 0, 0.1);
      height: 100%;
      width: 100%;
      cursor: pointer;
      border-radius: 30px;
      border-top-left-radius: 100px;
      border-bottom-right-radius: 100px;
    }

    .content {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 3;
      height: 100%;
      width: 100%;
      border-radius: 30px;
      border-top-left-radius: 100px;
      border-bottom-right-radius: 100px;
      background: #00000050;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 5rem 3rem;
      flex-direction: column;
      gap: 2rem;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        background: #00000099;
      }

      h1 {
        font-family: "tenon-bold";
        font-size: 10rem;
        font-weight: 100;
        background-image: linear-gradient(90deg, #ffffff, #ff80ae, #ff005c);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;

        @media screen and (max-width: 768px) {
          font-size: 8rem;
        }
      }

      p {
        font-family: "tenon";
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 1.5;
        width: 80%;
        margin-left: 0;
        color: #ccc;

        @media screen and (max-width: 768px) {
          font-size: 2rem;
          width: 100%;
        }
      }
    }
  }
`;

function Form() {
  const [mute, setMute] = useState(true);
  const videoRef = useRef(null);
  const [state, handleSubmit] = useForm("moqojwav");
  if (state.succeeded) {
    alert("Thanks for subscribing us");
  }

  const handleMute = () => {
    setMute(!mute);
    videoRef.current.muted = !mute;
  };
  return (
    <FormContainer>
      <div className="left">
        <div className="heading">
          <h1>Get In Touch</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input required id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">Email Address</label>
          <input required id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="phone-number">Phone number</label>
          <input id="phone-number" type="tel" name="phone-number" />
          <ValidationError
            prefix="Phone number"
            field="phone-number"
            errors={state.errors}
          />

          <textarea
            placeholder="Write Your Query"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Subscribe us
          </button>
        </form>
      </div>
      <div className="right">
        <video
          autoPlay
          loop
          muted={mute}
          playsInline
          src="https://res.cloudinary.com/divbobkmd/video/upload/v1690836829/trial004_crtrci.mp4"
          className="bgvideo"
          ref={videoRef}
        />
        <div className="overlay"></div>
        <div onClick={handleMute} className="content">
          <h1>Stay Updated, Stay Tuned.</h1>
          <p>
            Subscribe to our newsletter to get the latest updates on our
            products and services.
          </p>
        </div>
      </div>
    </FormContainer>
  );
}

export default Form;
