import React from 'react';
import { portfolioInfo } from '../../shared/interfaces';
export const HeaderCard = (props: portfolioInfo) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}