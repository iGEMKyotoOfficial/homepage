export interface Member {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  grade: string;
  faculty: string;
  role: string;
  hobby: string;
  comment: string;
}

export const members: Member[] = [
  {
    id: "nitta",
    name: "新田紗也",
    nameEn: "Saya Nitta",
    image: "/images/members/nitta.jpg",
    grade: "2回生",
    faculty: "農学部食品生物科学科",
    role: "チームリーダー、HP、Wet",
    hobby: "お菓子作り、運動",
    comment: "24時間働ける人になりたい",
  },
  {
    id: "shiogai",
    name: "塩貝真礼",
    nameEn: "Mahiro Shiogai",
    image: "/images/members/shiogai.jpg",
    grade: "2回生",
    faculty: "工学部理工化学科",
    role: "Wet",
    hobby: "お菓子作り、運動",
    comment: "ナマケモノとパンダが癒しです",
  },
  {
    id: "kanki",
    name: "神吉花栄",
    nameEn: "Hanae Kanki",
    image: "/images/members/kanki.jpg",
    grade: "2回生",
    faculty: "工学部理工化学科",
    role: "Wet",
    hobby: "ランニング、ドラマ鑑賞",
    comment: "24時間歩けます。",
  },
  {
    id: "nishizaka",
    name: "西坂勇星",
    nameEn: "Yusei Nishizaka",
    image: "/images/members/nishizaka.jpg",
    grade: "2回生",
    faculty: "薬学部",
    role: "Wetリーダー",
    hobby: "いろいろなお茶",
    comment: "みんなも実験しよう！",
  },
  {
    id: "koreeda",
    name: "是枝里咲",
    nameEn: "Lisa Koreeda",
    image: "/images/members/koreeda.jpg",
    grade: "2回生",
    faculty: "医学部人間健康科学科",
    role: "会計、Wet、Wiki",
    hobby: "アニメ鑑賞",
    comment: "コンタクトが言うこと聞いてくれない",
  },
  {
    id: "wakita",
    name: "脇田悠希",
    nameEn: "Yuki Wakita",
    image: "/images/members/wakita.jpg",
    grade: "2回生",
    faculty: "工学部情報学科",
    role: "Wikiリーダー",
    hobby: "ギター、旅行",
    comment: "丁寧な生活を心がけたい",
  },
  {
    id: "asai",
    name: "浅井知顕",
    nameEn: "Tomoaki Asai",
    image: "/images/members/asai.jpg",
    grade: "2回生",
    faculty: "理学部",
    role: "ドライリーダー",
    hobby: "読書",
    comment: "すべて世は事も無し",
  },
   {
    id: "igeta",
    name: "井桁快音",
    nameEn: "Kaito Igeta",
    image: "/images/members/igeta.jpg",
    grade: "2回生",
    faculty: "理学部",
    role: "ドライ",
    hobby: "ベース、数学",
    comment: "いろんな多様体上に住んでみたい",
  }
];
