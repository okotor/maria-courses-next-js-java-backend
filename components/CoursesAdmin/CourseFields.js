'use client';

//imports
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
// import ImagePicker from './ImagePicker';
import { getVideoUrl } from "@/utils/media";
import MediaPicker from './MediaPicker';
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

  const imageInputRef = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Raw description input:', formData.get('courseDescription'));
    const imageFile = imageInputRef.current?.files?.[0];

    if (requireImage && (!imageFile || imageFile.size === 0)) {
      setState(prev => ({
        ...prev,
        loading: false,
        errors: { ...prev.errors, image: 'Nahrajte prosím obrázek.' },
        message: null
      }));

      // Scroll to the image picker and focus the button
      const imageInput = imageInputRef.current;
      if (imageInput && imageInput.closest) {
        const button = imageInput.closest('div').querySelector('button');
        if (button) button.focus();
      }

      return;
    }

    setState(prev => ({ ...prev, loading: true, errors: {}, message: null }));

    try {
      const data = await onSubmit(formData);
      console.log('[EDIT RESPONSE]', data);

      if (data.success && data.redirectTo) {
        window.location.href = data.redirectTo;
      } else if (data.success) {
        setState({
          loading: false,
          success: true,
           message: {
          text: actionType === 'edit'
            ? 'Kurz byl úspěšně upraven!'
            : 'Kurz byl úspěšně uložen!',
          success: true
        },
          errors: {}
        });
      } else {
        console.log(data)
        throw new Error(
          data.message ||
          (actionType === 'edit'
            ? 'Chyba při úpravě kurzu.'
            : 'Chyba při ukládání kurzu.')
        );
      }
    } catch (err) {
      console.error('Submit error:', err);
      setState({
        loading: false,
        success: false,
        message: {
        text: err.message || 'Chyba při ukládání kurzu.',
        success: false
      },
      errors: err.errors || err.response?.data?.errors || {}
      });
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit} noValidate>
      <fieldset disabled={state.loading || state.success} className={classes.fieldset}>
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
          <label htmlFor="courseDescription" >Popis kurzu</label>
          <label
            htmlFor="courseDescription"
            style={{ fontSize: '0.9rem', color: '#999', textAlign: 'center'}}
          >
          <strong>**tučně**</strong>,
             <em> *kurzíva*</em>, <u>__podtržený__</u> a
            <a
              href="https://link-na-odkaz.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0070f3', textDecoration: 'none' }}
              title="[Odkaz](https://link-na-odkaz.com)"
            > [Odkaz](https://link-na-odkaz.com)</a>
          
          </label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            rows="10"
            defaultValue={defaultValues.courseDescription || ''}
            required
          ></textarea>
        </p>

        <div className={classes.mediaRow}>
          <MediaPicker
            label="Obrázek"
            name="image"
            type="image"
            defaultValue={defaultValues.image}
            required={requireImage}
            error={state.errors.image}
            inputRef={imageInputRef}
          />
          <MediaPicker
            label="Video (Jen pro online kurzy, v mp4)"
            name="video"
            type="video"
            defaultValue={defaultValues.slug ? getVideoUrl(defaultValues.slug) : ''}
            error={state.errors.video}
          />
        </div>

        {/* <ImagePicker
          label="Obrázek"
          name="image"
          defaultValue={defaultValues.image}
          error={state.errors.image}
        />*/}

        {/* Video Upload */}
        {/* <div className={classes.videoControl}>
          <label htmlFor="video">Video (volitelné, .mp4)</label>
          <input
            type="file"
            id="video"
            name="video"
            accept="video/mp4"
            className={classes.videoInput}
          />
          {defaultValues.video && typeof defaultValues.video === 'string' && (
            <p className={classes.videoFileInfo}>
              Aktuální video: <em>{defaultValues.video}</em>
            </p>
          )}
        </div>  */}
      </fieldset>
      <div className={classes.actions} style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          {actionType === 'edit' && (
            <button
              type="button"
              onClick={handleCancel}
              className={classes.cancelButton}
              disabled={state.loading || state.success}
            >
              Zrušit
            </button>
          )}
          <CourseActionButton
            actionType={actionType}
            loading={state.loading}
            message={state.message}
            disabled={state.success}
          />
        </div>  
    </form>
  );
}
