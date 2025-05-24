'use client';

//imports
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ImagePicker from './ImagePicker';
import CourseActionButton from './CourseActionButton';
import classes from './page.module.css';

export default function CourseFields({
  defaultValues = {},
  requireImage = false,
  onSubmit,
  actionType = 'create'
}) {
  const [state, setState] = useState({
    loading: false,
    success: false,
    message: null,
    errors: {}
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const image = e.target.elements.image?.files?.[0];

    if (requireImage && (!image || image.size === 0)) {
      setState(prev => ({
        ...prev,
        loading: false,
        errors: { image: 'Nahrajte prosím obrázek.' },
        message: null
      }));
      return;
    }

    setState(prev => ({ ...prev, loading: true, errors: {}, message: null }));

    try {
      const response = await onSubmit(formData);

      if (response?.redirected) {
        window.location.href = response.url;
      } else {
        setState({
          loading: false,
          success: true,
          message: { text: 'Kurz byl úspěšně uložen!', success: true },
          errors: {}
        });
      }
    } catch (err) {
      console.error('Submit error:', err);
      setState({
        loading: false,
        success: false,
        message: { text: 'Chyba při ukládání kurzu.', success: false },
        errors: {}
      });
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
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

      <ImagePicker
        label="Obrázek"
        name="image"
        defaultValue={defaultValues.image}
        error={state.errors.image}
      />

      {state.message && (
        <p style={{ color: state.message.success ? 'green' : 'red', marginTop: '1rem' }}>
          {state.message.text}
        </p>
      )}

      <div className={classes.actions} style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
        {actionType === 'edit' && (
          <button
            type="button"
            onClick={handleCancel}
            className={classes.cancelButton}
          >
            Zrušit
          </button>
        )}
        <CourseActionButton
          actionType={actionType}
          loading={state.loading}
        />
      </div>
    </form>
  );
}
