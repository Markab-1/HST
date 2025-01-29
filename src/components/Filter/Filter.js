import React from 'react';

import s from './Filter.module.css';

const Filter = ({ minValue, maxValue, onChangeMin, onChangeMax }) => {
    return (
      <div>
        <p className={s.text}>You can filter the data:</p>
        <div className={s.inputBox}>
        <input 
          type="number"
          name="minId"
          value={minValue}
          pattern="[0-9]"
          title="input value"
          required
          onChange={onChangeMin}
          className={s.inputItem}
          style={{"width":"100px"}}
        />
        <div className={s.inputItem}> &#60; id &#60;</div>
        <input
          type="number"
          name="maxId"
          value={maxValue}
          pattern="[0-9]"
          title="input value"
          required
          onChange={onChangeMax}
          className={s.inputItem}
          style={{"width":"100px"}}
        />
        </div>
      </div>
    );
  };

  export default Filter;