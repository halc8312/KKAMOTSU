import Link from "next/link";
import {
  applicationSteps,
  benefits,
  company,
  entryMailto,
  faqs,
  incomeDisclaimer,
  incomeExamples,
  quickFacts,
  requirements,
  schedule,
} from "../_data/recruitment";
import { DesignSwitcher } from "./DesignSwitcher";
import { DriverPicture } from "./DriverPicture";
import { ArrowIcon, CheckIcon } from "./Icons";

export type PortalPage = "home" | "work" | "conditions" | "apply";

const portalLinks: Array<{
  page: PortalPage;
  href: string;
  label: string;
  eyebrow: string;
}> = [
  { page: "home", href: "/designs/portal", label: "案内トップ", eyebrow: "GUIDE" },
  { page: "work", href: "/designs/portal/work", label: "仕事を知る", eyebrow: "WORK" },
  {
    page: "conditions",
    href: "/designs/portal/conditions",
    label: "条件を確認",
    eyebrow: "CONDITIONS",
  },
  { page: "apply", href: "/designs/portal/apply", label: "応募・相談", eyebrow: "ENTRY" },
];

const pageIntroductions: Record<Exclude<PortalPage, "home">, { eyebrow: string; title: string; copy: string }> = {
  work: {
    eyebrow: "WORK GUIDE",
    title: "仕事内容と一日の動きを、先に確認。",
    copy: "軽貨物配送の特徴と、稼働日の流れをまとめました。自分に合う働き方か、具体的に確認できます。",
  },
  conditions: {
    eyebrow: "CONDITION GUIDE",
    title: "報酬・車両・経費を、まとめて確認。",
    copy: "応募前に知っておきたい募集条件を一覧にしています。案件ごとの詳細は、相談時にご案内します。",
  },
  apply: {
    eyebrow: "ENTRY GUIDE",
    title: "相談から稼働まで、4つのステップ。",
    copy: "まずはメールで希望をお知らせください。仕事内容と条件を確認し、双方の合意後に稼働を始めます。",
  },
};

function PortalBrand() {
  return (
    <Link className="portal-brand" href="/designs/portal" aria-label="前代運送 採用ポータルのトップへ">
      <span className="portal-brand__mark" aria-hidden="true">
        前
      </span>
      <span className="portal-brand__text">
        <strong>{company.name}</strong>
        <small>{company.reading}</small>
      </span>
    </Link>
  );
}

function PortalHeader({ page }: { page: PortalPage }) {
  return (
    <header className="portal-header">
      <div className="portal-header__bar">
        <PortalBrand />
        <a className="portal-header__entry" href={entryMailto()}>
          応募・相談する
          <ArrowIcon />
        </a>
      </div>
      <nav className="portal-nav" aria-label="採用ポータル内のページ">
        {portalLinks.map((item) => (
          <Link
            className="portal-nav__link"
            href={item.href}
            key={item.page}
            aria-current={page === item.page ? "page" : undefined}
          >
            <small>{item.eyebrow}</small>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

function PortalIntro({ page }: { page: Exclude<PortalPage, "home"> }) {
  const introduction = pageIntroductions[page];

  return (
    <section className="portal-intro" aria-labelledby="portal-page-title">
      <p className="portal-kicker">{introduction.eyebrow}</p>
      <h1 id="portal-page-title">{introduction.title}</h1>
      <p>{introduction.copy}</p>
    </section>
  );
}

function PortalHome() {
  return (
    <>
      <section className="portal-hero" aria-labelledby="portal-home-title">
        <div className="portal-hero__copy">
          <p className="portal-kicker">MAESHIRO RECRUIT PORTAL</p>
          <h1 id="portal-home-title">知りたい情報から、選べる採用サイト。</h1>
          <p>
            前代運送の軽貨物ドライバー募集について、仕事内容・条件・応募方法の順番にかかわらず、
            気になるところから確認できます。
          </p>
          <a className="portal-primary-link" href={entryMailto()}>
            まずは応募・相談する
            <ArrowIcon />
          </a>
        </div>
        <DriverPicture className="portal-hero__picture" priority />
      </section>

      <section className="portal-facts" aria-label="募集概要">
        {quickFacts.map(([label, value]) => (
          <div className="portal-fact" key={label}>
            <small>{label}</small>
            <strong>{value}</strong>
          </div>
        ))}
        <div className="portal-fact">
          <small>LICENSE</small>
          <strong>普通免許（AT限定可）</strong>
        </div>
      </section>

      <section className="portal-hub" aria-labelledby="portal-hub-title">
        <div className="portal-section-heading">
          <p className="portal-kicker">SELECT A GUIDE</p>
          <h2 id="portal-hub-title">気になる情報へ進む</h2>
          <p>長いページを順番に読む必要はありません。確認したい内容を選んでください。</p>
        </div>
        <div className="portal-hub__grid">
          {portalLinks.slice(1).map((item, index) => (
            <Link className="portal-hub-card" href={item.href} key={item.page}>
              <span className="portal-hub-card__number">0{index + 1}</span>
              <small>{item.eyebrow}</small>
              <h3>{item.label}</h3>
              <p>
                {item.page === "work" && "仕事の特徴と、9:00から19:30までの一日の流れ。"}
                {item.page === "conditions" && "収入例、契約形態、車両、経費などの募集条件。"}
                {item.page === "apply" && "相談から稼働開始までの手順と、よくある質問。"}
              </p>
              <span className="portal-hub-card__arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="portal-start" aria-labelledby="portal-start-title">
        <div>
          <p className="portal-kicker">BEFORE ENTRY</p>
          <h2 id="portal-start-title">迷っている段階でも、ご相談ください。</h2>
          <p>希望する曜日・日数・エリアを伺い、案件内容や条件をご説明します。</p>
        </div>
        <a className="portal-primary-link portal-primary-link--dark" href={entryMailto()}>
          メールで応募・相談
          <ArrowIcon />
        </a>
      </section>
    </>
  );
}

function PortalWork() {
  return (
    <>
      <PortalIntro page="work" />

      <section className="portal-content-section" aria-labelledby="portal-benefits-title">
        <div className="portal-section-heading">
          <p className="portal-kicker">WHY MAESHIRO</p>
          <h2 id="portal-benefits-title">仕事の3つの特徴</h2>
        </div>
        <div className="portal-benefit-grid">
          {benefits.map((benefit) => (
            <article className="portal-benefit-card" key={benefit.number}>
              <span>{benefit.number}</span>
              <small>{benefit.label}</small>
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portal-content-section portal-content-section--tint" aria-labelledby="portal-day-title">
        <div className="portal-section-heading">
          <p className="portal-kicker">A DAY AT WORK</p>
          <h2 id="portal-day-title">一日の流れ</h2>
          <p>案件や配送状況により、時間や流れは変わる場合があります。</p>
        </div>
        <ol className="portal-timeline">
          {schedule.map(([time, title, description]) => (
            <li key={time}>
              <time>{time}</time>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <aside className="portal-next-guide" aria-label="次におすすめのページ">
        <div>
          <small>NEXT GUIDE</small>
          <h2>報酬や車両などの条件を確認する</h2>
        </div>
        <Link className="portal-primary-link" href="/designs/portal/conditions">
          条件を確認
          <ArrowIcon />
        </Link>
      </aside>
    </>
  );
}

function PortalConditions() {
  return (
    <>
      <PortalIntro page="conditions" />

      <section className="portal-content-section" aria-labelledby="portal-income-title">
        <div className="portal-section-heading">
          <p className="portal-kicker">INCOME EXAMPLES</p>
          <h2 id="portal-income-title">月間売上の実績例</h2>
        </div>
        <div className="portal-income-grid">
          {incomeExamples.map((example) => (
            <article className="portal-income-card" key={example.name}>
              <span>{example.tag}</span>
              <p>{example.name}</p>
              <p className="portal-income-card__amount">
                <strong>{example.amount}</strong>
                <span>万円</span>
              </p>
              <dl>
                <div>
                  <dt>稼働</dt>
                  <dd>{example.days}</dd>
                </div>
                <div>
                  <dt>補足</dt>
                  <dd>{example.note}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="portal-note">{incomeDisclaimer}</p>
      </section>

      <section className="portal-content-section portal-content-section--tint" aria-labelledby="portal-requirements-title">
        <div className="portal-section-heading">
          <p className="portal-kicker">REQUIREMENTS</p>
          <h2 id="portal-requirements-title">募集要項</h2>
        </div>
        <dl className="portal-requirements">
          {requirements.map(([term, description]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <aside className="portal-next-guide" aria-label="次におすすめのページ">
        <div>
          <small>NEXT GUIDE</small>
          <h2>応募から稼働までの流れを確認する</h2>
        </div>
        <Link className="portal-primary-link" href="/designs/portal/apply">
          応募の流れへ
          <ArrowIcon />
        </Link>
      </aside>
    </>
  );
}

function PortalApply() {
  return (
    <>
      <PortalIntro page="apply" />

      <section className="portal-content-section" aria-labelledby="portal-flow-title">
        <div className="portal-section-heading">
          <p className="portal-kicker">ENTRY FLOW</p>
          <h2 id="portal-flow-title">応募・相談の流れ</h2>
        </div>
        <ol className="portal-step-grid">
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
      </section>

      <section className="portal-content-section portal-content-section--tint" aria-labelledby="portal-faq-title">
        <div className="portal-section-heading">
          <p className="portal-kicker">FAQ</p>
          <h2 id="portal-faq-title">よくある質問</h2>
        </div>
        <div className="portal-faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                <span className="portal-faq-list__check" aria-hidden="true">
                  <CheckIcon />
                </span>
                <span>{question}</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="portal-entry-panel" aria-labelledby="portal-entry-title">
        <p className="portal-kicker">CONTACT</p>
        <h2 id="portal-entry-title">まずは、希望の働き方をお聞かせください。</h2>
        <p>名前と希望する曜日・日数・エリアを添えて、メールでご連絡ください。</p>
        <a className="portal-primary-link portal-primary-link--dark" href={entryMailto()}>
          メールで応募・相談する
          <ArrowIcon />
        </a>
      </section>
    </>
  );
}

function PortalFooter() {
  return (
    <footer className="portal-footer">
      <PortalBrand />
      <p>{company.role}</p>
      <nav aria-label="採用ポータルのフッターナビゲーション">
        {portalLinks.map((item) => (
          <Link href={item.href} key={item.page}>
            {item.label}
          </Link>
        ))}
      </nav>
      <small>© {company.name}</small>
    </footer>
  );
}

export function PortalSite({ page }: { page: PortalPage }) {
  return (
    <main className={`portal-site portal-page--${page}`}>
      <DesignSwitcher activeTheme="portal" />
      <PortalHeader page={page} />
      <div className="portal-main">
        {page === "home" && <PortalHome />}
        {page === "work" && <PortalWork />}
        {page === "conditions" && <PortalConditions />}
        {page === "apply" && <PortalApply />}
      </div>
      <PortalFooter />
    </main>
  );
}
