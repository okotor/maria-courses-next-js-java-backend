'use client';

import { useRef, useState, useEffect } from 'react';
import classes from './MediaPicker.module.css';

export default function MediaPicker({ label, name, type = 'image', defaultValue, required = false, error = null, inputRef }) {
  const internalRef = useRef();
  const resolvedRef = inputRef || internalRef;
  const [picked, setPicked] = useState(defaultValue || null);
  const [dragActive, setDragActive] = useState(false);
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    if (defaultValue && type === 'image') {
      setPicked(defaultValue);
    }
  }, [defaultValue, type]);

  function validateFile(file) {
    const maxSizeMB = type === 'image' ? 5 : 100;
    if (file.size > maxSizeMB * 1024 * 1024) {
      setLocalError(`Maximální velikost ${type === 'image' ? 'obrázku' : 'videa'} je ${maxSizeMB} MB.`);
      return false;
    }
    return true;
  }

  function handlePickClick() {
    inputRef.current.click();
  }

  function handleChange(event) {
    const file = event.target.files[0];
    if (!file || !validateFile(file)) {
      setPicked(null);
      return;
    }
    setPicked(type === 'image' ? URL.createObjectURL(file) : file.name);
    setLocalError(null);
  }

  function handleDrop(event) {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files[0];
    if (!file || !validateFile(file)) {
      setPicked(null);
      return;
    }
    setPicked(type === 'image' ? URL.createObjectURL(file) : file.name);
    setLocalError(null);
  }

  function handleDragOver(event) {
    event.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave() {
    setDragActive(false);
  }

  const preview =
    type === 'image' && picked ? (
      <img src={picked} alt="Preview" className={classes.previewImage} />
    ) : (
      <p>{picked ? picked : type === 'video' ? 'Video nevybráno.' : 'Obrázek nevybrán.'}</p>
    );

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={`${classes.controls} ${dragActive ? classes.dragActive : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className={classes.preview}>{preview}</div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept={type === 'image' ? 'image/*' : 'video/mp4'}
          ref={resolvedRef}
          onChange={handleChange}
          required={required}
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
          Vyber {type === 'image' ? 'obrázek' : 'video'}
        </button>
      </div>
      {localError && <p style={{ color: 'red' }}>{localError}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}