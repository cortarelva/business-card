

import mailIcon from '../images/mailIcon.png';


export default function Header(){
    return (
        <section className="header">
            <h2>Laura Smith</h2>
            <p>Frontend Developer</p>
            <small><a href="#">laurasmith.website</a></small>
            <br/>
            <button className="email-button">
                <img src={mailIcon} alt="email icon" />
                <div>Email</div>
            </button>
        </section>
    );
}