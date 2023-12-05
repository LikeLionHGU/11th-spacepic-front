import axiosInstance from '../axios';

export const GetDummyPhotos = async () => {
  const response = await axiosInstance.get(`/api/get/sample`);
  return response;
};

export const GetPhotos = async (memberId) => {
  const response = await axiosInstance.get(`/api/post/get/member/${memberId}`);
  return response;
};

export const likePhoto = async (postId, memberId) => {
  const response = await axiosInstance.post('/post/like', {
    memberId,
    postId,
  });
  return response;
};
