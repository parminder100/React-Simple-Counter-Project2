import { useState } from "react";
import "../Counter/Counter.css";

const Counter = () =>{
    const [count, setCount] = useState(0);
    return(
        <>
            <main className="counter-main">
                <section className="counter-section">
                    <div className="counter-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="counter-container">
                                        <div className="counter-heading">Counter</div>
                                        <div className="counter-number" 
                                            style={{color: count > 0 ? '#008000' : 
                                            (count === 0 ? '#000' : '#ff0000')}}
                                            >
                                            {count}
                                        </div>
                                        <div className="counter-controls">
                                            <button className="counter-decrease-btn"
                                                onClick={()=>setCount(count - 1)}
                                                >
                                                Decrease
                                            </button>
                                            <button className="counter-decrease-btn"
                                                onClick={()=>setCount(0)}
                                                >
                                                Reset
                                            </button>
                                            <button className="counter-decrease-btn"
                                                onClick={()=>setCount(count + 1)}
                                                >
                                                Increase
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Counter;