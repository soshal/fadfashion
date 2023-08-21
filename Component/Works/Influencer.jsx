import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const InfluencerContainer = styled.div`
  min-height: 30vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .left {
    width: 80%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;

    h1 {
      font-size: 5rem;
      background: -webkit-linear-gradient(#ff005c, #ffd5d5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media screen and (max-width: 1000px) {
        font-size: 5rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 3.5rem;
      }
    }

    p {
      font-size: 1.5rem;
      color: #ddd;
      line-height: 1.5;
    }
  }

  .right {
    width: 80%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 1000px) {
      align-items: center;
    }

    h1 {
      font-size: 7rem;
      background: -webkit-linear-gradient(#ff005c, #ffd5e5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media screen and (max-width: 1000px) {
        font-size: 5rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 3.5rem;
      }
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 3rem;

      li {
        font-size: 1.5rem;
        color: #ddd;
        line-height: 1.5;
        text-align: left;
        list-style: none;

        strong {
          color: #fff;
        }
      }
    }

    a {
      text-decoration: none;

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5.5rem;
        width: 18rem;
        border-radius: 100px;
        background: transparent;
        white-space: nowrap;
        color: #fff;
        border: 2px #fff solid;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        font-weight: 100;
        font-family: "tenon";
        gap: 0.5rem;
        position: relative;
        z-index: 0;

        &::after {
          position: absolute;
          content: "";
          width: 0%;
          height: 100%;
          border-radius: 100px;
          background: #ff005c;
          z-index: -1;
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          color: #eee;
          border: 2px #ff005c solid;

          &::after {
            width: 100%;
            behavior: smooth;
          }
        }
      }
    }
  }
`;

const items = [
  {
    title: "Monetize Your Account:",
    description: "Turn your passion for fashion into a rewarding venture.",
  },
  {
    title: "Create Your Own Fashion Community:",
    description: "Rally your followers and build your fashion empire.",
  },
  {
    title: "Sponsorships:",
    description: "Attract sponsorships and collaborations from top brands.",
  },
  {
    title: "Exclusive Access:",
    description: "Enjoy premium brand coupons and benefits.",
  },
];

function Influencer() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        stiffness: 100,
        damping: 5,
      },
    },
  };
  return (
    <InfluencerContainer>
      <div className="left">
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          Attain Influencer Status and Lead the Fashion Community
        </motion.h1>
        <motion.p variants={variants} initial="hidden" whileInView="visible">
          Congratulations on reaching Level 25! The Influencer status awaits
          fashion icons like you. Embrace the power of influence, monetize your
          account, and pave the way for a fashion community of your own. With
          FAD's Influencer status, you gain access to exclusive benefits
        </motion.p>
      </div>
      <div className="right">
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          <h1>For Influencers</h1>
        </motion.h1>
        <motion.ul
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            stiffness: 100,
            damping: 5,
          }}
        >
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1, // Staggered delay of 0.5 seconds for each item
                duration: 0.5,
                ease: "easeInOut",
                stiffness: 100,
                damping: 5,
              }}
            >
              <strong>{item.title}</strong> {item.description}
            </motion.li>
          ))}
        </motion.ul>

        <Link href="/">
          {" "}
          <button className="button">Apply For Influencer </button>
        </Link>
      </div>
    </InfluencerContainer>
  );
}

export default Influencer;
