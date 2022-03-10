import Head from 'next/head'
import Image from 'next/image'
import navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import React, { useEffect } from "react"


let activebutton

function changeButton(id) {
  if (activebutton == null) {
    activebutton = document.getElementById("exp")
  }
  if (document.getElementById(id).classList.contains("unselectedButton")) {
    activebutton.classList.add("unselectedButton")
    activebutton.classList.remove("selectedButton")
    activebutton = document.getElementById(id)
    activebutton.classList.add("selectedButton")
    activebutton.classList.remove("unselectedButton")
  }
}

export default function Home() {
  return (
    <header>
      <div className='Title'>
        <h1>DeltaRager</h1>
      </div>
      <div className='About'>
        <h2>About me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className='Container'>
        <div className='HeaderButton'>
          <button className='selectedButton' id="exp" onClick={() => changeButton("exp")}>Experience</button>
          <button className='unselectedButton' id="show" onClick={() => changeButton("show")}>Showcase</button>
          <button className='unselectedButton' id="link" onClick={() => changeButton("link")}>Links</button>
        </div>
        <div className='Experience'>
          <div className='Titles'>
            <h2>Raincoat Games</h2>
            <h2 className='titlePos'>Programmer</h2>
          </div>
          <div className='Content'>
            <h3>Dec 2021 - Present</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </header>
  )
}
