import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { ButtonColors, PresetImageColors } from "../../../utils/CommonStyle";

const PresetThumbnailUploadStyles = makeStyles({
  root: {
    display: "grid",
    rowGap: "12px",
    justifyItems: "center",
  },

  imageWrap: {
    width: "180px",
    height: "180px",
    boxShadow: PresetImageColors.SHADOW,
  },

  uploadInput: {
    display: "none",
  },

  uploadButton: {
    color: ButtonColors.COLOR,
    border: `1px solid ${ButtonColors.COLOR}`,
    borderRadius: "12px",
    boxShadow: ButtonColors.SHADOW,
    margin: "0px 3px",

    "&:hover": {
      border: `1px solid white`,
    },
  },
});

type PresetThumbnailUploadProps = {
  thumbnailImg: any;
  handleThumbnailImageChange: any;
};


export default function PresetThumbnailUpload({
  thumbnailImg,
  handleThumbnailImageChange,
}:PresetThumbnailUploadProps) {
  const classes = PresetThumbnailUploadStyles();

  const [currImg, setCurrImg] = useState<string>("");

  useEffect(() => {
    setCurrImg(thumbnailImg.thumbnailImgURL);
    console.log(currImg);
  },[])

  //파일 변환
  const encodeFileToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setCurrImg(base64.toString());
      }
    };
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      encodeFileToBase64(files[0]);
      handleThumbnailImageChange(files[0]);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <img className={classes.imageWrap} src={currImg} alt="preset-image" />
      </div>
      <div>
        <label>
          <input
            className={classes.uploadInput}
            accept="image/*"
            type="file"
            onChange={handleImageUpload}
          />
          <Button
            variant="outlined"
            size="small"
            component="span"
            startIcon={<CloudUploadIcon />}
            sx={{
              color: ButtonColors.COLOR,
              border: `1px solid ${ButtonColors.COLOR}`,
              borderRadius: "12px",
              boxShadow: ButtonColors.SHADOW,
              margin: "0px 3px",

              "&:hover": {
                border: `1px solid white`,
              },
            }}
          >
            Upload
          </Button>
        </label>
      </div>
    </div>
  );
}
