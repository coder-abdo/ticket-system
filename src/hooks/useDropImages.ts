import { useDropzone } from "react-dropzone";
export const useImageDrop = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone();
  return { getRootProps, getInputProps, isDragActive };
};
