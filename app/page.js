import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/Images/ImageSlides";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={classes.hero}>
          <h1>Vítejte na portálu kurzů Marie!!</h1>
          <p>Přihlašte se již dnes.</p>
        </div>
        <div className={classes.cta}>
          <Link href="/about">O nás</Link>
          <Link href="/courses">Kurzy</Link>
        </div>  
      </header>
      <main>
        <section className={classes.section}>
          <h2>Jak to funguje</h2>
          <p>
            Kurzy Marie jsou určeny pro všechny, kteří chtějí zlepšit své dovednosti v oblasti seberozvoje.
            Naše kurzy jsou navrženy tak, aby vám poskytly praktické dovednosti a znalosti, které můžete okamžitě aplikovat ve svém každodenním životě.
          </p>
          <p>
            Naše kurzy jsou vedeny zkušenými lektory, kteří mají bohaté zkušenosti v oboru. 
            Každý kurz je pečlivě navržen tak, aby vám poskytl maximální hodnotu a pomohl vám dosáhnout vašich cílů.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Proč kurzy Marie?</h2>
          <p>
            Kurzy Marie nabízejí celou, ALE OPRAVDU CELOU a ne NECELOU řadu kurzů, které jsou navrženy tak, aby vyhovovaly různým úrovním dovedností a zájmům. Naše kurzy jsou flexibilní a můžete je absolvovat vlastním tempem, což vám umožní snadno je začlenit do vašeho nabitého rozvrhu.
          </p>
          <p>
            Kurzy Marie jsou místem, kde můžete objevit nové dovednosti a spojit se s dalšími lidmi, kteří mají podobné zájmy.
          </p>
        </section>

      </main>
    </>
  );
}
