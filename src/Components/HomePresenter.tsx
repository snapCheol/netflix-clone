import React from 'react';
import { MediaListType } from '../redux/modules/types';
import Section from './Section';
import Carousel from './Carousel';
import ListItem from './ListItem';

type HomePresenterType = {
  trendAlldayLoading: boolean;
  trendAlldayData: MediaListType[] | null;
  trendAlldayError: Error | null;
  trendAllWeekLoading: boolean;
  trendAllWeekData: MediaListType[] | null;
  trendAllWeekError: Error | null;
};

const HomePresenter = ({
  trendAllWeekLoading,
  trendAlldayData,
  trendAlldayError,
  trendAlldayLoading,
  trendAllWeekData,
  trendAllWeekError,
}: HomePresenterType) => {
  if (trendAlldayLoading || trendAllWeekLoading) return <p>로딩중...</p>;
  if (trendAlldayError || trendAllWeekError) return <p>에러 발생!!</p>;
  return (
    <>
      <Section title="지금 인기 있는 컨텐츠">
        <Carousel>
          {trendAlldayData?.map((media) => (
            <ListItem
              mediaType={media.title ? 'movie' : 'tv'}
              key={media.id}
              id={media.id}
              data={media}
            />
          ))}
        </Carousel>
      </Section>

      <Section title="한주 동안 인기 있는 컨텐츠">
        <Carousel>
          {trendAllWeekData?.map((media) => (
            <ListItem
              mediaType={media.title ? 'movie' : 'tv'}
              key={media.id}
              id={media.id}
              data={media}
            />
          ))}
        </Carousel>
      </Section>
    </>
  );
};

export default HomePresenter;
