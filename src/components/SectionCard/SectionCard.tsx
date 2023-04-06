import React from 'react';
import { section } from '../../shared/interfaces';
import './SectionCard.scss'

export const SectionCard = (props: section) => {

  return (
    <div className='sectionCard'>
      <div className='sectionHeader'>{props.header}</div>
      {
        props.topics.map(topic => {
          return (
            <>
              <div className='sectionTitle'>{topic.title}</div>
              <div>{topic.subTitle}</div>
              {
                <ul>
                  {
                    topic.points.map(point => {
                      return (
                        <li>{point}</li>
                      )
                    })
                  }
                </ul>

              }
            </>
          )
        })
      }
      <hr />
    </div>
  )
}