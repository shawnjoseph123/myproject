import React from 'react'
import "./CSS/Accordion.css";

const Accordion = ({heading, paragraph,target,control}) => {
  return (
    <>
    <div className="accordion-container">
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={control}>
        {heading}
      </button>
    </h2>
    <div id={control} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">{paragraph}</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Accordion