const BASE_S3_URL = "https://marian-courses-bucket.s3.us-east-1.amazonaws.com/public";

export const getImageUrl = (filename) => {
  if (!filename) return null;
  return `${BASE_S3_URL}/${filename}`;
};

export const getVideoUrl = (slug) => {
  if (!slug) return null;
  return `${BASE_S3_URL}/videos/${slug}-video.mp4`;
};