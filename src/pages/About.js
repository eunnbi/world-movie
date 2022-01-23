import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./scss/About.scss";

const About = () => {
    const [setShowNav] = useOutletContext();
    useEffect(() => setShowNav(false), []);
    return (
        <main className="about__main">
            <h1 className="about__title">about us</h1>
            <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, 
            aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? 
            Placeat ratione hic aspernatur error blanditiis?
            </p>
        </main>
    );
}

export default About;