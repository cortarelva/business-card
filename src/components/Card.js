

import Image from './Image';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Card() {
    return (
        <section className="card-background">
            <div className="image"></div>
            <div className="card">
                <Header />
                <Main />
                <Footer/>
            </div>
        </section>
    );
}