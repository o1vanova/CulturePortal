import * as React from 'react';

interface Some {
  title: string,
  isDisplayed: boolean 
}

const Test = (props: Some) => {
  return (
    <div>
      <div>{props.title}</div>
    </div>
  );
};

export default Test;