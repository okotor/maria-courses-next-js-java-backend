import dotenv from 'dotenv';
import pkg from 'pg'; // Import the entire `pg` module
const { Pool } = pkg; // Destructure to get the `Pool` class

dotenv.config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.PG_DATABASE_URL,
});

const dummyCourses = [
  {
    title: "Jak digitalizovat a prodat ručně tvořené umění",
    date: "2025-01-01",
    slug: 'veronika-semi1',
    image: 'veronika-vytvarna.png',
    summary:
      "Když máš talent, dej o sobě vědět!",
    course_description: `
      1. Úvod do digitalizace:
         Základní principy a nástroje pro převedení fyzického umění do digitální podoby.

      2. Online platformy:
         Kde a jak nejlépe prezentovat a prodávat umělecká díla.

      3. Marketing pro umělce:
         Strategie propagace na sociálních sítích a tvorba osobní značky.

      4. Právní aspekty:
         Ochrana autorských práv a licencování digitálního obsahu.

      5. Automatizace prodeje:
         Jak si usnadnit práci pomocí online nástrojů a platforem.
    `,
    lecturer: 'Veronika Výtvarná',
    lecturer_email: 'vvytvarna@example.com',
  },
  {
     title: "Zdravý životní styl se Zoltánem",
     date: "2024-12-31",
     slug: 'zoltan-webi1',
     image: 'zoltan-zdravozivotnestylovy.png',
     summary:
       "Představujeme nejnovější a nejefektivnější metodu zdravého stravování.",
     course_description: `
       1. Zásady zdravého životního stylu:
          Jak správně nastavit každodenní režim pro dlouhodobé zdraví.
 
       2. Výživa a stravovací návyky:
          Jaké potraviny preferovat a jak je kombinovat.
 
       3. Pohyb a cvičení:
          Doporučené aktivity a jejich přínos pro zdraví.
 
       4. Mentální pohoda:
          Jak správně pracovat se stresem a vyvážit pracovní a osobní život.
 
       5. Dlouhodobá udržitelnost:
          Jak si vytvořit zdravé návyky, které vydrží.
     `,
     lecturer: 'Zoltán Zdravoživotněstylový',
     lecturer_email: 'zozd@example.com',
   },
   {
     title: "Vstříc duchovnímu, fyzickému i finančnímu zdraví s B-Bedřichem",
     date: "2024-07-18",
     slug: 'bedrich-vide1',
     image: 'bedrich-businessosportovni.png',
     summary:
       "Získej rovnouváhu ducha, duše i těla.",
     course_description: `
       1. Autogenní trénink:
          Jak dosáhnout vnitřní rovnováhy a duševního klidu.
 
       2. Fyzická kondice:
          Cvičení pro udržení zdraví a vitality.
 
       3. Finanční gramotnost:
          Jak efektivně hospodařit s penězi a investovat.
 
       4. Psychologie úspěchu:
          Jak si nastavit správné myšlení a dosáhnout svých cílů.
 
       5. Praktické aplikace:
          Jak spojit teorii s praxí a využít získané znalosti v každodenním životě.
     `,
     lecturer: 'Bedřich Businessosportovní',
     lecturer_email: 'busibeda@example.com',
   },
   {
     title: 'Workshop líčení s novým revolučním nástrojem Make-U-Up',
     date: "2025-01-20",
     slug: 'valerie-webi1',
     image: 'valerie-vynalezava.png',
     summary:
       "Buďte mezi tisícemi žen, které využívají revoluční metody líčení s Make-U-Up.", 
     course_description: `
       1. Úvod do moderního líčení:
          Jaké jsou nejnovější trendy a technologie v kosmetice.
 
       2. Použití Make-U-Up:
          Jak správně používat nástroj pro dokonalý výsledek.
 
       3. Tipy a triky profesionálů:
          Jak si přizpůsobit líčení podle tvaru obličeje a příležitosti.
 
       4. Péče o pleť:
          Jak připravit pleť na líčení a udržet ji zdravou.
 
       5. Praktický workshop:
          Možnost vyzkoušet si vše na vlastní kůži s odborným vedením.
     `,
     lecturer: 'Valerie Vynalézavá',
     lecturer_email: 'vevycko@example.com',
   },
   {
     title: 'Smart-Greenery: Software k údržbě a zalévání květin.',
     date: "2024-03-25",
     slug: 'barbora-vide1',
     image: 'barbora-botanickozkoumava.png',
     summary:
       'Zjednodušte si údržbu zeleně v domácnosti a na zahradě automatizovaným nástrojem Smart-Greenery.',
     course_description: `
       1. Úvod do Smart-Greenery:
          Jak software pomáhá s péčí o rostliny.
 
       2. Nastavení systému:
          Jak nakonfigurovat zavlažování a údržbu.
 
       3. Automatizace procesů:
          Jak optimalizovat zavlažování podle podmínek.
 
       4. Mobilní aplikace:
          Jak kontrolovat stav rostlin na dálku.
 
       5. Ekologické aspekty:
          Jak šetřit vodu a zlepšit růst rostlin.
     `,
     lecturer: 'Barbora Botanická',
     lecturer_email: 'barbota@example.com',
   },
   {
     title: 'Umělecké projekty na univerzitách: Jak získat zakázky od designer firem',
     date: "2025-02-01",
     slug: 'ursula-ursulova-audi1',
     image: 'ursula-umeleckovedecka.png',
     summary:
       'Jak vyvolat a upevnit zájem designer firem k zadávání uměleckých zakázek u vás na univerzitě.',
     course_description: `
       1. Příprava projektu:
          Jak vytvořit atraktivní umělecký návrh pro firmy.
 
       2. Navázání kontaktů:
          Jak oslovit potenciální partnery a investory.
 
       3. Prezentace a vyjednávání:
          Jak efektivně prezentovat svůj projekt a vyjednat podmínky spolupráce.
 
       4. Realizace zakázky:
          Jak správně řídit proces tvorby a dodání projektu.
 
       5. Udržení dlouhodobé spolupráce:
          Jak budovat pevné vztahy s firmami a získávat další zakázky.
     `,
     lecturer: 'Uršula Uměleckovědecká',
     lecturer_email: 'umeur@example.com',
   },
];

const createTable = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS courses (
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        summary TEXT NOT NULL,
        course_description TEXT NOT NULL,
        lecturer TEXT NOT NULL,
        lecturer_email TEXT NOT NULL
      );
    `);
    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    client.release();
  }
};

const insertData = async () => {
  const client = await pool.connect();
  try {
    for (const course of dummyCourses) {
      await client.query(
        `INSERT INTO courses (date, slug, title, image, summary, course_description, lecturer, lecturer_email)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         ON CONFLICT (slug) DO NOTHING;`,
        [course.date, course.slug, course.title, course.image, course.summary, course.course_description, course.lecturer, course.lecturer_email]
      );
    }
    console.log("Data inserted successfully");
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    client.release();
  }
};

const initDB = async () => {
  await createTable();
  await insertData();
  pool.end();
};

initDB().catch(console.error);