const benefits = [
  {
    number: "01",
    label: "BEGINNER FRIENDLY",
    title: "未経験から、迷わずスタート",
    copy: "荷物の扱い方や配送の進め方など、稼働前に必要なことを丁寧にご案内。はじめての一歩を支えます。",
  },
  {
    number: "02",
    label: "WORK YOUR WAY",
    title: "希望に合わせて働き方を相談",
    copy: "しっかり稼働したい方も、生活と両立したい方も。曜日・日数・エリアの希望を伺います。",
  },
  {
    number: "03",
    label: "VEHICLE SUPPORT",
    title: "車両がなくても相談できる",
    copy: "軽バンをお持ちでない方は、車両リースについて相談可能。条件や費用は契約前にご説明します。",
  },
];

const incomeExamples = [
  {
    tag: "しっかり稼働",
    name: "Aさん・30代",
    amount: "42",
    days: "月24日稼働",
    note: "未経験からスタート",
  },
  {
    tag: "週4日ペース",
    name: "Bさん・40代",
    amount: "29",
    days: "月18日稼働",
    note: "家庭と両立",
  },
  {
    tag: "副業スタイル",
    name: "Cさん・20代",
    amount: "15",
    days: "月10日稼働",
    note: "空いた日を活用",
  },
];

const schedule = [
  ["7:30", "積み込み・ルート確認", "担当エリアの荷物を確認し、配送準備を行います。"],
  ["8:00", "午前の配送", "ルートに沿って、無理のないペースで配送します。"],
  ["12:00", "休憩", "配送状況を見ながら、自分のタイミングでひと息。"],
  ["13:00", "午後の配送", "再度荷物を確認し、担当先へ配送します。"],
  ["18:00", "業務報告・終了", "配送状況を報告して、その日の仕事は終了です。"],
];

const requirements = [
  ["業務内容", "軽バンによる個人宅・企業への荷物の配送"],
  ["契約形態", "業務委託"],
  ["応募資格", "普通自動車運転免許をお持ちの方（AT限定可）"],
  ["経験", "未経験歓迎／配送経験者も歓迎"],
  ["稼働エリア", "東京・神奈川・千葉・埼玉を中心とした関東エリア"],
  ["稼働日・時間", "案件により異なります。希望条件は相談可能です"],
  ["報酬", "案件・配送件数などに応じた業務委託料"],
  ["車両", "持ち込み歓迎／車両リースは相談可"],
  ["費用", "燃料費・保険料・車両費・備品代などが必要となる場合があります"],
];

const applicationSteps = [
  ["01", "Webから応募", "応募相談メールから、名前と希望の働き方をお知らせください。"],
  ["02", "担当者からご連絡", "希望する曜日・日数・エリアなどを伺います。"],
  ["03", "仕事内容をご説明", "報酬、費用、案件内容、契約条件を一緒に確認します。"],
  ["04", "準備後に稼働開始", "双方で条件に合意し、必要な準備を整えてスタート。"],
];

const faqs = [
  [
    "配送の仕事が初めてでも応募できますか？",
    "はい、未経験の方も歓迎しています。業務内容や配送の進め方は、稼働前にわかりやすくご案内します。",
  ],
  [
    "車を持っていなくても始められますか？",
    "車両リースについて相談可能です。車種・料金・契約条件は、契約前にご確認いただけます。",
  ],
  [
    "初期費用はかかりますか？",
    "保険・車両・備品などの費用が必要となる場合があります。案件や車両の状況により異なるため、個別にご説明します。",
  ],
  [
    "どのくらいの収入になりますか？",
    "案件・配送件数・稼働日数・時間などにより異なります。ご希望を伺い、条件に合う案件をご案内します。",
  ],
  [
    "稼働する曜日や日数は選べますか？",
    "希望は相談可能です。ただし、案件ごとに募集曜日や稼働条件があるため、面談時に調整します。",
  ],
  [
    "配送エリアは選べますか？",
    "希望エリアを伺い、募集中の案件との調整を行います。時期によってご案内できるエリアは異なります。",
  ],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="前代運送 採用サイト トップへ">
          <span className="brand-mark" aria-hidden="true">
            前
          </span>
          <span className="brand-copy">
            <strong>前代運送</strong>
            <small>LIGHT CARGO RECRUIT</small>
          </span>
        </a>

        <nav className="header-nav" aria-label="メインナビゲーション">
          <a href="#benefits">特徴</a>
          <a href="#income">収入例</a>
          <a href="#requirements">募集要項</a>
          <a href="#faq">よくある質問</a>
          <a className="header-cta" href="#entry">
            まずは相談する
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" />
              軽貨物ドライバー募集
            </p>
            <h1>
              運ぶほど、
              <br />
              <em>自由</em>になる。
            </h1>
            <p className="hero-lead">
              未経験から、あなたらしい働き方へ。
              <br />
              希望に合う軽貨物配送の仕事を一緒に探します。
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#entry">
                まずは仕事内容を聞く
                <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#benefits">
                働き方を見る
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <ul className="hero-points" aria-label="応募のポイント">
              <li>
                <span aria-hidden="true">✓</span> 未経験歓迎
              </li>
              <li>
                <span aria-hidden="true">✓</span> 普通免許で応募OK
              </li>
              <li>
                <span aria-hidden="true">✓</span> 車両相談可
              </li>
            </ul>
          </div>

          <div className="hero-visual">
            <img
              src="/hero-driver.png"
              alt="白い軽バンの前で荷物を持つ配送ドライバー"
              width="1586"
              height="992"
              fetchPriority="high"
            />
            <div className="hero-badge">
              <span>ENTRY</span>
              <strong>応募前の相談だけでもOK</strong>
            </div>
            <p className="vertical-caption" aria-hidden="true">
              MOVE LIGHT. LIVE FREE.
            </p>
          </div>
        </section>

        <section className="quick-facts" aria-label="募集概要">
          <div>
            <span>WORK</span>
            <strong>軽貨物配送</strong>
          </div>
          <div>
            <span>STYLE</span>
            <strong>業務委託</strong>
          </div>
          <div>
            <span>AREA</span>
            <strong>関東エリア</strong>
          </div>
          <p>働き方・案件は相談可能です</p>
        </section>

        <section className="section benefits" id="benefits">
          <div className="section-heading">
            <p className="section-kicker">OUR ADVANTAGES</p>
            <h2>
              はじめやすく、
              <br />
              続けやすい仕事へ。
            </h2>
            <p>
              配送の仕事が初めてでも大丈夫。
              <br />
              希望を聞くところから始めます。
            </p>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.number}>
                <div className="benefit-topline">
                  <span>{benefit.number}</span>
                  <small>{benefit.label}</small>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="income-section" id="income">
          <div className="income-inner">
            <div className="income-heading">
              <p className="section-kicker section-kicker-light">INCOME EXAMPLES</p>
              <h2>
                働き方で変わる、
                <br />
                3つの売上実績例。
              </h2>
              <p>自分のペースも、しっかり稼働も。希望する働き方をご相談ください。</p>
            </div>

            <div className="income-grid">
              {incomeExamples.map((example) => (
                <article className="income-card" key={example.name}>
                  <span className="income-tag">{example.tag}</span>
                  <p className="income-name">{example.name}</p>
                  <p className="income-amount">
                    <small>月間売上</small>
                    <strong>{example.amount}</strong>
                    <span>万円</span>
                  </p>
                  <div className="income-meta">
                    <span>{example.days}</span>
                    <span>{example.note}</span>
                  </div>
                </article>
              ))}
            </div>

            <p className="income-note">
              ※上記は月間売上の実績例であり、収入を保証するものではありません。報酬は案件内容、配送件数、稼働日数・時間、エリアなどにより変動します。税金、保険料、燃料費、車両費その他の経費が別途必要となる場合があります。
            </p>
          </div>
        </section>

        <section className="section day-section" id="day">
          <div className="section-heading day-heading">
            <p className="section-kicker">A DAY AT WORK</p>
            <h2>ある1日の流れ</h2>
            <p>宅配案件で働く場合の一例です。時間・休憩・配送件数は案件によって異なります。</p>
          </div>

          <ol className="day-timeline">
            {schedule.map(([time, title, description], index) => (
              <li key={time}>
                <span className="timeline-dot" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <time>{time}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="requirements-section" id="requirements">
          <div className="requirements-inner">
            <div className="requirements-intro">
              <p className="section-kicker">JOB DETAILS</p>
              <h2>募集要項</h2>
              <p>
                わからないことは、応募前に確認できます。
                <br />
                条件を納得してから始めてください。
              </p>

              <aside className="fit-card">
                <span>こんな方におすすめ</span>
                <ul>
                  <li>運転することが好き</li>
                  <li>自分のペースで働きたい</li>
                  <li>頑張りを仕事に活かしたい</li>
                </ul>
              </aside>
            </div>

            <dl className="requirements-list">
              {requirements.map(([term, description]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section flow-section" id="flow">
          <div className="section-heading centered-heading">
            <p className="section-kicker">HOW TO START</p>
            <h2>応募から稼働まで</h2>
            <p>条件の確認を大切にしながら、4つのステップで進みます。</p>
          </div>

          <ol className="flow-grid">
            {applicationSteps.map(([number, title, description]) => (
              <li key={number}>
                <span className="flow-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="faq-section" id="faq">
          <div className="faq-inner">
            <div className="section-heading faq-heading">
              <p className="section-kicker">FAQ</p>
              <h2>
                よくある
                <br />
                ご質問
              </h2>
              <p>応募前の不安を、先に解消します。</p>
            </div>

            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>
                    <span className="faq-q">Q</span>
                    <span>{question}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <div className="faq-answer">
                    <span>A</span>
                    <p>{answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="entry-panel" id="entry">
          <div>
            <p className="section-kicker section-kicker-light">ENTRY / CONTACT</p>
            <h2>まずは、あなたの希望を聞かせてください。</h2>
            <p>
              仕事内容や費用を確認してから検討したい方も歓迎です。
              <br />
              応募前の相談だけでも、気軽にご連絡ください。
            </p>
          </div>
          <a
            className="button button-primary button-large"
            href="mailto:recruit@zendai-unso.example?subject=%E5%89%8D%E4%BB%A3%E9%81%8B%E9%80%81%E3%83%BB%E8%BB%BD%E8%B2%A8%E7%89%A9%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC%E5%BF%9C%E5%8B%9F%E7%9B%B8%E8%AB%87"
          >
            応募相談メールを開く
            <span aria-hidden="true">→</span>
          </a>
        </section>

        <aside className="draft-notice" aria-label="サイト公開前の確認事項">
          <strong>公開前チェック</strong>
          <p>
            ブランド名・対応エリア・収入実績・募集条件・連絡先は仮の内容です。実際の情報に差し替えてから公開してください。
          </p>
        </aside>
      </main>

      <a className="mobile-entry-bar" href="#entry">
        応募・相談はこちら
        <span aria-hidden="true">→</span>
      </a>

      <footer className="site-footer">
        <a className="brand brand-footer" href="#top" aria-label="前代運送 採用サイト トップへ">
          <span className="brand-mark" aria-hidden="true">
            前
          </span>
          <span className="brand-copy">
            <strong>前代運送</strong>
            <small>LIGHT CARGO RECRUIT</small>
          </span>
        </a>
        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <a href="#benefits">特徴</a>
          <a href="#income">収入例</a>
          <a href="#requirements">募集要項</a>
          <a href="#faq">FAQ</a>
        </nav>
        <p>© 2026 前代運送. All Rights Reserved.</p>
      </footer>
    </>
  );
}
