import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { useState } from 'react';

export default function Card({index, title, body, city, state, country, pic, phone, email, uuid}) {
    const arrow = {
        color: 'whitesmoke',
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px'
    }
    const arrowDiv = {
        border: '1px solid gray',
        borderRadius: '100%',
        textAlign: 'center',
        //padding: '.5rem',
        width: "20%",
        margin: '0 auto',
    }
    const [activeCard, setActiveCard] = useState("");
    const [arrowContent, setArrowContent] = useState("⬇");
    function randomBio () {
        let rnd = Math.round(Math.random()*6);
        //let txt = "";
        switch(rnd){
            case 0:
                setActiveCard("Highly motivated, ambitious & charismatic Web Developer bringing enthusiasm and detailed understanding of various programming languages to webpage planning, development and maintenance. Experience designing and developing sites from concept to rollout. I enjoy creating products with the user in mind, focusing on smooth processes and experiences. My interests include guerrilla usability testing, baking, architecture, gamification, Tilda Swinton, 3D printing, open-source software, modelling and rendering in Blender, Dungeon and Dragons, making music in Ableton Live, futurism, and VR/AR.");
                break;
            case 1:
                setActiveCard("Technology is a byproduct of constant iteration and improvement from people with a passion for problem solving. That passion is one of the many reasons I feel such an innate gravitation towards tech. From my spell in Computing Science at Simon Fraser University working with Python, C++, and assembly, moshed with the likeness of discrete mathematics, linear algebra and calculus - I found a deep connection and sense of wonder in the world of logic, math and computers.");
                break;
            case 2:
                setActiveCard("A team player with a strong willingness to learn and adapt to new opportunities. I am a very passionate individual towards programming and am working on my own personal projects and studies along side school to gain more experience.");
                break;
            case 3:
                setActiveCard("In my final term of Business Information Technology at RRC, graduating in December 2022, and ready to start my career as a designer, back-end developer, API developer, App developer, or full-stack software developer.");
                break;
            case 4:
                setActiveCard("Athabasca University student with a passion for full-stack web development and mobile app development. Let's build something cool together!");
                break;
            case 5:
                setActiveCard("Lots of experience in Web, Worked alongside product managers and devs to gather requirements in design sessions, implemented frontend and backend features/bug fixes, daily standups, tracked progress with project management software.");
                break;
            case 6:
                setActiveCard("I enjoy creating products with the user in mind, focusing on smooth processes and experiences. My interests include guerrilla usability testing, baking, architecture, gamification, Tilda Swinton, 3D printing, open-source software, modelling and rendering in Blender, Dungeon and Dragons, music in Ableton Live, futurism, and VR.");
                break;
            default:
                setActiveCard("");
                break;
        }
       setArrowContent("ꜛ");
    }
  return (
    <div className={styles.card} key={index} onClick={ () => {if(activeCard == ""){randomBio();} else {setActiveCard("");setArrowContent("⬇");}} }> 
        <div className={styles.cardtop}>
            <h2 className={styles.h2two}>{title}</h2>
        </div>
        <div className={styles.servicecard}>
            <Image src={pic} alt="hello" width={128} height={128}/>
            <a href={"profile/"+uuid}>View Full Profile</a>
            <ul>
	            <li>
                    <p><span>{body}</span></p>
                    <p><span>{city}, {state}</span></p>
                    <p><span>{country}</span></p>
                    <p><span>{phone}</span></p>
                    <p><span>{email}</span></p>
                    <div className={styles.arrowd} >
                        <button type='button' style={styles.arrow} aria-roledescription="Click to show or hide developer description">{arrowContent}</button> 
                    </div>
                    <p>{activeCard}</p>

                </li>
            </ul>
        </div>
    </div>
    )};