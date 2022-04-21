import React, { useRef, useState, useEffect } from "react";
import Btn, { BtnProps } from "components/buttons/Btn";
import ImagePreview from "components/commons/ImagePreview";

interface Props extends BtnProps {
  accept?: string;
  max?: number;
  setData: Function;
  data?: any;
}

export default function BtnFiles({
  accept,
  text,
  max,
  className,
  setData,
  data,
}: Props) {
  const [fileDataUrl, setFileDataUrl] = useState<string>();
  const inputFileRef: React.MutableRefObject<null | HTMLInputElement> =
    useRef(null);
  const multiple = !!(max && max > 1);

  useEffect(() => {
    let fileReader: null | FileReader,
      isCancel = false;
    if (Array.isArray(data.files) && data.files.length) {
      const file = data.files[0];
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target as FileReader;
        if (result && !isCancel) {
          setFileDataUrl(result as string);
        }
      };
      fileReader.readAsDataURL(file);
      return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
      };
    }
  });
  const OnBtnImages = () => {
    if (inputFileRef.current !== null) inputFileRef.current.click();
  };

  //
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.currentTarget.files;
    setData((prev: Obj) => {
      if (!result || !result.length) {
        return prev;
      }
      if (multiple) {
        let files = prev.files ? [...prev.files, ...result] : [...result];
        if (files.length >= max) files.splice(max);
        return { ...prev, files };
      }
      return { ...prev, files: [result[0]] };
    });
  };

  return (
    <div className="w-46">
      <input
        type="file"
        accept={accept || ".jpg,.jpeg"}
        className="hidden"
        multiple={multiple}
        name="files"
        ref={inputFileRef}
        onChange={onChange}
        value={""}
      />
      {fileDataUrl ? (
        <ImagePreview
          fileDataUrl={fileDataUrl}
          onClick={OnBtnImages}
          className="w-44 object-cover"
        />
      ) : (
        <Btn
          className={`${className || ""}`}
          onClick={OnBtnImages}
          text={text}
        />
      )}
    </div>
  );
}
