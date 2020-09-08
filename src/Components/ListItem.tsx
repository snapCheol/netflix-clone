import React, { useState, useCallback } from 'react';
import {
  Container,
  CardContainer,
  StillCut,
  Title,
  PreviewContainer,
  Overview,
} from './ListItemStyle';
import { MediaListType } from '../redux/modules/types';
import { IMAGE_PATH_PREFIX } from '../redux/modules/constant';
import { useDispatch } from 'react-redux';
import {
  fetchDetailMovie,
  fetchDetailTv,
  openDetailModal,
} from '../redux/modules/media';

type ListItemTypes = {
  mediaType: 'tv' | 'movie';
  id: number;
  data: MediaListType | null;
};

const ListItem = ({ data, id, mediaType }: ListItemTypes) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const toggleHover = useCallback(() => {
    setHover(!hover);
  }, [hover]);

  const handleDetailDialog = useCallback(
    (id: number, mediaType: string) => {
      dispatch(openDetailModal());
      if (mediaType === 'movie') {
        dispatch(fetchDetailMovie(id));
      } else {
        dispatch(fetchDetailTv(id));
      }
    },
    [dispatch]
  );
  const onDetailDialog = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      handleDetailDialog(id, mediaType);
    },
    [handleDetailDialog, id, mediaType]
  );

  if (!data) return null;
  return (
    <Container
      href="#"
      role="button"
      onClick={onDetailDialog}
      onMouseOver={toggleHover}
      onMouseOut={toggleHover}
      onFocus={toggleHover}
      onBlur={toggleHover}>
      <CardContainer>
        <StillCut bgImage={`${IMAGE_PATH_PREFIX}/w500${data.poster_path}`}>
          <PreviewContainer hover={hover}>
            <strong>{data.title || data.name}</strong>
            <Overview>
              {data.overview ? (
                data.overview
              ) : (
                <span className="blank">미디어 정보가 없습니다.</span>
              )}
            </Overview>
          </PreviewContainer>
        </StillCut>
        <Title>{data.title || data.name}</Title>
      </CardContainer>
    </Container>
  );
};

export default ListItem;
