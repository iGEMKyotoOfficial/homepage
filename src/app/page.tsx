"use client"

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FirstView from "@/components/FirstView";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { basePath } from "@/lib/site";

// === アニメーション用のテキストデータ ===
// 太字にする部分とそうでない部分を分けて定義します。
const textData = {
  igemKyoto: [
    { text: "私たちiGEM Kyotoは毎年11月にパリで開催される、" },
    { text: "「合成生物学」を用いて世界をよりよくするアイデアを競う国際大会“iGEM”", bold: true },
    { text: "に向けて日々活動しています。毎年" },
    { text: "学部1,2年生を中心にチーム", bold: true },
    { text: "を編成しており、活動は会議室内にとどまらず、様々な研究室にお世話になったり、各地の関係者の方々への取材や出前授業に行ったりと広範囲に及びます。" },
    { text: "京都大学生", bold: true },
    { text: "の知能を集結させ、白熱した議論を交わしながらプロジェクトをより良いものへと導けるよう努めています。" }
  ],
  mission: [
    { text: "iGEM Kyotoは、iGEM大会への参加を通して" },
    { text: "合成生物学による社会への貢献、延いてはこの世界のより良い形への変革", bold: true },
    { text: "を目指しています。そのためのステップとして、当団体はプロジェクトでの研究を経て学術的な知見を深め、また外部との交流によって外向的な人間性を養える場で在れるよう日々努力を重ねています。京都大学の学部生によって構成された当団体は、" },
    { text: "国際水準の能力を持つ次世代のリーダーとなる人材の育成をMission", bold: true },
    { text: "としています。" }
  ],
  achievement: [
    { text: "大会に向けたテーマ決めから資金獲得、実験、Web制作を含めた発表まで学生自身で行う私たちは、これまでに" },
    { text: "15回のiGEM大会出場", bold: true },
    { text: "、" },
    { text: "累計9回の金賞獲得", bold: true },
    { text: "を達成しており、また、" },
    { text: "卒業生", bold: true },
    { text: "として様々な" },
    { text: "起業家", bold: true },
    { text: "や" },
    { text: "研究者", bold: true },
    { text: "を輩出しています。" }
  ],
  supportUs: [
    { text: "現在iGEM Kyotoではサークルの運営資金を募っております。私たちはiGEM大会への参加を目指していますが、大会の参加には" },
    { text: "資金面での問題", bold: true },
    { text: "が多く存在します。特に、" },
    { text: "大会登録費（約100万円）や大会参加費（約50万円）、実験費用（30-40万円）、交通費（ひとり約30万円）", bold: true },
    { text: "は学生団体である私たちにはあまりにも大きな額であり、一学生団体とその周囲のご協力だけでの" },
    { text: "大会参加は困難な", bold: true },
    { text: "状況にあります。" }
  ],
  joinUs: [
    { text: "我々はiGEM大会への参加を軸に多様なメンバーから構成されています。生物学のみならず、数学・プログラミング・起業等様々な分野に興味のあるメンバーによって成り立っており、研究活動以外にも資金集めや教育活動・サークル運営など多種多様な仕事が重要となってきます。" },
    { text: "研究活動に興味のある方や、合成生物学の世界大会に参加するというロマンに惹かれる方を幅広く募集", bold: true },
    { text: "しており、我々は" },
    { text: "新たなメンバーとの発想の創発を楽しみ", bold: true },
    { text: "にしています。" }
  ]
};

// === TypeScriptの型定義を追加 ===
type TextSegment = {
  text: string;
  bold?: boolean;
};

// === タイピングアニメーション用コンポーネント ===
// { segments } の後ろに型を指定します
const TypewriterText = ({ segments }: { segments: TextSegment[] }) => {
  const shouldReduceMotion = useReducedMotion();

  // モーション過敏なユーザーには演出を行わず、最初から全文を表示する
  if (shouldReduceMotion) {
    return (
      <p className="text-base leading-loose text-gray-700 dark:text-gray-300">
        {segments.map((seg, index) =>
          seg.bold ? (
            <strong key={index} className="font-bold">
              {seg.text}
            </strong>
          ) : (
            <span key={index}>{seg.text}</span>
          )
        )}
      </p>
    );
  }

  // chars 配列にも型を指定します
  const chars: { char: string; bold?: boolean }[] = [];

  segments.forEach((seg) => {
    // 絵文字なども崩れないように Array.from を使用
    const segChars = Array.from(seg.text);
    segChars.forEach((char) => {
      chars.push({ char, bold: seg.bold });
    });
  });

  return (
    <motion.p
      className="text-base leading-loose text-gray-700 dark:text-gray-300"
      initial="hidden"
      whileInView="visible"
      // margin を設けることで、画面に少し入ってからアニメーション開始
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 1.0, // 文章は1秒後からタイピング開始
            staggerChildren: 0.015, // 1文字あたり0.015秒の間隔
          },
        },
      }}
    >
      {chars.map((item, index) => {
        const charVariants = {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
        return item.bold ? (
          <motion.strong key={index} variants={charVariants} className="font-bold">
            {item.char}
          </motion.strong>
        ) : (
          <motion.span key={index} variants={charVariants}>
            {item.char}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

// こちらの関数にも型 (segments: TextSegment[]) を追加します
const getLinkDelay = (segments: TextSegment[]) => {
  const charCount = segments.reduce((acc, seg) => acc + Array.from(seg.text).length, 0);
  return 1.0 + charCount * 0.015 + 0.3;
};



export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
    <div className="home-page min-h-screen overflow-hidden">
      {/* First View */}
      <FirstView />

      {/* Divider under First View */}
      <hr className="mx-auto w-full border-t border-gray-300/70 dark:border-gray-700" />

      {/* iGEM Kyoto? Section (Left: Image/Title, Right: Text/Link) */}
      <section className="relative w-full overflow-hidden border-t border-gray-300/70 dark:border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Image & Title */}
          <div className="relative flex min-h-[400px] items-center justify-center p-12 lg:min-h-[80vh] overflow-hidden">
            {/* 1. 画像のアニメーション (一番最初にフワッと拡大しながら登場) */}
            <motion.div
              className="absolute inset-4 md:inset-8 lg:inset-12"
              style={{
                borderRadius: "150px",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src={`${basePath}/images/Home1.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            {/* 2. タイトルのアニメーション (画像の後に下からスライド) */}
            <motion.h2
              className="relative z-10 text-4xl font-bold text-white md:text-5xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              iGEM Kyoto?
            </motion.h2>
          </div>

          {/* Right - Text & Link */}
          <div className="relative flex flex-col justify-center px-8 py-24 md:px-16 lg:px-24">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
              <span className="whitespace-nowrap text-[8vw] font-bold tracking-wider text-gray-900/[0.03] dark:text-white/[0.03]">
                iGEM Kyoto
              </span>
            </div>
            <div className="relative z-10 space-y-10">
              {/* 3. 文章のアニメーション (1文字ずつタイピング) */}
              <TypewriterText segments={textData.igemKyoto} />
              
              {/* 4. リンクのアニメーション (文章が終わった後にフワッと登場) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : getLinkDelay(textData.igemKyoto) }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  団体について
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section (Left: Text/Link, Right: Image/Title) */}
      <section className="relative w-full overflow-hidden border-t border-gray-300/70 dark:border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Text & Link (Desktop) / order-2 on mobile */}
          <div className="order-2 relative flex flex-col justify-center px-8 py-24 md:px-16 lg:order-1 lg:px-24">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
              <span className="whitespace-nowrap text-[8vw] font-bold tracking-wider text-gray-900/[0.03] dark:text-white/[0.03]">
                Mission
              </span>
            </div>
            <div className="relative z-10 space-y-10">
              <TypewriterText segments={textData.mission} />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : getLinkDelay(textData.mission) }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  団体概要
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right - Image & Title (Desktop) / order-1 on mobile */}
          <div className="order-1 relative flex min-h-[400px] items-center justify-center p-12 lg:order-2 lg:min-h-[80vh] overflow-hidden">
            <motion.div
              className="absolute inset-4 md:inset-8 lg:inset-12"
              style={{
                borderRadius: "150px",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src={`${basePath}/images/mission.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            <motion.h2
              className="relative z-10 text-4xl font-bold text-white md:text-5xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              ミッション
            </motion.h2>
          </div>
        </div>
      </section>

      {/* 実績 Section (Left: Image/Title, Right: Text/Link) */}
      <section className="relative w-full overflow-hidden border-t border-gray-300/70 dark:border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Image & Title */}
          <div className="relative flex min-h-[400px] items-center justify-center p-12 lg:min-h-[80vh] overflow-hidden">
            <motion.div
              className="absolute inset-4 md:inset-8 lg:inset-12"
              style={{
                borderRadius: "150px",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src={`${basePath}/images/achievements.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            <motion.h2
              className="relative z-10 text-4xl font-bold text-white md:text-5xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              実績
            </motion.h2>
          </div>

          {/* Right - Text & Link */}
          <div className="relative flex flex-col justify-center px-8 py-24 md:px-16 lg:px-24">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
              <span className="whitespace-nowrap text-[8vw] font-bold tracking-wider text-gray-900/[0.03] dark:text-white/[0.03]">
                Achievement
              </span>
            </div>
            <div className="relative z-10 space-y-10">
              <TypewriterText segments={textData.achievement} />
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : getLinkDelay(textData.achievement) }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  href="/project"
                  className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  PROJECT
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/member"
                  className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  MEMBER
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ご支援のお願い Section (Left: Text/Link, Right: Image/Title) */}
      <section className="relative w-full overflow-hidden border-t border-gray-300/70 dark:border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Text & Link (Desktop) / order-2 on mobile */}
          <div className="order-2 relative flex flex-col justify-center px-8 py-24 md:px-16 lg:order-1 lg:px-24">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
              <span className="whitespace-nowrap text-[8vw] font-bold tracking-wider text-gray-900/[0.03] dark:text-white/[0.03]">
                SUPPORT US
              </span>
            </div>
            <div className="relative z-10 space-y-10">
              <TypewriterText segments={textData.supportUs} />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : getLinkDelay(textData.supportUs) }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  href="/sponsor"
                  className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  寄付・協賛
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right - Image & Title (Desktop) / order-1 on mobile */}
          <div className="order-1 relative flex min-h-[400px] items-center justify-center p-12 lg:order-2 lg:min-h-[80vh] overflow-hidden">
            <motion.div
              className="absolute inset-4 md:inset-8 lg:inset-12"
              style={{
                borderRadius: "150px",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src={`${basePath}/images/supportus.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            <motion.h2
              className="relative z-10 text-4xl font-bold text-white md:text-5xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              ご支援のお願い
            </motion.h2>
          </div>
        </div>
      </section>

      {/* メンバー募集 Section (Left: Image/Title, Right: Text/Link) */}
      <section className="relative w-full overflow-hidden border-t border-gray-300/70 dark:border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Image & Title */}
          <div className="relative flex min-h-[400px] items-center justify-center p-12 lg:min-h-[80vh] overflow-hidden">
            <motion.div
              className="absolute inset-4 md:inset-8 lg:inset-12"
              style={{
                borderRadius: "150px",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src={`${basePath}/images/joinus.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            <motion.h2
              className="relative z-10 text-4xl font-bold text-white md:text-5xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              メンバー募集
            </motion.h2>
          </div>

          {/* Right - Text & Link */}
          <div className="relative flex flex-col justify-center px-8 py-24 md:px-16 lg:px-24">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
              <span className="whitespace-nowrap text-[8vw] font-bold tracking-wider text-gray-900/[0.03] dark:text-white/[0.03]">
                JOIN US
              </span>
            </div>
            <div className="relative z-10 space-y-10">
              <TypewriterText segments={textData.joinUs} />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : getLinkDelay(textData.joinUs) }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  お問い合わせ
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </MotionConfig>
  );
}
