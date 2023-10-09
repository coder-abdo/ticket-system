import { useState, useCallback } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
export const useImageDrop = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback<
    <T extends File>(
      acceptedFiles: T[],
      fileRejections: FileRejection[],
      event: DropEvent,
    ) => void | undefined
  >((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((prevFiles) => {
        return [
          ...prevFiles,
          ...acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) }),
          ),
        ];
      });
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return { getRootProps, getInputProps, isDragActive, files };
};
