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
    title: "車両がなくても始められる",
    copy: "稼働中は、軽バンを無料でレンタル可能。自家利用もできます。燃料費・保険料・備品代は自己負担です。",
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
  ["9:00", "積み込み・ルート確認", "担当エリアの荷物を確認し、配送準備を行います。"],
  ["10:00", "午前の配送", "ルートに沿って、無理のないペースで配送します。"],
  ["12:00", "休憩", "配送状況を見ながら、自分のタイミングでひと息。"],
  ["13:00", "午後の配送", "再度荷物を確認し、担当先へ配送します。"],
  ["19:30", "業務報告・終了", "配送状況を報告して、その日の仕事は終了です。"],
];

const requirements = [
  ["業務内容", "軽バンによる個人宅・企業への荷物の配送"],
  ["契約形態", "業務委託"],
  ["応募資格", "普通自動車運転免許をお持ちの方（AT限定可）"],
  ["経験", "未経験歓迎／配送経験者も歓迎"],
  ["稼働エリア", "沖縄県本島"],
  ["稼働日・時間", "案件により異なります。希望条件は相談可能です"],
  ["報酬", "完全出来高制の案件と日当案件があります。金額・条件は案件により異なります"],
  ["車両", "持ち込み歓迎／稼働中のドライバーは全員、車両を無料でレンタル可能（自家利用可）"],
  ["費用", "燃料費・保険料・備品代は自己負担です"],
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
    "はい。稼働中は全員、車両を無料でレンタルできます。レンタル車は自家利用も可能です。",
  ],
  [
    "初期費用はかかりますか？",
    "車両レンタル料は無料ですが、燃料費・保険料・備品代は自己負担です。その他の費用は案件ごとにご説明します。",
  ],
  [
    "どのくらいの収入になりますか？",
    "完全出来高制の案件と日当案件があります。案件・配送件数・稼働日数・時間などにより異なるため、詳しい条件は面談時にご案内します。",
  ],
  [
    "稼働する曜日や日数は選べますか？",
    "希望は相談可能です。ただし、案件ごとに募集曜日や稼働条件があるため、面談時に調整します。",
  ],
  [
    "配送エリアは選べますか？",
    "稼働エリアは沖縄県本島です。案件の募集状況や担当エリアは、面談時にご案内します。",
  ],
];

const navItems = [
  ["#benefits", "特徴"],
  ["#income", "収入例"],
  ["#day", "1日の流れ"],
  ["#requirements", "募集要項"],
  ["#flow", "応募の流れ"],
  ["#faq", "よくある質問"],
];

const publicAssetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

/* Text glyphs (✓ ↗ →) render at a different weight, baseline and
   width in every JP font fallback. Inline SVG renders identically. */
function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.75 8.5 6.25 12l7-8"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ down = false }: { down?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ width: 15, height: 15, flex: "none", transform: down ? "rotate(90deg)" : undefined }}
    >
      <path
        d="M2.5 8h11m0 0-4.25-4.25M13.5 8l-4.25 4.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
          {navItems.slice(0, 4).map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="header-cta" href="#entry">
            まずは相談する
            <ArrowIcon />
          </a>
        </nav>
      </header>

      {/* Phone navigation. The previous build hid every nav link
          below 980px and shipped no menu, leaving no way to reach
          a section from a phone. */}
      <nav className="section-rail" aria-label="セクションナビゲーション">
        {navItems.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" />
              軽貨物ドライバー募集
            </p>
            <h1>
              運ぶ仕事を、
              <br />
              <em>自分らしく</em>。
            </h1>
            <p className="hero-lead">
              未経験から、あなたらしい働き方へ。
              <br />
              希望に合う軽貨物配送の仕事を一緒に探します。
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#entry">
                まずは仕事内容を聞く
                <ArrowIcon />
              </a>
              <a className="text-link" href="#benefits">
                働き方を見る
                <ArrowIcon down />
              </a>
            </div>

            <ul className="hero-points" aria-label="応募のポイント">
              {["未経験歓迎", "普通免許で応募OK", "車両無料レンタル"].map((point) => (
                <li key={point}>
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <picture className="hero-picture">
              <source
                type="image/avif"
                srcSet={`${publicAssetPrefix}/hero-driver-800.avif 800w, ${publicAssetPrefix}/hero-driver-1586.avif 1586w`}
                sizes="(max-width: 980px) 100vw, 52vw"
              />
              <source
                type="image/webp"
                srcSet={`${publicAssetPrefix}/hero-driver-800.webp 800w, ${publicAssetPrefix}/hero-driver-1586.webp 1586w`}
                sizes="(max-width: 980px) 100vw, 52vw"
              />
              <img
                src={`${publicAssetPrefix}/hero-driver.png`}
                alt="白い軽バンの前で荷物を持つ配送ドライバー"
                width="1586"
                height="992"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 980px) 100vw, 52vw"
              />
            </picture>
            <div className="hero-badge">
              <span>ENTRY</span>
              <strong>応募前の相談だけでもOK</strong>
            </div>
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
            <strong>沖縄県本島</strong>
          </div>
          <p>働き方・案件は相談可能です</p>
        </section>

        <section className="section split benefits" id="benefits">
          <div className="section-heading">
            <p className="section-kicker">OUR ADVANTAGES</p>
            <h2>はじめやすく、続けやすい仕事へ。</h2>
            <p>配送の仕事が初めてでも大丈夫。希望を聞くところから始めます。</p>
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
              </article>
            ))}
          </div>
        </section>

        <section className="income-section" id="income">
          <div className="income-inner">
            <div className="income-heading">
              <p className="section-kicker section-kicker-light">INCOME EXAMPLES</p>
              <h2>働き方で変わる、3つの売上実績例。</h2>
              <p>自分のペースも、しっかり稼働も。希望する働き方をご相談ください。</p>
            </div>

            <div className="income-grid">
              {incomeExamples.map((example) => (
                <article className="income-card" key={example.name}>
                  <span className="income-tag">{example.tag}</span>
                  <p className="income-name">{example.name}</p>
                  <p className="income-amount">
                    <small>月間売上</small>
                    <span className="income-figure">
                      <strong>{example.amount}</strong>
                      <span>万円</span>
                    </span>
                  </p>
                  <div className="income-meta">
                    <span>{example.days}</span>
                    <span>{example.note}</span>
                  </div>
                </article>
              ))}
            </div>

            <p className="income-note">
              ※上記は月間売上の実績例であり、収入を保証するものではありません。報酬は案件内容、配送件数、稼働日数・時間、エリアなどにより変動します。税金、保険料、燃料費、備品代その他の経費が別途必要となる場合があります。
            </p>
          </div>
        </section>

        <section className="section split day-section" id="day">
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
          <div className="requirements-inner split">
            <div className="requirements-intro">
              <p className="section-kicker">JOB DETAILS</p>
              <h2>募集要項</h2>
              <p>
                わからないことは、応募前に確認できます。条件を納得してから始めてください。
              </p>

              <aside className="fit-card">
                <span>こんな方におすすめ</span>
                <ul>
                  {["運転することが好き", "自分のペースで働きたい", "頑張りを仕事に活かしたい"].map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
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
          <div className="faq-inner split">
            <div className="section-heading faq-heading">
              <p className="section-kicker">FAQ</p>
              <h2>よくあるご質問</h2>
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
                    <span aria-hidden="true">A</span>
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
              仕事内容や費用を確認してから検討したい方も歓迎です。応募前の相談だけでも、気軽にご連絡ください。
            </p>
          </div>
          <a
            className="button button-primary button-large"
            href="mailto:recruit@maeshiro-unso.example?subject=%E5%89%8D%E4%BB%A3%E9%81%8B%E9%80%81%E3%83%BB%E8%BB%BD%E8%B2%A8%E7%89%A9%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC%E5%BF%9C%E5%8B%9F%E7%9B%B8%E8%AB%87"
          >
            応募相談メールを開く
            <ArrowIcon />
          </a>
        </section>
      </main>

      <a className="mobile-entry-bar" href="#entry">
        応募・相談はこちら
        <ArrowIcon />
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
          {navItems.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <p>© 2026 前代運送. All Rights Reserved.</p>
      </footer>
    </>
  );
}
