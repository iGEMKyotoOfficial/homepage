export interface PastMember {
  name: string;
  image: string;
  affiliation: string;
  role?: string;
  hobby?: string;
  comment?: string;
}

export interface PastMemberListEntry {
  name: string;
  info: string;
}

export interface PastYear {
  year: string;
  theme?: string;
  wikiUrl?: string;
  members?: PastMember[];
  memberList?: PastMemberListEntry[];
}

const archive = (year: string, file: string) =>
  `/images/members/archive/${year}/${file}`;

export const pastMembers: PastYear[] = [
  {
    year: "2025",
    theme: "Avisptosis",
    wikiUrl: "https://2025.igem.wiki/kyoto/index.html",
    members: [
      {
        name: "中村 陽斗(Haruto Nakamura)",
        image: archive("2025", "2025_nakamura.jpg"),
        affiliation: "農学部資源生物科学科",
        role: "Team Leader, Hardware",
        hobby: "ロードバイク",
        comment: "勝つ",
      },
      {
        name: "岡 央大(Yota Oka)",
        image: archive("2025", "2025_oka.jpg"),
        affiliation: "理学部理学科",
        role: "Wet, Dry",
        hobby: "カラオケ、製菓",
        comment: "必死に、生きています。",
      },
      {
        name: "岡山 太陽(Taiyo Okayama)",
        image: archive("2025", "2025_okayama.jpg"),
        affiliation: "理学部理学科",
        role: "Modeling",
        hobby: "読書、Minecraft、Youtube",
        comment: "「ジンジン」というあだ名が非常に覚えやすいです。",
      },
      {
        name: "八木 宥暁(Hiroaki Yagi)",
        image: archive("2025", "2025_yagi.jpg"),
        affiliation: "理学部理学科",
        role: "Software, Modeling",
        hobby: "二度寝、数学",
        comment: "若返りたい",
      },
      {
        name: "橋本 麻利(Mari Hashimoto)",
        image: archive("2025", "2025_hashimoto.jpg"),
        affiliation: "農学部森林科学科",
        role: "Accounting",
        hobby: "スピードスケート、あつ森",
        comment: "過密スケジュールに詰め込むお昼寝タイムが好き",
      },
      {
        name: "宋 嘉楽(Jiale Song)",
        image: archive("2025", "2025_song.jpg"),
        affiliation: "理学部理学科",
        role: "Wet, Modeling",
        hobby: "昆虫採集、遠出",
        comment: "瓜生山の幽霊",
      },
      {
        name: "南山 遥輝(Haruki Minamiyama)",
        image: archive("2025", "2025_minamiyama.jpg"),
        affiliation: "農学部森林科学科",
        role: "Human practice, Wet",
        hobby: "写真撮影、料理",
        comment: "生物にあんまり詳しくありません",
      },
      {
        name: "馬場 萌枝(Moe Baba)",
        image: archive("2025", "2025_baba.jpg"),
        affiliation: "農学部森林科学科",
        role: "Wet",
        hobby: "ヴァイオリン、苔採集",
        comment: "睡眠時間8時間確保！",
      },
      {
        name: "矢吹 一真(Kazuma Yabuki)",
        image: archive("2025", "2025_yabuki.jpg"),
        affiliation: "理学部理学科",
        role: "Modeling",
        hobby: "将棋、微生物採集",
        comment: "ビリにならないように頑張ります",
      },
      {
        name: "片岡 茉優(Mayu Kataoka)",
        image: archive("2025", "2025_kataoka.jpg"),
        affiliation: "工学部理工化学科",
        role: "Wiki",
        hobby: "珈琲、ピラティス、旅行",
        comment: "経験にお金をかけて上品な女性になります",
      },
      {
        name: "太田 長杜(Taketo Ota)",
        image: archive("2025", "2025_ota.jpg"),
        affiliation: "理学部理学科",
        role: "Human Practice",
        hobby: "バードウォッチング、昆虫採集",
        comment: "採集した昆虫から写真を提供してもらいました",
      },
      {
        name: "瀬川 はると(Haruto Segawa)",
        image: archive("2025", "2025_segawa.jpg"),
        affiliation: "農学部資源生物科学科",
        role: "Wet, Human Practice",
        hobby: "ルービックキューブ",
        comment: "皆で仲良く頑張ります",
      },
    ],
  },
  {
    year: "2024",
    theme: "ShowgNs",
    wikiUrl: "https://2024.igem.wiki/kyoto/",
    members: [
      {
        name: "桐山 賢斗 (Kento Kiriyama)",
        image: archive("2024", "2024_kiriyama.jpg"),
        affiliation: "Sophomore of Faculty of Pharmacy, Kyoto University",
        role: "Team Leader, Modeling Leader",
        hobby: "History (especially Azuchi–Momoyama period)",
        comment: "大一大万大吉",
      },
      {
        name: "岡本 はる (Haru Okamoto)",
        image: archive("2024", "2024_okamoto.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
        role: "Wet Leader",
        hobby: "惰眠、生物採集、買い物、模型ロケット",
        comment: "Plan, Delay, Cancel, Apologize",
      },
      {
        name: "原田 茉優 (Mayu Harada)",
        image: archive("2024", "2024_harada.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
        role: "Project Leader, Human Practice",
        hobby: "古刹巡り、ゼンタングル",
        comment: "永久凍土に移住したい。",
      },
      {
        name: "中井 愛(Mana Nakai)",
        image: archive("2024", "2024_nakai.jpg"),
        affiliation:
          "Sophomore of the Department of Bioresource Science, the Faculty of Agriculture, Kyoto University",
        role: "Human Practice Leader",
        hobby: "お笑い鑑賞",
        comment: "愛のある変人になりたい",
      },
      {
        name: "橋本 麻利 (Mari Hashimoto)",
        image: archive("2024", "2024_hashimoto.jpg"),
        affiliation:
          "Freshman of the Department of Forest Science, the Faculty of Agriculture, Kyoto University",
        role: "Wiki",
        hobby: "カエル鑑賞、アラビア語",
        comment: "カエルと暮らしたい‼",
      },
      {
        name: "矢吹 一真(Kazuma Yabuki)",
        image: archive("2024", "2024_yabuki.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        role: "Modeling",
        hobby: "将棋、微生物採集、タイピング",
        comment: "ドベにならないように頑張ります",
      },
      {
        name: "岩田 心愛 (Haruchika Iwata)",
        image: archive("2024", "2024_iwata.jpg"),
        affiliation:
          "Freshman of the Department of the Electrical and Electronic Science, the Faculty of Engineering, Kyoto University",
        role: "Hardware",
        hobby: "アニメ鑑賞",
        comment: "大学まで片道2時間です",
      },
      {
        name: "片岡 茉優 (Mayu Kataoka)",
        image: archive("2024", "2024_kataoka.jpg"),
        affiliation:
          "Freshman of the Department of Industrial Chemistry, the Faculty of Engineering, Kyoto University",
        role: "Wiki",
        hobby: "ピラティス、珈琲",
        comment: "朝型",
      },
      {
        name: "馬場 萌枝 (Moe Baba)",
        image: archive("2024", "2024_baba.jpg"),
        affiliation:
          "Freshman of the Department of Forest Science, the Faculty of Agriculture, Kyoto University",
        role: "Wet Experiment, Wiki",
        hobby: "ヴァイオリン、苔採集",
        comment: "睡眠時間8時間確保！",
      },
      {
        name: "宋 嘉楽 (Jiale Song)",
        image: archive("2024", "2024_song.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        role: "Wet Experiment, Modeling",
        hobby: "昆虫採集、遠出",
        comment: "瓜生山の幽霊",
      },
      {
        name: "中村 陽斗(Haruto Nakamura)",
        image: archive("2025", "2025_nakamura.jpg"),
        affiliation:
          "Freshman of the Department of Forest Science, the Faculty of Agriculture, Kyoto University",
        role: "Hardware",
        hobby: "ロードバイク",
        comment: "勝つ",
      },
      {
        name: "岡 央大(Yota Oka)",
        image: archive("2025", "2025_oka.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        role: "Human Practice",
        hobby: "カラオケ、製菓",
        comment: "必死に、生きています。",
      },
      {
        name: "岡山 太陽(Taiyo Okayama)",
        image: archive("2025", "2025_okayama.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        role: "Modeling",
        hobby: "読書、Minecraft、Youtube",
      },
      {
        name: "八木 宥暁(Hiroaki Yagi)",
        image: archive("2025", "2025_yagi.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        role: "Software",
        hobby: "二度寝、数学",
      },
      {
        name: "南山 遥輝(Haruki Minamiyama)",
        image: archive("2025", "2025_minamiyama.jpg"),
        affiliation:
          "Freshman of the Department of Forest Science, the Faculty of Agriculture, Kyoto University",
        role: "Human Practice",
        hobby: "写真撮影、料理",
      },
      {
        name: "太田 長杜(Taketo Ota)",
        image: archive("2025", "2025_ota.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        role: "Human Practice",
        hobby: "バードウォッチング、昆虫採集",
        comment: "採集した昆虫から写真を提供してもらいました",
      },
      {
        name: "瀬川 はると(Haruto Segawa)",
        image: archive("2025", "2025_segawa.jpg"),
        affiliation:
          "Freshman of the Department of Bioresource Science, the Faculty of Agriculture, Kyoto University",
        role: "Software",
        hobby: "ルービックキューブ",
        comment: "皆で仲良く頑張ります",
      },
    ],
  },
  {
    year: "2023",
    theme: "Avoideer",
    wikiUrl: "https://2023.igem.wiki/kyoto/",
    members: [
      {
        name: "石橋 凌平 (Ryohei ISHIBASHI)",
        image: archive("2023", "2023_ishibashi.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        role: "Team Leader",
        hobby: "旅行、映画",
        comment:
          "An error occurred. If this issue persists please contact at nemunemunyanko[dot]com",
      },
      {
        name: "阿部 惇之介 (Junnosuke ABE)",
        image: archive("2023", "2023_abe.jpg"),
        affiliation:
          "Sophomore of the Department of Civil, Environmental and Resources Engineering, the Faculty of Engineering, Kyoto University",
        role: "Wet experiment",
        hobby: "読書風妄想",
        comment:
          "見ていても動かないが気づけば進んでいる、そんな亀みたいな人間です。どうぞよろしく。",
      },
      {
        name: "稲垣 雄太 (Yuta INAGAKI)",
        image: archive("2023", "2023_inagaki.jpg"),
        affiliation:
          "Freshman of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
        role: "Wet Experiment",
        hobby: "旅行、空手",
        comment: "時間は創るものですよね……",
      },
      {
        name: "内山 新平 (Shimpei UCHIYAMA)",
        image: archive("2023", "2023_uchiyama.jpg"),
        affiliation:
          "Senior of the Department of Industrial Chemistry, the Faculty of Engineering, Kyoto University",
        role: "Paper Search",
        hobby: "Soccer",
        comment: "一番多忙な人間が一番多くの時間を持つ",
      },
      {
        name: "岡本 陽（Haru OKAMOTO)",
        image: archive("2023", "2023_okamoto.jpg"),
        affiliation:
          "Freshman of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
        role: "Wet Experiment",
        hobby: "魚とり、買い物",
        comment: "英語が読めません。",
      },
      {
        name: "金井 志耕(Shiko KANAI)",
        image: archive("2023", "2023_kanai.jpg"),
        affiliation:
          "Freshman of the Department of Bioresource Science, the Faculty of Agriculture, Kyoto University",
        role: "Wet Experiment",
        hobby: "魚釣り、雑草",
        comment: "追い詰められると頑張るタイプです",
      },
      {
        name: "桐山 賢斗 (Kento Kiriyama)",
        image: archive("2023", "2023_kiriyama.jpg"),
        affiliation:
          "Freshman of the Department of Pharmaceutical Sciences, Faculty of Pharmaceutical Science, Kyoto University",
        role: "Dry Experiment, Wet Experiment",
        hobby: "tennis",
        comment: "桐-Kiri-iGEM編episode of side K",
      },
      {
        name: "須澤 令 (Rei SUZAWA)",
        image: archive("2023", "2023_suzawa.jpg"),
        affiliation:
          "Freshman of the Department of Forest and Biomaterials Science, the Faculty of Agriculture, Kyoto University",
        role: "Wet Experiment",
        hobby: "サッカー、ゲーム、サイクリング、旅行",
      },
      {
        name: "関川 隆 (Ryu SEKIKAWA)",
        image: archive("2023", "2023_sekikawa.jpg"),
        affiliation:
          "Sophomore of the Department of Medicine, the Faculty of Medicine, Kyoto University",
        role: "Wet Experiment, Human Practice",
        hobby: "鉄道旅行",
        comment: "一般的な変人京大生です",
      },
      {
        name: "土田 美咲 (Misaki TSUCHIDA)",
        image: archive("2023", "2023_tsuchida.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
        role: "Wiki, Accounting and Design",
        hobby: "Basketball",
        comment: "Daily coffee and tea",
      },
      {
        name: "林 泰瑶 (Taiyo HAYASHI)",
        image: archive("2023", "2023_hayashi.jpg"),
        affiliation: "Senior of the Faculty of Science, Kyoto University",
        role: "Wiki, Dry Experiment",
        hobby: "競プロ, ゲーム",
        comment: "いつも心に太陽を",
      },
      {
        name: "福岡 大空 (Taku FUKUOKA)",
        image: archive("2023", "2023_fukuoka.jpg"),
        affiliation:
          "Sophomore of the Department of Forest and Biomaterials Science, the Faculty of Agriculture, Kyoto University",
        role: "Collaboration, Education",
        hobby: "生け花",
        comment: "目指せ脱力",
      },
      {
        name: "三笘 隼人 (Hayato MITOMA)",
        image: archive("2023", "2023_mitoma.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        role: "Wet Experiment",
        hobby: "生物採集",
        comment: "Everything happens for a reason.",
      },
      {
        name: "三原 一星 (Issei MIHARA)",
        image: archive("2023", "2023_mihara.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        role: "Project Leader",
        hobby: "Piano",
        comment: "Where there's a will, there's a way.",
      },
      {
        name: "モンタネズ マリヤナ (Marjana MONTANEZ)",
        image: archive("2023", "2023_jana.jpg"),
        affiliation:
          "Junior of the Department of Industrial Chemistry, the Faculty of Engineering, Kyoto University",
        role: "Paper Search, Wet Experiment",
        hobby: "執筆",
        comment: "パラジウム触媒万能",
      },
    ],
  },
  {
    year: "2022",
    members: [
      {
        name: "早松 龍正 (Ryusei HAYAMATSU)",
        image: archive("2022", "2022_hayamatsu.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
        role: "Team Leader",
        comment: "俺",
      },
      {
        name: "阿部 惇之介 (Junnosuke ABE)",
        image: archive("2022", "2022_abe.jpg"),
        affiliation:
          "Freshman of the Department of Civil, Environmental and Resources Engineering, the Faculty of Engineering, Kyoto University",
        comment: "驚くべき自己紹介の原稿を提案したが却下されました",
      },
      {
        name: "石橋 凌平 (Ryohei ISHIBASHI)",
        image: archive("2022", "2022_ishibashi.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "Standing on the Shoulder of Giants",
      },
      {
        name: "川上 咲季 (Saki KAWAKAMI)",
        image: archive("2022", "2022_kawakami.jpg"),
        affiliation:
          "Junior of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
        comment: "ふうむ",
      },
      {
        name: "後藤 優理子 (Yuriko GOTO)",
        image: archive("2022", "2022_goto.jpg"),
        affiliation:
          "Freshman of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
      },
      {
        name: "関川 隆 (Ryu SEKIKAWA)",
        image: archive("2022", "2022_sekikawa.jpg"),
        affiliation:
          "Sophomore of the Department of Medicine, the Faculty of Medicine, Kyoto University",
        comment: "一般的な変人京大生です",
      },
      {
        name: "土田 美咲 (Misaki TSUCHIDA)",
        image: archive("2022", "2022_tsuchida.jpg"),
        affiliation:
          "Freshman of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
        comment: "If I were born again, I'd want to be a sweet potato.",
      },
      {
        name: "林 泰瑶 (Taiyo HAYASHI)",
        image: archive("2022", "2022_hayashi.jpg"),
        affiliation: "Junior of the Faculty of Science, Kyoto University",
        comment: "好きこそ物の上手なれ",
      },
      {
        name: "福岡 大空 (Taku FUKUOKA)",
        image: archive("2022", "2022_fukuoka.jpeg"),
        affiliation:
          "Freshman of the Department of Forest and Biomaterials Science, the Faculty of Agriculture, Kyoto University",
        comment: "牡丹",
      },
      {
        name: "福嶋 陸斗 (Rikuto FUKUSHIMA)",
        image: archive("2022", "2022_fukushima.jpg"),
        affiliation: "Junior of the Faculty of Science, Kyoto University",
        comment: "ぐるぐる",
      },
      {
        name: "前田 佳穂 (Kaho MAETA)",
        image: archive("2022", "2022_maeta.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Science, the Faculty of Agriculture, Kyoto University",
        comment: "知好楽",
      },
      {
        name: "三笘 隼人 (Hayato MITOMA)",
        image: archive("2022", "2022_mitoma.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "Udon and soba taste the same",
      },
      {
        name: "三原 一星 (Issei MIHARA)",
        image: archive("2022", "2022_mihara.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "夜更かしと寝坊のtwo-way player",
      },
      {
        name: "モンタネズ マリヤナ (Marjana MONTANEZ)",
        image: archive("2022", "2022_jana.jpg"),
        affiliation:
          "Sophomore of the Department of Industrial Chemistry, the Faculty of Engineering, Kyoto University",
        comment: "日本語上手やな",
      },
    ],
  },
  {
    year: "2021",
    theme: "FLOWEREVER",
    wikiUrl: "https://2021.igem.org/Team:Kyoto",
    members: [
      {
        name: "福嶋 陸斗 (Rikuto FUKUSHIMA)",
        image: archive("2021", "2021_fukushima.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        role: "Team Leader",
        comment: "Connecting the dots",
      },
      {
        name: "植田 悠斗 (Yuto UEDA)",
        image: archive("2021", "2021_ueda.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment:
          "2021年度の実験リーダーを務めています。どうぞよろしくお願いします。さよなら",
      },
      {
        name: "小林 勇毅 (Yuki KOBAYASHI)",
        image: archive("2021", "2021_kobayashi.jpg"),
        affiliation: "Senior of the Faculty of Science, Kyoto University",
        comment: "常に新しいモノに触れて",
      },
      {
        name: "田向 健人 (Kento TAMUKAI)",
        image: archive("2021", "2021_tamukai.jpg"),
        affiliation: "Senior of the Faculty of Pharmacy, Kyoto University",
        comment: "Only output is work.",
      },
      {
        name: "田島 奈桜 (Nao TAJIMA)",
        image: archive("2021", "2021_tajima.jpg"),
        affiliation:
          "Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "睡眠とネコ",
      },
      {
        name: "西澤 知里 (Chisato NISHIZAWA)",
        image: archive("2021", "2021_nishizawa.jpg"),
        affiliation:
          "Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "Be powerful like a flower.",
      },
      {
        name: "林田 ももこ (Momoko HAYASHIDA)",
        image: archive("2021", "2021_hayashida.jpg"),
        affiliation:
          "Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "1UPしたい",
      },
      {
        name: "アレクサンダー Y. リュウ (Alexander Y. LIU)",
        image: archive("2021", "2021_liu.jpeg"),
        affiliation: "Junior of the Faculty of Science, Kyoto University",
        comment: "Throwing out the key and just living in a dream",
      },
      {
        name: "川上 咲季 (Saki KAWAKAMI)",
        image: archive("2021", "2021_kawakami.jpg"),
        affiliation:
          "Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University",
      },
      {
        name: "合屋 智尋 (Chihiro GOYA)",
        image: archive("2021", "2021_goya.jpg"),
        affiliation:
          "Sophomore of the Department of Medicine, Faculty of Medicine, Kyoto University",
        comment: "きなななななななこアイスたべたい",
      },
      {
        name: "古賀 大翔 (Hiroto KOGA)",
        image: archive("2021", "2021_koga.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment: "アサガオと共に生きる",
      },
      {
        name: "田中 風帆 (Kaho TANAKA)",
        image: archive("2021", "2021_tanaka.jpg"),
        affiliation:
          "Sophomore of the Department of Informatics and Mathematical Science, Faculty of Engineering, Kyoto University",
        comment: "ドラえもん！",
      },
      {
        name: "田村 響 (Hibiki TAMURA)",
        image: archive("2021", "2021_tamura.jpg"),
        affiliation:
          "Sophomore of the Department of Human Health Science, Faculty of Medicine, Kyoto University",
        comment: "フリーアイコン募集中",
      },
      {
        name: "林 泰瑶 (Taiyo HAYASHI)",
        image: archive("2021", "2021_hayashi.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment: "Go big or stay home.",
      },
      {
        name: "廣田 亮太郎 (Ryotaro HIROTA)",
        image: archive("2021", "2021_hirota.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment: "おはようじょ",
      },
      {
        name: "中路 和良 (Kazuyoshi NAKAJI)",
        image: archive("2021", "2021_nakaji.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment: "King Gnu 白目",
      },
      {
        name: "前田 佳穂 (Kaho MAETA)",
        image: archive("2021", "2021_maeta.jpg"),
        affiliation:
          "Freshman of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "諸行無常",
      },
      {
        name: "森田 歩 (Ayumi MORITA)",
        image: archive("2021", "2021_morita.jpg"),
        affiliation:
          "Freshman of the Department of Human Health Science, Faculty of Medicine, Kyoto University",
        comment: "愛と勇気とホメオスタシス",
      },
    ],
  },
  {
    year: "2020",
    members: [
      {
        name: "芝 雄介 (Yusuke SHIBA)",
        image: archive("2020", "team-2020-shiba.jpg"),
        affiliation:
          "Sophomore of the Department of Bioresource Science, Faculty of Agriculture, Kyoto University",
        role: "Team Leader",
        comment: "寝不足は寝るしかない",
      },
      {
        name: "アレクサンダー Y. リュウ (Alexander Y. LIU)",
        image: archive("2020", "team-2020-ryu.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment: "Cause I love how it feels when I break the chains",
      },
      {
        name: "小林 勇毅 (Yuki KOBAYASHI)",
        image: archive("2020", "team-2020-kobayashi2.jpg"),
        affiliation: "Junior of the Faculty of Science, Kyoto University",
        comment: "Let's go on a long, long journey.",
      },
      {
        name: "山内 萌々乃 (Momono YAMAUCHI)",
        image: archive("2020", "team-2020-yamauchi2.jpg"),
        affiliation:
          "Junior of the Department of Human Health Science, the Faculty of Medicine, Kyoto University",
        comment: "赤血球とぺんぎんとごはんの時間",
      },
      {
        name: "池田 雄太郎 (Yutaro IKEDA)",
        image: archive("2020", "team-2020-ikeda.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment: "A piece of cake!",
      },
      {
        name: "岸田 尚大 (Naoto KISHIDA)",
        image: archive("2020", "team-2020-kishida.jpg"),
        affiliation: "Sophomore of the Faculty of Pharmacy, Kyoto University",
        comment: "できる後輩です。by Yuki KOBAYASHI",
      },
      {
        name: "迫野 眞大 (Masahiro SAKONO)",
        image: archive("2020", "team-2020-sakono.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "Work like a dog. Sleep like a log.",
      },
      {
        name: "田島 奈桜 (Nao TAJIMA)",
        image: archive("2020", "team-2020-tajima.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "ネコとみかん",
      },
      {
        name: "西澤 知里 (Chisato NISHIZAWA)",
        image: archive("2020", "team-2020-nishizawa2.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment:
          "I appreciate being blessed with wonderful colleagues. May this difficult year become worthwhile!",
      },
      {
        name: "西村 怜緒 (Reo NISHIMURA)",
        image: archive("2020", "team-2020-nishimura.jpg"),
        affiliation: "Sophomore of the Faculty of Pharmacy, Kyoto University",
        comment: "Proceed like a locomotive!",
      },
      {
        name: "林田 ももこ (Momoko HAYASHIDA)",
        image: archive("2020", "team-2020-hayashida.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "お寺と亀が好きです",
      },
      {
        name: "植田 悠斗 (Yuto UEDA)",
        image: archive("2020", "team-2020-ueda.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "未知の遊星からの物体E.T.との遭遇",
      },
      {
        name: "川上 咲季 (Saki KAWAKAMI)",
        image: archive("2020", "team-2020-kawakami.jpg"),
        affiliation:
          "Freshman of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University",
        comment: "趣味は悪ふざけ",
      },
      {
        name: "合屋 智尋 (Chihiro GOYA)",
        image: archive("2020", "team-2020-goya.jpg"),
        affiliation:
          "Freshman of the Department of Medicine, Faculty of Medicine, Kyoto University",
        comment: "おなかすいた",
      },
      {
        name: "古賀 大翔 (Hiroto KOGA)",
        image: archive("2020", "team-2020-koga.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "両生類になりたい",
      },
      {
        name: "林 泰瑶 (Taiyo HAYASHI)",
        image: archive("2020", "team-2020-hayashi.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "今日から本気出す",
      },
      {
        name: "廣田 亮太郎 (Ryotaro HIROTA)",
        image: archive("2020", "team-2020-hirota.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "Sis Puella Magica!",
      },
      {
        name: "福嶋 陸斗 (Rikuto FUKUSHIMA)",
        image: archive("2020", "team-2020-fukushima.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "睡眠こそ至高",
      },
    ],
  },
  {
    year: "2019",
    theme: "My Clothes' Plastic",
    wikiUrl: "https://2019.igem.org/Team:Kyoto",
    members: [
      {
        name: "田向 健人 (Kento TAMUKAI)",
        image: archive("2019", "team-2019-tamukai.jpg"),
        affiliation: "Sophomore of the Faculty of Pharmacy, Kyoto University",
        role: "Team Leader",
        comment: "チャリに鍵かけたっけな",
      },
      {
        name: "島添 將誠 (Masaki SHIMAZOE)",
        image: archive("2019", "team-2019-shimazoe.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment: "Chromosomes! Love you!",
      },
      {
        name: "仲里 佳子 (Kako NAKAZATO)",
        image: archive("2019", "team-2019-nakazato.jpg"),
        affiliation: "Senior of the Faculty of Education, Kyoto University",
        comment: "Vitality and Love for soybean",
      },
      {
        name: "小林 勇毅 (Yuki KOBAYASHI)",
        image: archive("2019", "team-2019-kobayashi.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment: "普通じゃつまらん",
      },
      {
        name: "山内 萌々乃 (Momono YAMAUCHI)",
        image: archive("2019", "team-2019-yamauchi.jpg"),
        affiliation:
          "Sophomore of the Department of Human Health Science, the Faculty of Medicine, Kyoto University",
        comment: "赤血球とぺんぎんとおちゃの時間",
      },
      {
        name: "アレクサンダー Y. リュウ (Alexander Y. LIU)",
        image: archive("2019", "team-2019-ryu.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment:
          "“Look” more carefully. There's more to everything than meets the eye.",
      },
      {
        name: "池田 雄太郎 (Yutaro IKEDA)",
        image: archive("2019", "team-2019-ikeda.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "Tout est Bien(Sein zum Tode)",
      },
      {
        name: "岸田 尚大 (Naoto KISHIDA)",
        image: archive("2019", "team-2019-kishida.jpg"),
        affiliation: "Freshman of the Faculty of Pharmacy, Kyoto University",
        comment: "わ",
      },
      {
        name: "坂口 太規 (Taiki SAKAGUCHI)",
        image: archive("2019", "team-2019-sakaguchi2.jpg"),
        affiliation:
          "Freshman of the Department of food science and biotechnology, Faculty of Agriculture, Kyoto University",
        comment: "発酵",
      },
      {
        name: "迫野 眞大 (Masahiro SAKONO)",
        image: archive("2019", "team-2019-sakono2.jpg"),
        affiliation:
          "Freshman of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "Work like a dog. Sleep like a log.",
      },
      {
        name: "芝 雄介 (Yusuke SHIBA)",
        image: archive("2019", "team-2019-shiba2.jpg"),
        affiliation:
          "Freshman of the Department of Bioresource Science, Faculty of Agriculture, Kyoto University",
        comment: "ニューロンの奴隷",
      },
      {
        name: "西村 怜緒 (Reo NISHIMURA)",
        image: archive("2019", "team-2019-nishimura.jpg"),
        affiliation: "Freshman of the Faculty of Pharmacy, Kyoto University",
        comment: "体のサビと闘う！",
      },
    ],
  },
  {
    year: "2018",
    theme: "Swallowyces ceerevisiae",
    wikiUrl: "https://2018.igem.org/Team:Kyoto",
    members: [
      {
        name: "You Tong",
        image: archive("2018", "2018_Douosumou.jpg"),
        affiliation:
          "Sophomore of the Department of Agricultural and Environmental Engineering, Faculty of Agriculture, Kyoto University",
        role: "Team Leader",
        comment: "目を閉じたらセンチュウがいる",
      },
      {
        name: "Akiko FUKUDA",
        image: archive("2018", "2018_AkikoFukudasan.jpg"),
        affiliation: "Junior of the Faculty of Science, Kyoto University",
        comment: "Could you give me a minute?",
      },
      {
        name: "Kako NAKAZATO",
        image: archive("2018", "2018_Yoshiko.jpg"),
        affiliation: "Junior of the Faculty of Education, Kyoto University",
        comment: "豆",
      },
      {
        name: "Koki YOSHIMOTO",
        image: archive("2018", "2018_Kokiyoshimoto4.jpg"),
        affiliation: "Junior of the Faculty of Pharmacy, Kyoto University",
        comment: "溢れる京大愛。 almost same but slightly different",
      },
      {
        name: "Ikumi TSUZUKI",
        image: archive("2018", "2018_Ikumin.jpg"),
        affiliation:
          "Sophomore of the Department of Forestry Science, Faculty of Agriculture, Kyoto University",
        comment: "What will be, will be",
      },
      {
        name: "Masahiro NAMBU",
        image: archive("2018", "2018_Nambu.jpg"),
        affiliation:
          "Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University",
        comment:
          "I want to see natural scenary in various places, in various wether, in various seasons, and to know more about works of the earth.",
      },
      {
        name: "Genki SATO",
        image: archive("2018", "2018_Satokun.jpg"),
        affiliation:
          "Freshman of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "藻と遺伝子と、抽象化",
      },
      {
        name: "Masaki SHIMAZOE",
        image: archive("2018", "2018_Zoekun.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "My life is not determined by DNA sequence.",
      },
      {
        name: "Mari TAGUCHI",
        image: archive("2018", "2018_Marichan.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment:
          "I love prokaryote and virus because they are closely related to early forms of life and mysterious for me...",
      },
      {
        name: "Kento TAMUKAI",
        image: archive("2018", "2018_Tamuken.jpg"),
        affiliation:
          "Freshman of the Department of Human Health Science, Faculty of Medicine, Kyoto University",
        comment: "努力と片付けは人が見ていないところでやる",
      },
      {
        name: "Kazunari MORIKAWA",
        image: archive("2018", "2018_Moririn.jpg"),
        affiliation: "Freshman of the Faculty of Pharmacy, Kyoto University",
        comment: "死なない",
      },
    ],
  },
  {
    year: "2017",
    theme: "B. xylophilus Busters",
    wikiUrl: "https://2017.igem.org/Team:Kyoto",
    members: [
      {
        name: "Koki YOSHIMOTO",
        image: archive("2017", "2017_Kokiyoshimoto4.jpg"),
        affiliation: "Sophomore of the Faculty of Pharmacy, Kyoto University",
        role: "Team Leader",
        comment: "溢れる京大愛。 almost same but slightly different",
      },
      {
        name: "Ren TAKIMOTO",
        image: archive("2017", "2017_Takimotoren3.jpg"),
        affiliation:
          "Sophomore of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "第89代カルカタ伝承者",
      },
      {
        name: "Daiya OHARA",
        image: archive("2017", "2017_T--Kyoto--bio020.jpg"),
        affiliation:
          "Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University",
        comment: "YMW(やってみないとわからない)",
      },
      {
        name: "Yousuke ISODA",
        image: archive("2017", "2017_Isodayosuke3.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
        comment: "化学屋",
      },
      {
        name: "Yusuke TANIGAKI",
        image: archive("2017", "2017_Tanigakiyusuke1.jpg"),
        affiliation: "Sophomore of the Faculty of Pharmacy, Kyoto University",
      },
      {
        name: "Akiko FUKUDA",
        image: archive("2017", "2017_Fukudaakiko1.jpg"),
        affiliation: "Sophomore of the Faculty of Science, Kyoto University",
      },
      {
        name: "Shuhei YAMADA",
        image: archive("2017", "2017_Kyoto-team-yamada.jpg"),
        affiliation:
          "Junior of the Department of Physics and Engineering, Faculty of Engineering, Kyoto University",
        comment: "fake it till I make it.",
      },
      {
        name: "You Tong",
        image: archive("2017", "2017_Image_0c0cd5b.iGEMtong.jpg"),
        affiliation:
          "Freshman of the Department of Agricultural and Environmental Engineering, Faculty of Agriculture, Kyoto University",
        comment: "探究心",
      },
    ],
  },
  {
    year: "2016",
    theme: "NORO CATCHER",
    wikiUrl: "https://2016.igem.org/Team:Kyoto",
    members: [
      {
        name: "道盛 裕太 (Yuta MICHIMORI)",
        image: archive("2016", "Kyoto-team-michimori.jpg"),
        affiliation:
          "Sophomore of the Department of Industrial Chemistry, Faculty of Engineering, Kyoto University",
        role: "Team Leader",
        comment: "Ask, seek and knock.",
      },
      {
        name: "内野 智樹 (Tomoki UCHINO)",
        image: archive("2016", "Kyoto-team-uchino.jpg"),
        affiliation:
          "Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University",
        comment: "春眠不覚暁",
      },
      {
        name: "金子 英樹 (Hideki KANEKO)",
        image: archive("2016", "Kyoto-team-kaneko.jpg"),
        affiliation:
          "Sophomore of the Department of Agricultural and Environmental Engineering, Faculty of Agriculture, Kyoto University",
        comment: "好奇心を失わないように努めます",
      },
      {
        name: "野津 俊太(Shunta NOTSU)",
        image: archive("2016", "Kyoto-team-notsu.jpg"),
        affiliation:
          "Sophomore of the Department of Industrial Chemistry, Faculty of Engineering, Kyoto University",
        comment: "剛毅果断",
      },
      {
        name: "井口 聖大 (Takahiro IGUCHI)",
        image: archive("2016", "Kyoto-team-iguchi.jpg"),
        affiliation:
          "Sophomore of the Department of Food Science and Biotechnology, Faculty of Agriculture, Kyoto University",
        comment: "Stay hungry. Stay foolish.",
      },
      {
        name: "江頭 海 (Kai EGASHIRA)",
        image: archive("2016", "Kyoto-team-egashira.jpg"),
        affiliation:
          "Sophomore of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University",
      },
      {
        name: "山本 衣里奈 (Erina YAMAMOTO)",
        image: archive("2016", "Kyoto-team-yamamoto.jpg"),
        affiliation:
          "Sophomore of the Department of Medical Science, Faculty of Medicine, Kyoto University",
        comment: "ひとつひとつ 一歩一歩",
      },
      {
        name: "キム ジンソル (Jinsol KIM)",
        image: archive("2016", "Kyoto-team-kim.jpg"),
        affiliation:
          "Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "Que sera sera",
      },
      {
        name: "万 沢夫 (Zeff WAN)",
        image: archive("2016", "Kyoto-team-wan.jpg"),
        affiliation:
          "Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "真実をずっと追求している",
      },
      {
        name: "山田 修平 (Shuhei YAMADA)",
        image: archive("2016", "Kyoto-team-yamada.jpg"),
        affiliation:
          "Sophomore of the Department of Physics and Engineering, Faculty of Engineering, Kyoto University",
        comment: "fake it till I make it.",
      },
      {
        name: "助川 桃枝 (Momoe SUKEGAWA)",
        image: archive("others", "white.png"),
        affiliation: "Junior of the Faculty of Education, Kyoto University",
      },
      {
        name: "松本 宙 (Sora MATSUMOTO)",
        image: archive("2016", "Kyoto-team-matsumoto.jpg"),
        affiliation:
          "Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "I have a dream.",
      },
      {
        name: "李 豪 (Li HAO)",
        image: archive("2016", "Kyoto-team-Li.jpg"),
        affiliation:
          "Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment:
          "Biological fixation will contribute to the revival of my hometown, Mars.",
      },
      {
        name: "中村 元春 (Motoharu NAKAMURA)",
        image: archive("2016", "Kyoto-team-nakamura.jpg"),
        affiliation:
          "Junior of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "I want money.",
      },
      {
        name: "佐々 裕成 (Hironari SASSA)",
        image: archive("2016", "Kyoto-team-Sassahironari.jpg"),
        affiliation:
          "Freshman of the Department of Industrial Chemistry, Faculty of Engineering, Kyoto University",
        comment:
          "This is a pair of glasses which consists of chemistry and synthetic biology, please handle it with care.",
      },
      {
        name: "滝本 廉 (Ren TAKIMOTO)",
        image: archive("2016", "Kyoto-team-Takimotoren3.jpg"),
        affiliation:
          "Freshman of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "第89代カルカタ伝承者",
      },
      {
        name: "小坂 唯心 (Yuishin KOSAKA)",
        image: archive("2016", "Kyoto-team-Yuishinkosaka3.jpg"),
        affiliation:
          "Freshman of the Department of Applied Life Sciences, Faculty of Agriculture, Kyoto University",
        comment: "Samurai",
      },
      {
        name: "小出 英里 (Eri KOIDE)",
        image: archive("2016", "Kyoto-team-Koide3.jpg"),
        affiliation:
          "Freshman of the Department of Agricultural and Environmental Engineering, Faculty of Agriculture, Kyoto University",
        comment: "I wonder if I can make antibody with this rabbit...",
      },
      {
        name: "小原 乃也 (Daiya OHARA)",
        image: archive("2016", "Kyoto-team-Oharadaiya2.jpg"),
        affiliation:
          "Freshman of the Department of Bioresource Sciences, Faculty of Agriculture, Kyoto University",
        comment: "YMW(やってみないとわからない)",
      },
      {
        name: "宮崎 うらら (Urara MIYAZAKI)",
        image: archive("2016", "Kyoto-team-Miyazakiurara3.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "分子生物学はお好きですか？",
      },
      {
        name: "磯田 洋介(Yousuke ISODA)",
        image: archive("2016", "Kyoto-team-Isodayosuke3.jpg"),
        affiliation: "Freshman of the Faculty of Science, Kyoto University",
        comment: "化学グランプリ金賞受賞者",
      },
      {
        name: "吉本 昂希 (Koki YOSHIMOTO)",
        image: archive("2016", "Kyoto-team-Kokiyoshimoto3.jpg"),
        affiliation: "Freshman of the Faculty of Pharmacy, Kyoto University",
        comment: "溢れる京大愛。 almost same but slightly different",
      },
    ],
  },
  {
    year: "2015",
    memberList: [
      { name: "助川桃枝", info: "教育学部2回生" },
      { name: "松本宙", info: "農学部2回生" },
      { name: "李豪", info: "農学部2回生" },
      { name: "辻井秀明", info: "医学部2回生" },
      { name: "中村元春", info: "農学部2回生" },
      { name: "道盛裕太", info: "工学部1回生" },
      { name: "内野智樹", info: "農学部1回生" },
      { name: "金子英樹", info: "農学部1回生" },
      { name: "野津俊太", info: "工学部1回生" },
      { name: "井口聖大", info: "農学部1回生" },
    ],
  },
  {
    year: "2014",
    theme: "Magnetosome Formation",
    wikiUrl: "https://2014.igem.org/Team:Kyoto",
    memberList: [
      { name: "清水寿朗", info: "農学部2回生" },
      { name: "山中ももこ", info: "農学部3回生" },
      { name: "杉山成明", info: "医学部2回生" },
      { name: "シャテラン ステファン", info: "農学部2回生" },
      { name: "岡崎史恵", info: "農学部2回生" },
      { name: "井上紘一", info: "農学部2回生" },
      { name: "本多慎之介", info: "農学部2回生" },
      { name: "上林幸平", info: "農学部2回生" },
      { name: "加藤貴裕", info: "農学部2回生" },
      { name: "嶋崎大地", info: "薬学部2回生" },
      { name: "村田隆", info: "理学部2回生" },
      { name: "村上晃", info: "理学部2回生" },
      { name: "辰井勇介", info: "理学部2回生" },
      { name: "芦田英郎", info: "理学部2回生" },
      { name: "安田裕助", info: "理学部2回生" },
      { name: "松本宙", info: "農学部1回生" },
      { name: "山内悠至", info: "農学部1回生" },
      { name: "中村元春", info: "農学部1回生" },
      { name: "北悠人", info: "農学部1回生" },
      { name: "李豪", info: "農学部1回生" },
      { name: "河井遥範", info: "農学部1回生" },
      { name: "伊藤愛", info: "農学部1回生" },
      { name: "助川桃枝", info: "教育学部1回生" },
      { name: "山浦瑞樹", info: "医学部1回生" },
      { name: "辻井秀明", info: "医学部1回生" },
      { name: "池口茉莉恵", info: "医学部1回生" },
    ],
  },
  {
    year: "2013",
    theme: "RNA Oscillator, Pattern Generation",
    wikiUrl: "https://2013.igem.org/Team:Kyoto",
    memberList: [
      { name: "中川寛司", info: "理学部2回生" },
      { name: "延山知弘", info: "理学部3回生" },
      { name: "太田喜之", info: "農学部3回生" },
      { name: "加藤傑", info: "理学部3回生" },
      { name: "寺坂真子", info: "医学部2回生" },
      { name: "田尻健", info: "農学部2回生" },
      { name: "黄瀬啓太", info: "農学部2回生" },
      { name: "山中ももこ", info: "農学部2回生" },
      { name: "箕浦広大", info: "農学部2回生" },
      { name: "平野義貴", info: "農学部2回生" },
      { name: "松尾咲恵子", info: "農学部2回生" },
      { name: "新稲亮", info: "理学部2回生" },
      { name: "吉田光昭", info: "理学部2回生" },
      { name: "壇辻さやか", info: "理学部2回生" },
      { name: "板谷崇央", info: "医学部1回生" },
      { name: "杉山成明", info: "医学部1回生" },
      { name: "中元一星", info: "農学部1回生" },
      { name: "氏家里奈子", info: "農学部1回生" },
      { name: "シャテラン ステファン", info: "農学部1回生" },
      { name: "清水寿朗", info: "農学部1回生" },
      { name: "岡崎史恵", info: "農学部1回生" },
      { name: "井上紘一", info: "農学部1回生" },
      { name: "本多慎之介", info: "農学部1回生" },
      { name: "張玖寧", info: "農学部1回生" },
      { name: "松本紘弥", info: "農学部1回生" },
      { name: "児島彬歩", info: "農学部1回生" },
      { name: "上林幸平", info: "農学部1回生" },
      { name: "加藤貴裕", info: "農学部1回生" },
      { name: "嶋崎大地", info: "薬学部1回生" },
      { name: "望月直人", info: "理学部1回生" },
      { name: "村田隆", info: "理学部1回生" },
      { name: "村上晃", info: "理学部1回生" },
      { name: "武藤祥史", info: "理学部1回生" },
      { name: "辰井勇介", info: "理学部1回生" },
      { name: "金岡泰哲", info: "理学部1回生" },
      { name: "芦田英郎", info: "理学部1回生" },
      { name: "安田裕助", info: "理学部1回生" },
    ],
  },
  {
    year: "2012",
    theme: "Flower Fairy E.coli",
    wikiUrl: "https://2012.igem.org/Team:Kyoto",
    memberList: [
      { name: "延山知弘", info: "理学部2回生" },
      { name: "川田哲也", info: "理学部4回生" },
      { name: "木田龍祐", info: "農学部3回生" },
      { name: "橋谷文貴", info: "理学部3回生" },
      { name: "草場哲", info: "理学部3回生" },
      { name: "小松馨", info: "医学部2回生" },
      { name: "佐藤茜", info: "薬学部2回生" },
      { name: "泉早苗", info: "薬学部2回生" },
      { name: "竹内良輔", info: "農学部2回生" },
      { name: "太田義之", info: "農学部2回生" },
      { name: "奥村研志", info: "農学部2回生" },
      { name: "高本悠介", info: "農学部2回生" },
      { name: "チェヒョンチョル", info: "農学部2回生" },
      { name: "加藤傑", info: "理学部2回生" },
      { name: "下坂天洋", info: "工学部2回生" },
      { name: "寺坂真子", info: "医学部1回生" },
      { name: "田尻健", info: "農学部1回生" },
      { name: "平野義貴", info: "農学部1回生" },
      { name: "楊木萌", info: "農学部1回生" },
      { name: "上野賢也", info: "理学部1回生" },
      { name: "加納初穂", info: "理学部1回生" },
      { name: "壇辻さやか", info: "理学部1回生" },
      { name: "中川寛司", info: "理学部1回生" },
      { name: "新稲亮", info: "理学部1回生" },
      { name: "吉田光昭", info: "理学部1回生" },
    ],
  },
  {
    year: "2011",
    theme: "食虫大腸菌",
    wikiUrl: "https://2011.igem.org/Team:Kyoto",
    memberList: [
      { name: "橋谷文貴", info: "理学部2回生" },
      { name: "志甫谷渉", info: "理学部4回生" },
      { name: "山本拓弥", info: "理学部4回生" },
      { name: "前田勇樹", info: "理学部4回生" },
      { name: "村山知", info: "薬学部4回生" },
      { name: "梶田憲", info: "工学部工業化学科3回生" },
      { name: "川田哲也", info: "理学部3回生" },
      { name: "胡迪超", info: "工学部情報科3回生" },
      { name: "原大貴", info: "工学部工業化学科3回生" },
      { name: "杉浦佑", info: "理学部2回生" },
      { name: "森仁志", info: "農学部2回生" },
      { name: "岡田卓也", info: "医学部2回生" },
      { name: "木田龍祐", info: "農学部2回生" },
      { name: "草場哲", info: "理学部2回生" },
      { name: "寺田将也", info: "薬学部2回生" },
      { name: "廣瀬達也", info: "理学部2回生" },
      { name: "下坂天洋", info: "工学部工業化学科1回生" },
      { name: "延山知弘", info: "理学部1回生" },
      { name: "加藤傑", info: "理学部1回生" },
      { name: "泉早苗", info: "薬学部1回生" },
      { name: "小松馨", info: "医学部1回生" },
      { name: "佐藤茜", info: "薬学部1回生" },
      { name: "奥村研志", info: "農学部1回生" },
    ],
  },
];
