import React from "react";
import logoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-black text-white p-10">
      <div className="w-11/12 md:w-10/12 mx-auto footer sm:footer-horizontal">
        <aside>
          <img className="w-20 h-20 ml-5" src={logoImg} alt="" />
          <p className="mt-2">
            At HERO.IO, we craft innovative apps designed to <br /> make
            everyday life simpler, smarter, and more exciting.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Development</a>
          <a className="link link-hover">UI/UX Design</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">License</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
