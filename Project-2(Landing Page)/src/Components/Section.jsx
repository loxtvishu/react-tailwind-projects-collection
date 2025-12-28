import React from 'react'
import Button from './Button'
import SectionFooter from './SectionFooter'

const Section = () => {
    return (
     <div className="section">
           <section>
            <div className="center">
                <h1>Unleash Lorem ipsum ipisicing elit. Explicabo, aliquid.</h1>
                <p> Lorem ipsum dolor, sm dolor sit amet consectetur. consec Lorem ipsum dolor sit amet consectetur. tetur adipisicing elit. Sit, error?</p>
                <Button label="Start Your Own Journey" />
            </div>
            <SectionFooter/>
        </section>
     </div>
    )
}

export default Section