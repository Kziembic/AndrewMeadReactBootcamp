import React from 'react';

export const Option = props => (
      <div>
        {props.optionText}
        <button 
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
        Remove
        </button>
      </div>
  );