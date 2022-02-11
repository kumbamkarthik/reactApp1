import Urus from './Urus.jpg'
function Main(){
    return(
        <div className="split">
            <div>
            <br></br>
            <img src={Urus} width="400px"></img>
            </div>
            <div>
            <h2 className="head">Facts about Lamborghini Urus</h2>
            <ul>
                <li>The Urus is powered by a 
                    twin-turbo V-8 that makes a stout 641 horsepower, 
                    burbles deeply when idling, and absolutely howls under full throttle.</li>
                <li>Those wealthy enough to afford a Urus likely don't care about fuel economy, 
                    but Lamborghini's heaviest model sure likes to drink. </li>
                <li>Inside, occupants are treated to a dramatic cabin that's classic Lambo.</li>
                <li>Every Urus is packed with the latest connectivity and infotainment features.</li>
                <li>Lamborghini quotes a top speed of 189.5 mph for the stock version.</li>
                <li>Typically armored to Level A9/B6+, this bulletproof Lamborghini
                     Urus is protected against 7.62mm lead core, 5.56x45 and M80 ball rounds</li>
                <li>With extreme proportions, 
                    breathtaking design, extraordinary driving dynamics and heart-pounding performance</li>
                <li>Lamborghini Urus is the first Super Sport Utility Vehicle in the world.</li>
            </ul>
            </div>
        </div>
        )
}
export default Main;