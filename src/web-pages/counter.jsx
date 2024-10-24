import Header from "../re-useable components/header";
import Footer from "../re-useable components/footer";
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <div className="counter my-5">
        <div className="title text-center my-5">
          <h1>Counter</h1>
          <div className="counter-no {count}">
            <div className="counts">
              <h2 className="buttons">{count}</h2>
              <button
                className="btn btn-success mx-3"
                onClick={() => setCount(count + 1)}
              >
               
                increment{" "}
              </button>
              <button
                className="btn btn-danger mx-3"
                onClick={() => setCount(count - 1)}
              >
                
                decrement{" "}
              </button>
              <button
                className="btn btn-secondary mx-3"
                onClick={() => setCount(0)}
              >
                
                reset{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Counter;
