import React from "react";

export default function Home(){
  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <h1>{str}</h1>);
  }


  return(
        <div className="container-fluid container-homepage">
          <div className="row">
            <div className='col-12 col-lg-8'>
              <div className='banner-content'>
                <p>UNLEASH YOUR INNER CHAMPION</p>
                <NewlineText text={'Basketball\nand technology\nat its best'} />
                <p className='lead-text'>FX will help you to track your progress and freeing up time for what really matters.</p>
              </div>
            </div>
          </div>
        </div>
  )
}