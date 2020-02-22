import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function BlockAuthorTimeline(props: any) {
  return (
    <>
      {props.data.line.map((val: { time: any; toDo: React.ReactNode; }, i: string | number | undefined)=>
          <VerticalTimelineElement key = {i}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(78, 93, 108)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(78, 93, 108)' }}
            date={val.time}
            iconStyle={{ background: 'rgb(78, 93, 108)', color: '#DF691A' }}
          >
            <>
              {val.toDo}
            </>
          </VerticalTimelineElement>
        )}
    </>
  );
}

export default BlockAuthorTimeline;