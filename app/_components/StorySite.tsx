import type { ReactNode } from "react";

import {
  applicationSteps,
  benefits,
  company,
  entryMailto,
  faqs,
  incomeDisclaimer,
  incomeExamples,
  requirements,
  schedule,
} from "../_data/recruitment";
import { DesignSwitcher } from "./DesignSwitcher";
import { DriverPicture } from "./DriverPicture";
import { ArrowIcon, CheckIcon } from "./Icons";

const chapters = [
  ["#before", "01", "はじめる前"],
  ["#day", "02", "働く一日"],
  ["#conditions", "03", "収入と条件"],
  ["#apply", "04", "応募から稼働"],
] as const;

export function StorySite() {
  return (
    <div className="story-site">
      <a className="story-skip-link" href="#story-main">
        本文へ移動
      </a>

      <DesignSwitcher activeTheme="story" />

      <header className="story-header" id="top">
        <a className="story-brand" href="#top" aria-label={`${company.name} 採用サイト トップへ`}>
          <span className="story-brand-mark" aria-hidden="true">前</span>
          <span>
            <strong>{company.name}</strong>
            <small>{company.reading} / RECRUIT</small>
          </span>
        </a>
        <nav className="story-chapter-nav" aria-label="ページ内の章">
          {chapters.map(([href, number, label]) => (
            <a key={href} href={href}>
              <span aria-hidden="true">{number}</span>
              {label}
            </a>
          ))}
        </nav>
        <a className="story-header-entry" href="#entry">
          応募・相談
          <ArrowIcon />
        </a>
      </header>

      <main id="story-main">
        <section className="story-cover" aria-labelledby="story-title">
          <div className="story-cover-copy">
            <p className="story-overline">DESIGN E / RECRUITMENT STORY</p>
            <p className="story-role">{company.role}</p>
            <h1 id="story-title">
              <span>始める前から</span>
              <em>働く一日まで</em>
            </h1>
            <p className="story-cover-lead">
              仕事内容、働く時間、収入と費用、応募後の流れ。
              軽貨物配送を検討するときに知りたいことを、順番にお伝えします。
            </p>
            <a className="story-scroll-link" href="#before">
              最初の章を読む
              <ArrowIcon down />
            </a>
          </div>

          <figure className="story-cover-figure">
            <DriverPicture className="story-cover-picture" priority />
            <figcaption>
              <span>OKINAWA MAIN ISLAND</span>
              沖縄県本島で、軽貨物ドライバーを募集しています。
            </figcaption>
          </figure>
        </section>

        <nav className="story-index" aria-label="章の目次">
          <p>CONTENTS</p>
          <ol>
            {chapters.map(([href, number, label]) => (
              <li key={href}>
                <a href={href}>
                  <span>{number}</span>
                  <strong>{label}</strong>
                  <ArrowIcon />
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section className="story-chapter story-before" id="before" aria-labelledby="story-before-title">
          <ChapterHeading
            number="01"
            label="BEFORE YOU START"
            title={<>始める前に<wbr />知ってほしいこと</>}
            id="story-before-title"
          />

          <div className="story-prologue">
            <p className="story-prologue-lead">
              配送経験がなくても、車両を持っていなくても応募できます。
              まずは希望する曜日・日数・エリアを聞き、仕事の条件を一緒に確認します。
            </p>
            <p>
              しっかり稼働したい方も、生活と両立したい方も、相談からのスタートで構いません。
              荷物の扱い方や配送の進め方など、必要なことは稼働前にご案内します。
            </p>
          </div>

          <div className="story-principles">
            {benefits.map((benefit) => (
              <article key={benefit.number}>
                <p className="story-principle-number" aria-hidden="true">{benefit.number}</p>
                <div>
                  <p className="story-principle-label">{benefit.label}</p>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="story-note" aria-label="車両と費用について">
            <CheckIcon />
            <div>
              <strong>稼働中は全員が車両を無料でレンタルできます</strong>
              <p>レンタル車は自家利用も可能です。燃料費・保険料・備品代は自己負担となります。</p>
            </div>
          </aside>
        </section>

        <section className="story-chapter story-day" id="day" aria-labelledby="story-day-title">
          <ChapterHeading
            number="02"
            label="A DAY AT WORK"
            title={<>働く一日を<wbr />時間の順に</>}
            id="story-day-title"
            light
          />
          <p className="story-day-intro">
            宅配案件で働く場合の一例です。時間・休憩・配送件数は案件によって異なります。
          </p>
          <ol className="story-day-list">
            {schedule.map(([time, title, description], index) => (
              <li key={time}>
                <span className="story-day-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <time>{time}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="story-chapter story-conditions" id="conditions" aria-labelledby="story-conditions-title">
          <ChapterHeading
            number="03"
            label="INCOME & CONDITIONS"
            title={<>収入と条件を<wbr />曖昧にしない</>}
            id="story-conditions-title"
          />

          <div className="story-income-intro">
            <p>
              完全出来高制の案件と日当案件があります。ここでは、働き方の違う3つの月間売上実績例をご紹介します。
            </p>
          </div>
          <div className="story-income-list">
            {incomeExamples.map((example, index) => (
              <article key={example.name}>
                <span className="story-income-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div className="story-income-person">
                  <p>{example.tag}</p>
                  <h3>{example.name}</h3>
                </div>
                <p className="story-income-amount">
                  <span>月間売上</span>
                  <strong>{example.amount}</strong>
                  <b>万円</b>
                </p>
                <p className="story-income-meta">{example.days}<br />{example.note}</p>
              </article>
            ))}
          </div>
          <p className="story-income-note">{incomeDisclaimer}</p>

          <div className="story-requirements">
            <div className="story-requirements-intro">
              <p className="story-small-label">JOB DETAILS</p>
              <h3>募集要項</h3>
              <p>わからないことは、応募前に確認できます。条件を納得してから始めてください。</p>
            </div>
            <dl>
              {requirements.map(([term, description]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="story-chapter story-apply" id="apply" aria-labelledby="story-apply-title">
          <ChapterHeading
            number="04"
            label="HOW TO START"
            title={<>相談から稼働までの<wbr />4つの場面</>}
            id="story-apply-title"
          />

          <ol className="story-steps">
            {applicationSteps.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="story-faq">
            <div>
              <p className="story-small-label">FAQ</p>
              <h3>応募前に<wbr />もう少し確認したい方へ</h3>
            </div>
            <div className="story-faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>
                    <span aria-hidden="true">Q</span>
                    <strong>{question}</strong>
                    <i aria-hidden="true" />
                  </summary>
                  <div>
                    <span aria-hidden="true">A</span>
                    <p>{answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="story-entry" id="entry" aria-labelledby="story-entry-title">
          <p className="story-entry-number" aria-hidden="true">05</p>
          <div>
            <p className="story-small-label">ENTRY / CONTACT</p>
            <h2 id="story-entry-title">次の一歩は<wbr />希望を話すことから</h2>
            <p>
              仕事内容や費用を確認してから検討したい方も歓迎です。
              応募前の相談だけでも、気軽にご連絡ください。
            </p>
          </div>
          <a className="story-entry-button" href={entryMailto()}>
            応募相談メールを開く
            <ArrowIcon />
          </a>
        </section>
      </main>

      <footer className="story-footer">
        <a className="story-brand" href="#top" aria-label={`${company.name} 採用サイト トップへ`}>
          <span className="story-brand-mark" aria-hidden="true">前</span>
          <span>
            <strong>{company.name}</strong>
            <small>{company.reading} / RECRUIT</small>
          </span>
        </a>
        <p>© 2026 {company.name}. All Rights Reserved.</p>
      </footer>

      <a className="story-mobile-entry" href="#entry">
        応募・相談はこちら
        <ArrowIcon />
      </a>
    </div>
  );
}

function ChapterHeading({
  number,
  label,
  title,
  id,
  light = false,
}: {
  number: string;
  label: string;
  title: ReactNode;
  id: string;
  light?: boolean;
}) {
  return (
    <header className={`story-chapter-heading${light ? " story-chapter-heading-light" : ""}`}>
      <p className="story-chapter-number" aria-hidden="true">{number}</p>
      <div>
        <p className="story-chapter-label">{label}</p>
        <h2 id={id}>{title}</h2>
      </div>
    </header>
  );
}
