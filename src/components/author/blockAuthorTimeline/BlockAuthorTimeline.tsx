import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function BlockAuthorTimeline(props: any) {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(78, 93, 108)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(78, 93, 108)' }}
          date={props.data.line[0].time}
          iconStyle={{ background: 'rgb(78, 93, 108)', color: '#DF691A' }}
        >
          <p>
            {props.data.line[0].toDo}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default BlockAuthorTimeline;