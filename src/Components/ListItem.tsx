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

type ListItemTypes = {
  mediaType: string;
  id: number;
  data: MediaListType | null;
};

const ListItem = ({ data, id, mediaType, ...props }: ListItemTypes) => {
  const [hover, setHover] = useState(false);

  const toggleHover = useCallback(() => {
    setHover(!hover);
  }, [hover]);

  const handleDetailDialog = useCallback((id: number, mediaType: string) => {
    console.log(id, mediaType);
  }, []);

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
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
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
