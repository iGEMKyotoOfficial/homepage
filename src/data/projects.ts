export interface ProjectLink {
  label: string;
  href: string;
}

export interface PastProject {
  /** 例: "2025年 - Avisptosis" / "2022年" */
  heading: string;
  paragraphs: string[];
  links: ProjectLink[];
}

// 過去のプロジェクト一覧（新しい年度が先頭）。
// 先頭要素は注目プロジェクトとして展開表示し、それ以降は <details> 内に折りたたむ。
export const pastProjects: PastProject[] = [
  {
    heading: "2025年 - Avisptosis",
    paragraphs: [
      "高病原性鳥インフルエンザ(HPAI)は世界中の養鶏業に壊滅的な被害をもたらしており、感染が発覚した養鶏場の鶏が一斉に殺処分されてしまうなど、食料の安定的な供給や養鶏場の経営に大きな損害を与えています。ワクチンや遺伝子組み換え鶏などによる対策が行われていますが、ウイルスの急速な変異によって効果が限定的になってしまいます。鳥インフルエンザへの新たな対策として、インフルエンザウイルスが鶏の細胞に侵入したら、ウイルスが増殖する前に細胞死を引き起こすというシステムを考案しました。細胞内でインフルエンザウイルスが増殖するときに形成される二本鎖RNAを認識する経路と、アポトーシスを引き起こす経路をつなげ、ウイルスが細胞に感染したら即座に細胞が死ぬように設計しました。ウイルスが変異したとしても二本鎖RNAは形成されると想定されるので、このシステムはウイルスの変異にも対応できると考えられます。iGEM Kyotoとして初めて用いた動物細胞に苦戦しましたが、ModelingやHuman Practiceが評価され、結果金賞を受賞しました。出場していない年を除いて5年連続の金賞となりました。",
    ],
    links: [
      { label: "wikiはこちら", href: "https://2025.igem.wiki/kyoto/" },
      {
        label: "ポスターはこちら",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:6545fa8f-c411-402d-a131-f5463179b681",
      },
    ],
  },
  {
    heading: "2024年 - ShowgNs",
    paragraphs: [
      "農業において、窒素肥料は作物の収穫量を増やすことに役立つ一方で、過剰な窒素の流出は富栄養化や地球温暖化などの環境問題を引き起こしてしまいます。現在、世界人口の増加に伴う食料の増産と環境負荷低減の両立が求められていますが、既存の窒素センサーは精度が低く操作が複雑で普及が進んでいません。そこで、私たちは生物学的認識システムを活用した窒素バイオセンサーの開発に取り組みました。実験では、土壌中のNO3-やNH4+などをターゲットとし、標的物質が存在すると転写が誘導され、転写されたRNAの量に応じて蛍光や発光などの形での出力が起こる仕組みのバイオセンサーの構築を目指しました。また、入力や出力に用いる分子を変更することによって、検知したい物質や出力形式を変更することができるプラットフォームの構築も目指しました。このセンサーはセルフリーシステムであり、遺伝子組み換え生物が環境へ流出する恐れがないため、社会に広く実装することができます。結果は、金賞に加え、Best Agriculture Project、Best Hardwareという2つの特別賞の最終候補にノミネートされました。",
    ],
    links: [
      { label: "wikiはこちら", href: "https://2024.igem.wiki/kyoto/" },
      {
        label: "ポスターはこちら",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:4332e588-11c9-4d01-a8bd-85d43d3df019",
      },
    ],
  },
  {
    heading: "2023年 - Avoideer",
    paragraphs: [
      "2023年のテーマは、鹿と大腸菌です。世界的な食料安全保障を達成する上での最大の課題の一つは、野生動物による農作物被害です。日本では食害のうち7割をシカが占めていて京都でも重大な被害をもたらしています。その解決策として、シカの忌避物質を持続的に生産・放出する新しいソリューションを考案しました。これは実際使うことになる農家さんの負担にならないよう、自律的に大腸菌を長期間培養させる必要がありました。そこで、自身の個体数を抑制し、死滅した細胞から栄養をリサイクルするようプログラムすることにしました。さらに、攪拌震盪を自動化するために、水の気化潜熱のみを動力源とするDrinking Birdというおもちゃを元に安価でメンテナンスの容易な装置も設計しました。その結果金賞を受賞し、Best Agriculture Project、Best Wiki、Best Hardwareという三つの特別賞の最終候補にノミネートされました。これはiGEM Kyoto史上、過去最高の成績でした。",
      "また、iGEMのプロジェクトとは別で、iGEM Kyotoのメンバーによる研究論文が出版されました。高価な試薬を使わずにDNAクローニングを可能にする方法を開発することに成功した研究です。シームレスクローニングという方法に必要な大腸菌抽出液「SLiCE」の成分特定に挑み、2つの酵素が重要であることを特定しました。この成果は国際学術誌 \"Genes to Cells\" に掲載されました。",
    ],
    links: [
      { label: "wikiはこちら", href: "https://2023.igem.wiki/kyoto" },
      {
        label: "ポスターはこちら",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:94cf3421-c50c-48fd-adcb-1dcce6bafea4",
      },
      {
        label: "https://www.kyoto-u.ac.jp/ja/research-news/2023-05-17-0",
        href: "https://www.kyoto-u.ac.jp/ja/research-news/2023-05-17-0",
      },
    ],
  },
  {
    heading: "2022年",
    paragraphs: ["2022年度は大会への出場を経済的理由で見送らざるを得ませんでした。"],
    links: [],
  },
  {
    heading: "2021年 - FLOWEREVER",
    paragraphs: [
      "2021年度のテーマは\"FLOWEREVER\"です。実は私たちの身近にある花には、栽培時のウイルス感染、虫害、販売時や家庭での花の老化・細菌繁殖など様々な課題があります。これら複数の課題に対し、合成生物学を用いた解決法を考えました。ウイルス感染に対しては葉から抽出したRNAからRT-LAMP法という手法でウイルス由来のDNAを増幅し、CRISPR-Cas12aという配列検出システムを用いて蛍光の有無からウイルス感染の有無を検出する手法を開発しました。さらに機械学習を用いることで葉の写真から健康状態を判断するソフトウェアを開発しました。その他にもRNA干渉を用いた殺虫、ペプチドを利用した殺菌、生体分子の効率的生産のためのシステム開発など、取り組んだプロジェクトは多岐にわたっています。オンラインで開催された大会ではWikiとプレゼンテーションビデオを作成し、審査員とオンラインで質疑応答を行いました。結果金賞を受賞し、Best Software Toolという特別賞の最終候補にノミネートされました。",
    ],
    links: [
      { label: "wikiはこちら", href: "https://2021.igem.org/Team:Kyoto" },
      {
        label: "ポスターはこちら",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:4301a0f6-9992-4d03-b337-1f73899387ab",
      },
    ],
  },
  {
    heading: "2020年",
    paragraphs: [
      "2020年度は新型コロナウイルスの影響により大会がオンラインになったため、大会には出場せず次年度への準備を進めました。",
    ],
    links: [],
  },
  {
    heading: "2019年 - My Clothes' Plastic",
    paragraphs: [
      "2019年度のテーマは\"My Clothes' Plastic\"です。近年問題視されている海洋マイクロプラスチック問題、その原因の一つが洗濯した時に服から落ちる合成繊維であることがわかりました。繊維はとても小さいがために下水処理のシステムをすり抜けていきます。そのため、私たちはこの繊維を凝集させ、より効率的に回収しやすくさせるデバイスの開発に取り組みました。私たちはプラスチック特異的結合タンパク質をエンキャプスリンと呼ばれるタンパク質の表面に提示させることで、繊維同士を凝集させるのりのようなものの開発に成功しました。大会ではプレゼン、ポスターセッション共に高い評価を受け金賞、その上EnvironmentとBest Parts Collectionという部門賞に最終候補にノミネートされました。",
    ],
    links: [
      { label: "wikiはこちら", href: "https://2019.igem.org/Team:Kyoto" },
      {
        label: "ポスターはこちら",
        href: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:4301a0f6-9992-4d03-b337-1f73899387ab",
      },
    ],
  },
  {
    heading: "2018年 - Swallowmyces cerevisiae",
    paragraphs: [
      "2018年度のテーマは\"Swallowmyces cerevisiae\"です。ナトリウム濃度は、浸透圧やタンパクの立体構造、その他チャネルの機能に大きな影響を及ぼします。この濃度を上げることは塩を加えることで解決されますが逆に下げることは難しいとされています。そこで私たちは、酵母の液胞表面にナトリウムイオンチャネルを過剰発現させることで、ナトリウムの取り込み効率を向上させることを目指しました。酵母がもともと持つトランスポーターの性能改善に加え、シロイヌナズナや醤油酵母が所有する塩耐性にまつわる遺伝子を新たに導入し、高塩環境下でも機能する酵母の開発に取り組みました。大会では、Gold Criteriaになっていた「Parts Improvement」に関する結果を審査員にきちんと伝えることができなかったのか、悔しくも銀メダルの受賞となりました。",
    ],
    links: [{ label: "wikiはこちら", href: "https://2018.igem.org/Team:Kyoto" }],
  },
  {
    heading: "2017年 - B. xylophilus Busters",
    paragraphs: [
      "2017年度のテーマは\"B. xylophilus Busters\"です。松を食い荒らし、松枯れ病という病気の原因であるマツノザイセンチュウ（B. xylophilus）という小さな虫を駆除するため、その虫に毒性のあるRNA分子を酵母に発現させ、酵母を食べさせることでマツノザイセンチュウを殺虫することを試みました。ザイセンチュウが出芽酵母を捕食する可能性は知られていた一方で実際のデータがなかったため、まず、酵母を緑色蛍光タンパクGFPでマーク付けし、ザイセンチュウが酵母を摂食することを確かめました。また、酵母で発現させたRNA分子をザイセンチュウが取り込みやすいようにするため、Rev-RREシステムを用いてRNA分子を酵母の核外に輸送させる機構を構築しました。大会までに期待した効果を示すことができず、Giant Jamboreeでは惜しくも銀メダルの獲得となりました。",
    ],
    links: [{ label: "wikiはこちら", href: "https://2017.igem.org/Team:Kyoto" }],
  },
  {
    heading: "2016年 - NORO CATCHER",
    paragraphs: [
      "2016年度のテーマは\"NORO CATCHER\"です。ノロウイルス治療薬開発に一石を投じるような、新たな治療システムを構築しました。Noro-catcherは、大腸菌の細胞表面に、ノロウイルスに結合するタンパク質とセルロースに結合するタンパク質を同時発現させた薬です。その薬をノロウイルス患者の腸まで届けることで、まず初めに大腸菌がノロウイルスに結合します。ノロウイルスをキャッチした大腸菌薬は、次に腸内のセルロース、すなわち食物繊維にくっつきます。人体では、食物繊維は消化されず体外に排出されるため、食物繊維に結合した大腸菌はノロウイルスを道連れにして体外に排出されます。Giant Jamboreeでは見事金メダルを獲得しました。",
    ],
    links: [{ label: "wikiはこちら", href: "https://2016.igem.org/Team:Kyoto" }],
  },
  {
    heading: "2014年 - Magnetosome Formation & DMS Synthesis",
    paragraphs: [
      "2014年度のテーマは\"Magnetosome Formation\"と\"DMS Synthesis\"です。Magnetosome Formationでは、磁性を持つ大腸菌を実現しようとしました。大腸菌を磁力で動かせるようにすることで、大腸菌の回収や制御を簡単に行うことができるようになります。DMS Synthesisでは、小さな大腸菌から大きな雲をつくるというような、夢のような研究を行いました。雲の凝結核の元となる物質であるジメチルスルフィド（DMS）を大腸菌で生合成することを目指しました。Giant Jamboreeでは見事金メダルを獲得しました。",
    ],
    links: [{ label: "wikiはこちら", href: "https://2014.igem.org/Team:Kyoto" }],
  },
  {
    heading: "2013年 - RNA Oscillator & Pattern Generation",
    paragraphs: [
      "2013年度のテーマは\"RNA Oscillator\"と\"Pattern Generation\"です。この2つのシステムを用いて、WetワークとDryワークの間の隔たりについて理解し、そのギャップを埋める方法について考察しました。RNA Oscillatorは、RNAを用いて点滅のような振動を表現しようと、Wet LabとDry Labの両方から研究を行いました。Pattern Generationでは、動物の体表などに現れる模様のパターンの再現を目指しました。アジア予選では、銀メダルを獲得しました。",
    ],
    links: [{ label: "wikiはこちら", href: "https://2013.igem.org/Team:Kyoto" }],
  },
  {
    heading: "2012年 - Flower Fairy E.coli",
    paragraphs: [
      "2012年度のテーマは\"Flower Fairy E.coli\"です。御伽噺「花咲か爺さん」のように、自由自在に花を咲かせることのできる大腸菌の開発を目指しました。アジア予選では金メダルを獲得し、見事MITで行われたWorld Championshipに出場しました。",
    ],
    links: [{ label: "wikiはこちら", href: "https://2012.igem.org/Team:Kyoto" }],
  },
  {
    heading: "2011年 - Carnivorous E.coli",
    paragraphs: [
      "2011年度のテーマは「食虫大腸菌」。1、2回生を中心とする新チームで、栄養不足になると光を発して虫をおびき寄せ、捕えて、消化する、そんな「もっと生き物っぽい」新種の大腸菌の開発を目指しました。初めて行われたアジア予選は惜しくも敗退してしまい、メダルは銀にとどまりました。",
    ],
    links: [{ label: "wikiはこちら", href: "https://2011.igem.org/Team:Kyoto" }],
  },
  {
    heading: "2010年 - The Fantastic Lysisbox",
    paragraphs: [
      "2010年度のプロジェクトは\"The Fantastic Lysisbox\"です。バイオハザードの対策を考える中で細胞を溶かすことに注目しました。これはバイオハザードの防止だけでなく、製薬やさらに身近な例としてはバイオアロマなどにも応用できる優れたデバイスです。大会は11/5〜11/8にかけて行われ、金賞を受賞しました。",
    ],
    links: [{ label: "wikiはこちら", href: "https://2010.igem.org/Team:Kyoto" }],
  },
  {
    heading: "2009年 - Time Bomb & Cells in cells",
    paragraphs: [
      "「今年こそは」と意気込んだ2009年は、さらにユニークなプロジェクト\"Time Bomb\"と\"Cells in cells\"を立ち上げました。Time Bombでは、治療目的で体内に投与する細菌を所望の時期と細胞数で細菌を人体から除去するために、細菌が一定回数の細胞分裂を行うと、キラー遺伝子など目的の遺伝子を発現する仕組みを設計しました。Cells in cellsでは、ミトコンドリアや葉緑体のように、細胞内共生を人工的に実現することを目指しました。主に夏休みの期間を利用して遂行し、銀賞を受賞しました。",
    ],
    links: [
      { label: "wikiはこちら", href: "https://2009.igem.org/Team:Kyoto/GSDD/Abstract" },
    ],
  },
  {
    heading: "2008年 - Raise the Titanic!",
    paragraphs: [
      "iGEM Kyotoは2008年度に結成しました。メンバーは様々な専攻の学部学生を主体とし、加えて修士院生とアドバイザーから構成されています。テーマ\"Raise the Titanic!\"では、大腸菌を用いてタイタニック号を引き上げることを目指しました。独創性は群を抜いていましたが、残念ながら入賞を逃しました。",
    ],
    links: [{ label: "wikiはこちら", href: "https://2008.igem.org/Team:Kyoto" }],
  },
];
