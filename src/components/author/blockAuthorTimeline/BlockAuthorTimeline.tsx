import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimeLine from '../../../model/timeline';
import { useTranslation } from 'react-i18next';

interface TimelineProps {
  timeLines: TimeLine[];
}

function BlockAuthorTimeline(props: TimelineProps): JSX.Element {
  const { t } = useTranslation();

  const mappedItems = props.timeLines.map((val: TimeLine) => {
    return {
      year: val.year,
      description: t(val.description),
    };
  });

  return (
    <VerticalTimeline>
      {mappedItems.map((val2: { year: any; description: string }, i: string | number | undefined) => (
        <VerticalTimelineElement
          key={i}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(78, 93, 108)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(78, 93, 108)' }}
          date={val2.year}
          iconStyle={{ background: 'rgb(78, 93, 108)', color: '#DF691A' }}
        >
          <>{val2.description}</>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default BlockAuthorTimeline;
