import Image from 'next/image';

import seminarIcon from '@/public/icons/seminar-icon.png';
import webinarIcon from '@/public/icons/webinar-icon.png';
import videoIcon from '@/public/icons/video-lecture-icon.png';
import audioIcon from '@/public/icons/audio-recording-icon.png';
import classes from './page.module.css';

const AboutPage = () => {
    return (
        <>
      <header className={classes.header}>
        <h1>
          Naší vášní je: <span className={classes.highlight}>Vnitřní proměna</span>
        </h1>
        <p>Zůčastněte se našich jedinečných kurzů a staňte se tak součástí nové vlny proměny v naší zemi.</p>
      </header>
      <main className={classes.main}>
         <ul className={classes.perks}>
          <li>
            <p>Přijeďte na seminář probíhající naživo</p>
            <Image src={seminarIcon} alt="A seminar icon." />
          </li>
          <li>
            <p>Zakuste proměnu z pohodlí domova</p>
            <Image src={webinarIcon} alt="A webinar icon." />
            
          </li>
          <li>
          <p>Shlédněte přednášku na vámi poptávané téma</p>
            <Image
              src={videoIcon}
              alt="A video lecture icon."
            />
            
          </li>
          <li>
            <p>Pusťte si audio k jiné smysluplné činnosti</p>
            <Image
              src={audioIcon}
              alt="An audio recording icon."
            />
            
          </li>
        </ul>
      </main>
    </>
    );
};

export default AboutPage;