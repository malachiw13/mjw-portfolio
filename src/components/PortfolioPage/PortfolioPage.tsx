import React from 'react';
import { testPortfolio } from '../../shared/contants';
import { ContactInfo } from '../ContactInfo';
import { HeaderCard } from '../HeaderCard/HeaderCard';
import { SectionCard } from '../SectionCard/SectionCard';

export const PortfolioPage = () => {
  return (
    <>
      <HeaderCard {...testPortfolio}/>
      {
        testPortfolio.sections.map(section => {
          return <SectionCard {...section} />
        })
      }
      <ContactInfo {...testPortfolio}/>
    </>
  )
}