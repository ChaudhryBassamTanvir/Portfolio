import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
          {" "}
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a className="cursor-pointer" href={CONTACT.email}>
            <p className="my-4 border-b ">{CONTACT.email}</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
