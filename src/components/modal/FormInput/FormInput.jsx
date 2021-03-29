import React from 'react'
import './FormInput.scss'

const FormInput = (props) => {
    return (
      <div className="input-wrapper">
        <label className="top" htmlFor={props.for}>
          {props.upperLabel}
        </label>
        {
          {
            input: (
              <input
                id={props.for}
                type={props.type}
                name={props.name}
                onChange={props.handleChange}
                value={props.value}
              />
            ),
            textArea: (
              <textarea
                id={props.for}
                type={props.type}
                name={props.name}
                onChange={props.handleChange}
                value={props.value}
              />
            ),
            // dropdown: (
            //   <Dropdown
            //     id={props.for}
            //     value={props.value}
            //     listitems={props.data}
            //     toggleItem={props.handleChange}
            //   />
            // ),
          }[props.inputType]
        }
        {
          props.bottomLabel && 
        <label className="bottom" htmlFor="props.for">
          {props.bottomLabel}
        </label>
        }
        
      </div>
    );
  };
export default FormInput
