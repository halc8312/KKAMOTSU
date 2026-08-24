import {
  applicationSteps,
  benefits,
  company,
  entryMailto,
  faqs,
  getTheme,
  heroPoints,
  incomeDisclaimer,
  incomeExamples,
  navItems,
  quickFacts,
  recommendedFor,
  requirements,
  schedule,
  type ThemeId,
} from "../_data/recruitment";
import { DesignSwitcher } from "./DesignSwitcher";
import { DriverPicture } from "./DriverPicture";
import { ArrowIcon, CheckIcon, MenuIcon } from "./Icons";

export function RecruitmentSite({ themeId }: { themeId: ThemeId }) {
  const theme = getTheme(themeId);

  return (
    <div className={`recruitment-site theme-${theme.id}`} data-theme={theme.id}>
      <a className="rs-skip-link" href="#main-content">
        本文へ移動
      </a>

      <div className="rs-top-stack">
        <DesignSwitcher activeTheme={theme.id} />
        <header className="rs-header">
          <a className="rs-brand" href="#top" aria-label={`${company.name} 採用サイト トップへ`}>
            <span className="rs-brand-mark" aria-hidden="true">前</span>
            <span className="rs-brand-copy">
              <strong>{company.name}</strong>
              <small>{company.reading} / RECRUIT</small>
            </span>
          </a>

          <nav className="rs-desktop-nav" aria-label="メインナビゲーション">
            {navItems.slice(0, 4).map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a className="rs-header-cta" href="#entry">
              まずは相談する
              <ArrowIcon />
            </a>
          </nav>

          <details className="rs-mobile-menu">
            <summary>
              <MenuIcon />
              <span>メニュー</span>
            </summary>
            <nav aria-label="モバイルナビゲーション">
              {navItems.map(([href, label]) => (
                <a key={href} href={href}>{label}</a>
              ))}
              <a className="rs-menu-entry" href="#entry">応募・相談</a>
            </nav>
          </details>
        </header>
      </div>

      <main id="main-content">
        <section className="rs-hero" id="top">
          <div className="rs-hero-copy">
            <p className="rs-theme-index">
              DESIGN {theme.letter}
              <span>{theme.name}</span>
            </p>
            <p className="rs-eyebrow">{company.role}</p>
            <h1>
              <span>{theme.headlineParts[0]}</span>
              <em>{theme.headlineParts[1]}</em>
            </h1>
            <p className="rs-hero-lead">
              未経験から、あなたらしい働き方へ。<br />
              希望に合う軽貨物配送の仕事を一緒に探します。
            </p>
            <div className="rs-hero-actions">
              <a className="rs-button rs-button-primary" href="#entry">
                まずは仕事内容を聞く
                <ArrowIcon />
              </a>
              <a className="rs-text-link" href="#benefits">
                働き方を見る
                <ArrowIcon down />
              </a>
            </div>
            <ul className="rs-hero-points" aria-label="応募のポイント">
              {heroPoints.map((point) => (
                <li key={point}><CheckIcon />{point}</li>
              ))}
            </ul>
          </div>

          <div className="rs-hero-visual">
            <DriverPicture className="rs-hero-picture" priority />
            <div className="rs-hero-caption">
              <span>ENTRY</span>
              <strong>応募前の相談だけでもOK</strong>
            </div>
          </div>
        </section>

        <section className="rs-quick-facts" aria-label="募集概要">
          {quickFacts.map(([label, value]) => (
            <div key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
          <p>働き方・案件は相談可能です</p>
        </section>

        <section className="rs-section rs-benefits" id="benefits">
          <SectionHeading kicker="OUR ADVANTAGES" title="はじめやすく、続けやすい仕事へ。">
            配送の仕事が初めてでも大丈夫。希望を聞くところから始めます。
          </SectionHeading>
          <div className="rs-benefit-grid">
            {benefits.map((benefit) => (
              <article className="rs-benefit-card" key={benefit.number}>
                <div className="rs-card-number"><span>{benefit.number}</span><small>{benefit.label}</small></div>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rs-income" id="income">
          <div className="rs-income-inner">
            <SectionHeading kicker="INCOME EXAMPLES" title="働き方で変わる、3つの売上実績例。" light>
              自分のペースも、しっかり稼働も。希望する働き方をご相談ください。
            </SectionHeading>
            <div className="rs-income-grid">
              {incomeExamples.map((example) => (
                <article className="rs-income-card" key={example.name}>
                  <span className="rs-income-tag">{example.tag}</span>
                  <p className="rs-income-name">{example.name}</p>
                  <p className="rs-income-amount">
                    <small>月間売上</small>
                    <span><strong>{example.amount}</strong><b>万円</b></span>
                  </p>
                  <div className="rs-income-meta"><span>{example.days}</span><span>{example.note}</span></div>
                </article>
              ))}
            </div>
            <p className="rs-income-note">{incomeDisclaimer}</p>
          </div>
        </section>

        <section className="rs-section rs-day" id="day">
          <SectionHeading kicker="A DAY AT WORK" title="ある1日の流れ">
            宅配案件で働く場合の一例です。時間・休憩・配送件数は案件によって異なります。
          </SectionHeading>
          <ol className="rs-timeline">
            {schedule.map(([time, title, description], index) => (
              <li key={time}>
                <span className="rs-timeline-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <time>{time}</time>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="rs-requirements" id="requirements">
          <div className="rs-requirements-inner">
            <div className="rs-requirements-intro">
              <SectionHeading kicker="JOB DETAILS" title="募集要項">
                わからないことは、応募前に確認できます。条件を納得してから始めてください。
              </SectionHeading>
              <aside className="rs-fit-card">
                <span>こんな方におすすめ</span>
                <ul>
                  {recommendedFor.map((item) => <li key={item}><CheckIcon />{item}</li>)}
                </ul>
              </aside>
            </div>
            <dl className="rs-requirements-list">
              {requirements.map(([term, description]) => (
                <div key={term}><dt>{term}</dt><dd>{description}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="rs-section rs-flow" id="flow">
          <SectionHeading kicker="HOW TO START" title="応募から稼働まで" centered>
            条件の確認を大切にしながら、4つのステップで進みます。
          </SectionHeading>
          <ol className="rs-flow-grid">
            {applicationSteps.map(([number, title, description]) => (
              <li key={number}>
                <span className="rs-flow-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rs-faq" id="faq">
          <div className="rs-faq-inner">
            <SectionHeading kicker="FAQ" title="よくあるご質問">
              応募前の不安を、先に解消します。
            </SectionHeading>
            <div className="rs-faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary><span className="rs-faq-q">Q</span><span>{question}</span><i aria-hidden="true" /></summary>
                  <div className="rs-faq-answer"><span aria-hidden="true">A</span><p>{answer}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="rs-entry" id="entry">
          <div>
            <p className="rs-section-kicker">ENTRY / CONTACT</p>
            <h2>まずは、あなたの希望を聞かせてください。</h2>
            <p>仕事内容や費用を確認してから検討したい方も歓迎です。応募前の相談だけでも、気軽にご連絡ください。</p>
          </div>
          <a className="rs-button rs-button-primary rs-button-large" href={entryMailto()}>
            応募相談メールを開く
            <ArrowIcon />
          </a>
        </section>
      </main>

      <a className="rs-mobile-entry" href="#entry">応募・相談はこちら<ArrowIcon /></a>

      <footer className="rs-footer">
        <a className="rs-brand" href="#top" aria-label={`${company.name} 採用サイト トップへ`}>
          <span className="rs-brand-mark" aria-hidden="true">前</span>
          <span className="rs-brand-copy"><strong>{company.name}</strong><small>{company.reading} / RECRUIT</small></span>
        </a>
        <nav aria-label="フッターナビゲーション">
          {navItems.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <p>© 2026 {company.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  children,
  light = false,
  centered = false,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`rs-section-heading${light ? " is-light" : ""}${centered ? " is-centered" : ""}`}>
      <p className="rs-section-kicker">{kicker}</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
