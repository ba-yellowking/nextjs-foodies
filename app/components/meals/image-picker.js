"use client";

import classes from "./image-picker.module.css";
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {
  // Для превью изображения
  const [pickedImage, setPickedImage] = useState();

  // Для связи между input и button
  const imageInput = useRef();

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  function handlePickClick() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>
        {label}
        <div className={classes.controls}>

          <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && (
              <Image
                src={pickedImage}
                alt="The image selected by the user"
                fill
              />
            )}
          </div>

          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
            // multiple={} Для выбора нескольких изображений
          />

          <button className={classes.button} type="button" onClick={handlePickClick}>
            Pick an Image
          </button>

        </div>
      </label>
    </div>
  )
}