import React from "react";

interface Props extends React.HTMLProps<HTMLImageElement> {
  fileDataUrl: string;
  onClick: React.MouseEventHandler<HTMLImageElement>;
}

const ImagePreview: React.FC<Props> = ({ fileDataUrl, onClick, className }) => {
  return <img src={fileDataUrl} onClick={onClick} className={className} />;
};

export default ImagePreview;
