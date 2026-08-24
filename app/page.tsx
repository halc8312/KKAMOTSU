import Link from "next/link";
import { DesignSwitcher } from "./_components/DesignSwitcher";
import { DriverPicture } from "./_components/DriverPicture";
import { ArrowIcon } from "./_components/Icons";
import { company, themes } from "./_data/recruitment";

export default function ComparisonHome() {
  return (
    <div className="comparison-page">
      <a className="rs-skip-link" href="#comparison-main">本文へ移動</a>
      <div className="comparison-page__top">
        <a className="comparison-brand" href="#comparison-main" aria-label="比較ページのトップへ">
          <span aria-hidden="true">前</span>
          <strong>{company.name}</strong>
          <small>RECRUIT SITE REVIEW</small>
        </a>
        <DesignSwitcher />
      </div>

      <main id="comparison-main">
        <header className="comparison-hero">
          <p>INTERNAL DESIGN REVIEW / 2026</p>
          <h1>前代運送らしい<br />採用サイトは、どれ？</h1>
          <div>
            <p>
              募集内容は同じまま、第一印象が大きく異なる3案を用意しました。
              A・B・Cを開いて見比べ、気に入った案を社内で共有してください。
            </p>
            <span>投票機能はありません</span>
          </div>
        </header>

        <section className="comparison-grid" aria-label="3つのデザイン案">
          {themes.map((theme) => (
            <article className={`comparison-card comparison-card--${theme.letter.toLowerCase()}`} key={theme.id}>
              <div className="comparison-card__preview" aria-hidden="true">
                <div className="comparison-card__sample-copy">
                  <span>DESIGN {theme.letter}</span>
                  <strong>{theme.headline}</strong>
                </div>
                <DriverPicture className="comparison-card__picture" />
              </div>
              <div className="comparison-card__body">
                <div className="comparison-card__title">
                  <span>{theme.letter}</span>
                  <div><small>{theme.name}</small><h2>{theme.japaneseName}</h2></div>
                </div>
                <p>{theme.summary}</p>
                <Link href={`/designs/${theme.id}`}>
                  デザイン{theme.letter}を見る
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="comparison-guide">
          <p>見比べるポイント</p>
          <ol>
            <li><span>01</span><strong>応募したくなる第一印象か</strong></li>
            <li><span>02</span><strong>募集条件を理解しやすいか</strong></li>
            <li><span>03</span><strong>前代運送らしさを感じるか</strong></li>
          </ol>
        </section>
      </main>

      <footer className="comparison-footer">
        <strong>{company.name}</strong>
        <p>軽貨物ドライバー採用サイト・デザイン比較</p>
      </footer>
    </div>
  );
}
