import { API_BASE_URL } from "../config/api";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post('/upload/image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data; // returns "/uploads/..."
};

export const getAllUploadedImages = async () => {
  const response = await axios.get('/upload/images');
  return response.data; // array of image paths
};
