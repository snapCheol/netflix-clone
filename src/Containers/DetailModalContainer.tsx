import React, { useCallback } from 'react';
import DetailModal from '../Components/DetailModal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/modules';
import { closeDetailModal } from '../redux/modules/media';

const DetailContainer = () => {
  const { isDetailModalOpen } = useSelector((state: RootState) => state.media);
  const { loading, data } = useSelector(
    (state: RootState) => state.media.detailMedia
  );
  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    dispatch(closeDetailModal());
  }, [dispatch]);
  return (
    <DetailModal
      loading={loading}
      data={data}
      isDetailModalOpen={isDetailModalOpen}
      closeModal={closeModal}
    />
  );
};

export default DetailContainer;
