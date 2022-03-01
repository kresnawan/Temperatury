import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import '../css/styles.css'

const Main = () => {

    const [celcius, setCelcius] =  useState();
    const [reamur, setReamur] = useState();
    const [fahrenheit, setFahrenheit] = useState();
    const [kelvin, setKelvin] = useState();

    useEffect(() =>{
        document.title = "Temperatury";
    }, []);

    function round( x ) {
        // Digunakan untuk membulatkan bilangan
        // Supaya angka dibelakang koma tidak terlalu banyak

        if ( x % Math.floor(x) === 0 ) {
            return x;
        } else if (x === 0) {
            return 0;
        } else {
            const a = x.toString(10);
            const c = a.split(".")[0];
            const b = a.split(".")[1].slice(0, 2);
    
            const d = c + "." + b;

            return parseFloat(d);
        }
        
    }

    return (
        <div className="body">
            <div className="container">
                <div className="content">
                    <div className="header">
                        <h2>Temperatury</h2>
                    </div>
                    <div className="input">
                        <div className="temp">
                            <label htmlFor="celcius">Celcius: </label>
                            <input type="number" autoComplete="off" id="celcius" value={ celcius } onChange={ (e) => {
                                                                                                                                                 
                                var index = e.target.valueAsNumber;
                                
                                if (isNaN(index)) {
                                    index = "";
                                } else {
                                    index = e.target.valueAsNumber;
                                }
                                
                                setCelcius(index)
                                setReamur(round((4 / 5) * index));
                                setFahrenheit(round((9 / 5) * index + 32))
                                setKelvin(round(index + 273))

                                // if (e.target.value === "") {
                                //     e.target.value = 0;
                                // }
                            } } />
                        </div>
                        
                        <div className="temp">
                            <label htmlFor="reamur">Reamur: </label>
                            <input type="number" autoComplete="off" id="reamur" value={ reamur } onChange={ (e) => {

                                var index = e.target.valueAsNumber;
                                                                
                                if (isNaN(index)) {
                                    index = "";
                                } else {
                                    index = e.target.valueAsNumber;
                                }

                                setReamur(index)
                                setCelcius(round((5 /4) * index))
                                setFahrenheit(round((9 / 4) * index + 32))
                                setKelvin(round((5 / 4) * index + 273))
                            
                            }}/>
                        </div>

                        <div className="temp">
                            <label htmlFor="fahrenheit">Fahrenheit: </label>
                            <input type="number" autoComplete="off" id="fahrenheit" value={ fahrenheit } onChange={e => {

                                var index = e.target.valueAsNumber;
                                
                                if (isNaN(index)) {
                                    index = "";
                                } else {
                                    index = e.target.valueAsNumber;
                                }

                                setFahrenheit(index)
                                setCelcius(round((5 / 9) * (index - 32)))
                                setReamur(round(4 / 9 * (index - 32)))
                                setKelvin(round((5 / 9) * (index - 32) + 273))
                            }} />
                        </div>

                        <div className="temp">
                            <label htmlFor="kelvin">Kelvin: </label>
                            <input type="number" autoComplete="off" id="kelvin"  value={ kelvin } onChange={(e) => {

                                var index = e.target.valueAsNumber;
                                                                
                                if (isNaN(index)) {
                                    index = "";
                                } else {
                                    index = e.target.valueAsNumber;
                                }

                                setKelvin(index)
                                setCelcius(round(index - 273))
                                setReamur(round(4 / 5 * (index - 273)))
                                setFahrenheit(round(9 / 5 * (index - 273) + 32))

                            }} />
                        </div>            
                    </div>
                    <div className="bottom">
                            <p>Open source at</p>
                            <div className="icons">
                                <a href="https://github.com/sanjayakris/temperatury" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={ faGithub } className="github icon" />
                                </a>
                                {/* <a href="https://facebook.com/sanjayakurisu" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={ faFacebook } className="facebook icon" />
                                </a> */}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
