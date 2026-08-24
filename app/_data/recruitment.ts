export type ThemeId = "reliable" | "friendly" | "bold";
export type DesignId = ThemeId | "dashboard" | "story" | "portal";

export const company = {
  name: "前代運送",
  reading: "MAESHIRO UNSO",
  role: "軽貨物ドライバー募集",
  email: "recruit@maeshiro-unso.example",
};

export const themes: Array<{
  id: ThemeId;
  letter: string;
  name: string;
  japaneseName: string;
  headline: string;
  headlineParts: [string, string];
  summary: string;
}> = [
  {
    id: "reliable",
    letter: "A",
    name: "NAVY STANDARD",
    japaneseName: "信頼・端正",
    headline: "運ぶ仕事を、自分らしく。",
    headlineParts: ["運ぶ仕事を、", "自分らしく。"],
    summary: "企業としての安心感をまっすぐ伝える、ネイビー×ライムの基準案。",
  },
  {
    id: "friendly",
    letter: "B",
    name: "WARM EDITORIAL",
    japaneseName: "親しみ・温かさ",
    headline: "はじめての配送に、ちゃんと安心を。",
    headlineParts: ["はじめての配送に、", "ちゃんと安心を。"],
    summary: "人柄と相談しやすさを伝える、サンド×ティールの編集記事風。",
  },
  {
    id: "bold",
    letter: "C",
    name: "ROUTE POSTER",
    japaneseName: "大胆・求人訴求",
    headline: "まずは相談から。軽貨物ドライバーへ。",
    headlineParts: ["まずは相談から。", "軽貨物ドライバーへ。"],
    summary: "仕事の要点を力強く見せる、黒×シグナルイエローのポスター案。",
  },
];

export const designs: Array<{
  id: DesignId;
  letter: string;
  name: string;
  japaneseName: string;
  summary: string;
}> = [
  ...themes,
  {
    id: "dashboard",
    letter: "D",
    name: "JOB DASHBOARD",
    japaneseName: "要点一覧",
    summary: "仕事選びに必要な情報を、短く高密度に確認できるダッシュボード型。",
  },
  {
    id: "story",
    letter: "E",
    name: "WORK STORY",
    japaneseName: "ストーリー",
    summary: "応募前の疑問から働く一日まで、章を追って読める編集記事型。",
  },
  {
    id: "portal",
    letter: "F",
    name: "RECRUIT PORTAL",
    japaneseName: "採用ポータル",
    summary: "仕事内容・条件・応募方法を、知りたい順に選べる複数ページ型。",
  },
];

export function designPath(id: DesignId) {
  return id === "reliable" ? "/" : `/designs/${id}`;
}

export const benefits = [
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

export const incomeExamples = [
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

export const schedule = [
  ["9:00", "積み込み・ルート確認", "担当エリアの荷物を確認し、配送準備を行います。"],
  ["10:00", "午前の配送", "ルートに沿って、無理のないペースで配送します。"],
  ["12:00", "休憩", "配送状況を見ながら、自分のタイミングでひと息。"],
  ["13:00", "午後の配送", "再度荷物を確認し、担当先へ配送します。"],
  ["19:30", "業務報告・終了", "配送状況を報告して、その日の仕事は終了です。"],
] as const;

export const requirements = [
  ["業務内容", "軽バンによる個人宅・企業への荷物の配送"],
  ["契約形態", "業務委託"],
  ["応募資格", "普通自動車運転免許をお持ちの方（AT限定可）"],
  ["経験", "未経験歓迎／配送経験者も歓迎"],
  ["稼働エリア", "沖縄県本島"],
  ["稼働日・時間", "案件により異なります。希望条件は相談可能です"],
  ["報酬", "完全出来高制の案件と日当案件があります。金額・条件は案件により異なります"],
  ["車両", "持ち込み歓迎／稼働中のドライバーは全員、車両を無料でレンタル可能（自家利用可）"],
  ["費用", "燃料費・保険料・備品代は自己負担です"],
] as const;

export const applicationSteps = [
  ["01", "メールで応募・相談", "応募相談メールから、名前と希望の働き方をお知らせください。"],
  ["02", "担当者からご連絡", "希望する曜日・日数・エリアなどを伺います。"],
  ["03", "仕事内容をご説明", "報酬、費用、案件内容、契約条件を一緒に確認します。"],
  ["04", "準備後に稼働開始", "双方で条件に合意し、必要な準備を整えてスタート。"],
] as const;

export const faqs = [
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
] as const;

export const navItems = [
  ["#benefits", "特徴"],
  ["#income", "収入例"],
  ["#day", "1日の流れ"],
  ["#requirements", "募集要項"],
  ["#flow", "応募の流れ"],
  ["#faq", "よくある質問"],
] as const;

export const quickFacts = [
  ["WORK", "軽貨物配送"],
  ["STYLE", "業務委託"],
  ["AREA", "沖縄県本島"],
] as const;

export const heroPoints = ["未経験歓迎", "普通免許で応募OK", "車両無料レンタル"] as const;
export const recommendedFor = ["運転することが好き", "自分のペースで働きたい", "頑張りを仕事に活かしたい"] as const;

export const incomeDisclaimer =
  "※上記は月間売上の実績例であり、収入を保証するものではありません。報酬は案件内容、配送件数、稼働日数・時間、エリアなどにより変動します。税金、保険料、燃料費、備品代その他の経費が別途必要となる場合があります。";

export function getTheme(id: ThemeId) {
  return themes.find((theme) => theme.id === id) ?? themes[0];
}

export function entryMailto() {
  const subject = encodeURIComponent("前代運送・軽貨物ドライバー応募相談");
  return `mailto:${company.email}?subject=${subject}`;
}
