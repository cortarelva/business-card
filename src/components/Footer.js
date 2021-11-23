
import {
    FaTwitterSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare,
} from 'react-icons/fa';


export default function Footer() {
     

    return (
        <section className="footer-container">
            <div>
                <ul>
                    <li><FaTwitterSquare /></li>
                    <li><FaFacebookSquare /></li>
                    <li><FaInstagramSquare /></li>
                    <li><FaLinkedin /></li>
                    <li><FaGithubSquare /></li>
                </ul>  
           </div>
        </section>  
    );
}                                             