import React from "react"
import Login from "../Login";
import Header from "../Header";
import Footer from "../Footer";

export default function Home () {
  return (
    <div>
      <Header/>
      <div className='loginHeader'>Login</div>
      <section className="section">
              <Login />
      </section>
      <Footer/>
    </div>
  );
}

