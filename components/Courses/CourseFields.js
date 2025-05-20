import React from 'react';
import ImagePicker from '@/components/Courses/ImagePicker';
import classes from './page.module.css';


export default function CourseFields({ defaultValues = {} }) {
  return (
    <>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Jméno přednášejícího</label>
          <input
            type="text"
            id="name"
            name="lecturer"
            defaultValue={defaultValues.lecturer || ''}
            required
          />
        </p>
        <p>
          <label htmlFor="email">Email přednášejícího</label>
          <input
            type="email"
            id="email"
            name="lecturerEmail"
            defaultValue={defaultValues.lecturerEmail || ''}
            required
          />
        </p>
      </div>

      <p>
        <label htmlFor="title">Název</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={defaultValues.title || ''}
          required
        />
      </p>

      <p>
        <label htmlFor="summary">Abstrakt</label>
        <input
          type="text"
          id="summary"
          name="summary"
          defaultValue={defaultValues.summary || ''}
          required
        />
      </p>

      <p>
        <label htmlFor="courseDescription">Popis kurzu</label>
        <textarea
          id="courseDescription"
          name="courseDescription"
          rows="10"
          defaultValue={defaultValues.courseDescription || ''}
          required
        ></textarea>
      </p>
      <ImagePicker label="Obrázek" name="image" defaultValue={defaultValues.image} />
    </>
  );
}