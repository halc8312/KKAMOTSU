import { DesignSwitcher } from "./DesignSwitcher";
import { DriverPicture } from "./DriverPicture";
import { ArrowIcon, CheckIcon } from "./Icons";
import {
  applicationSteps,
  benefits,
  company,
  entryMailto,
  incomeDisclaimer,
  incomeExamples,
  requirements,
  schedule,
} from "../_data/recruitment";

const overviewItems = [
  ["AREA", "稼働エリア", "沖縄県本島"],
  ["CONTRACT", "契約形態", "業務委託"],
  ["REWARD", "報酬", "完全出来高／日当案件"],
  ["VEHICLE", "車両", "稼働中は無料レンタル"],
  ["LICENSE", "応募資格", "普通免許（AT限定可）"],
  ["COST", "自己負担", "燃料・保険・備品"],
] as const;

export function DashboardSite() {
  const mailto = entryMailto();

  return (
    <div className="dashboard-site">
      <DesignSwitcher activeTheme="dashboard" />

      <header className="dashboard-header">
        <a className="dashboard-brand" href="#dashboard-top" aria-label={`${company.name} 採用サイトの先頭へ`}>
          <span className="dashboard-brand__mark" aria-hidden="true">前</span>
          <span>
            <b>{company.name}</b>
            <small>{company.reading}</small>
          </span>
        </a>
        <nav className="dashboard-header__nav" aria-label="ページ内メニュー">
          <a href="#dashboard-income">収入例</a>
          <a href="#dashboard-day">1日の流れ</a>
          <a href="#dashboard-conditions">募集条件</a>
        </nav>
        <a className="dashboard-button dashboard-button--small" href={mailto}>
          応募・相談
          <ArrowIcon />
        </a>
      </header>

      <nav className="dashboard-mobile-nav" aria-label="要点ダッシュボード内のメニュー">
        <a href="#dashboard-overview">要点</a>
        <a href="#dashboard-income">収入例</a>
        <a href="#dashboard-day">1日の流れ</a>
        <a href="#dashboard-conditions">募集条件</a>
      </nav>

      <main id="dashboard-top">
        <section className="dashboard-hero" aria-labelledby="dashboard-title">
          <div className="dashboard-hero__copy">
            <p className="dashboard-eyebrow">LIGHT CARGO DRIVER / OKINAWA</p>
            <h1 id="dashboard-title">仕事の条件を<br />ひと目で</h1>
            <p className="dashboard-hero__lead">
              長い説明を読む前に、働く場所・報酬・車両・一日の流れを確認。
              前代運送の軽貨物ドライバー募集を、要点から比べられる採用サイトです。
            </p>
            <ul className="dashboard-hero__points" aria-label="募集のポイント">
              <li><CheckIcon />未経験歓迎</li>
              <li><CheckIcon />普通免許で応募可能</li>
              <li><CheckIcon />車両レンタル無料</li>
            </ul>
            <a className="dashboard-button" href={mailto}>
              まずは相談する
              <ArrowIcon />
            </a>
          </div>
          <DriverPicture className="dashboard-hero__picture" priority />
        </section>

        <section className="dashboard-overview" id="dashboard-overview" aria-labelledby="dashboard-overview-title">
          <div className="dashboard-section-heading">
            <p>QUICK OVERVIEW</p>
            <h2 id="dashboard-overview-title">募集条件の要点</h2>
          </div>
          <dl className="dashboard-overview__grid">
            {overviewItems.map(([code, label, value]) => (
              <div className="dashboard-overview__card" key={code}>
                <dt><small>{code}</small>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="dashboard-overview__note">車両は自家利用も可能です。案件の詳細条件は応募相談時にご案内します。</p>
        </section>

        <div className="dashboard-content-grid">
          <section className="dashboard-panel dashboard-income" id="dashboard-income" aria-labelledby="dashboard-income-title">
            <div className="dashboard-panel__heading">
              <div>
                <p>INCOME EXAMPLES</p>
                <h2 id="dashboard-income-title">月間売上の実績例</h2>
              </div>
              <span>3 CASES</span>
            </div>
            <div className="dashboard-income__list">
              {incomeExamples.map((example) => (
                <article key={example.name}>
                  <div>
                    <span>{example.tag}</span>
                    <h3>{example.name}</h3>
                    <p>{example.days}・{example.note}</p>
                  </div>
                  <p className="dashboard-income__amount"><b>{example.amount}</b><span>万円</span></p>
                </article>
              ))}
            </div>
            <p className="dashboard-fineprint">{incomeDisclaimer}</p>
          </section>

          <section className="dashboard-panel dashboard-support" aria-labelledby="dashboard-support-title">
            <div className="dashboard-panel__heading">
              <div>
                <p>START SUPPORT</p>
                <h2 id="dashboard-support-title">はじめやすさ</h2>
              </div>
            </div>
            <ol className="dashboard-support__list">
              {benefits.map((benefit) => (
                <li key={benefit.number}>
                  <span>{benefit.number}</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="dashboard-panel dashboard-day" id="dashboard-day" aria-labelledby="dashboard-day-title">
          <div className="dashboard-panel__heading">
            <div>
              <p>DAILY ROUTE</p>
              <h2 id="dashboard-day-title">1日の流れ</h2>
            </div>
            <span>勤務例</span>
          </div>
          <ol className="dashboard-day__timeline">
            {schedule.map(([time, title, copy]) => (
              <li key={time}>
                <time>{time}</time>
                <span aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="dashboard-conditions" id="dashboard-conditions" aria-labelledby="dashboard-conditions-title">
          <div className="dashboard-section-heading">
            <p>REQUIREMENTS</p>
            <h2 id="dashboard-conditions-title">募集条件を確認</h2>
          </div>
          <dl className="dashboard-conditions__list">
            {requirements.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="dashboard-apply" aria-labelledby="dashboard-apply-title">
          <div className="dashboard-apply__intro">
            <p>APPLICATION FLOW</p>
            <h2 id="dashboard-apply-title">条件が合いそうなら<br />まずは相談から</h2>
            <p>応募前の質問だけでも構いません。希望の働き方をメールでお知らせください。</p>
            <a className="dashboard-button dashboard-button--light" href={mailto}>
              応募・相談メールを送る
              <ArrowIcon />
            </a>
          </div>
          <ol className="dashboard-apply__steps">
            {applicationSteps.map(([number, title, copy]) => (
              <li key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="dashboard-footer">
        <div className="dashboard-brand dashboard-brand--footer">
          <span className="dashboard-brand__mark" aria-hidden="true">前</span>
          <span><b>{company.name}</b><small>{company.reading}</small></span>
        </div>
        <p>{company.role} / 沖縄県本島</p>
        <small>© {new Date().getFullYear()} {company.name}</small>
      </footer>

      <a className="dashboard-mobile-cta" href={mailto}>
        応募・相談はこちら
        <ArrowIcon />
      </a>
    </div>
  );
}
