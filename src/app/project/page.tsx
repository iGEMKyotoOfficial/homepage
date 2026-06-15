import { ChevronDown, FlaskConical } from "lucide-react";
import { basePath } from "@/lib/site";
import { pastProjects, type PastProject } from "@/data/projects";

export const metadata = {
  title: "PROJECT",
  description:
    "iGEM Kyoto の研究プロジェクト（Wet・Dry・Human Practice・Wiki 制作・広報）と過去の成果のご紹介です。",
};

const proseClasses = [
  "prose prose-gray max-w-none dark:prose-invert",
  "prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4",
  "prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3",
  "prose-p:text-gray-600 dark:prose-p:text-gray-400",
  "prose-a:text-blue-600 dark:prose-a:text-blue-400",
  "prose-strong:text-gray-900 dark:prose-strong:text-white",
  "prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 dark:prose-li:text-gray-400",
].join(" ");

// 静的書き出し（output: export, unoptimized）構成のため素の <img> を使う。
function ProjectImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) {
  return (
    <img
      src={`${basePath}${src}`}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={className}
    />
  );
}

function PastProjectSection({
  project,
  className,
}: {
  project: PastProject;
  className: string;
}) {
  return (
    <section className={className}>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {project.heading}
      </h3>
      {project.paragraphs.map((text, i) => (
        <p key={i} className="mt-2 text-gray-600 dark:text-gray-400">
          {text}
        </p>
      ))}
      {project.links.length > 0 && (
        <p className="mt-2">
          {project.links.map((link, i) => (
            <span key={link.href}>
              {i > 0 && <br />}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                {link.label}
              </a>
            </span>
          ))}
        </p>
      )}
    </section>
  );
}

export default function ProjectPage() {
  const [featuredProject, ...olderProjects] = pastProjects;

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FlaskConical className="mx-auto mb-4 h-12 w-12 text-blue-500" />
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            PROJECT
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our Research Projects
          </p>
        </div>

        <div className={proseClasses}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            PROJECT
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            当団体では、iGEM大会にて世界に挑戦するため、<strong>Wet</strong>、<strong>Dry</strong>、<strong>Human Practice</strong>、<strong>Wiki制作</strong>、<strong>広報・資金調達</strong>といった幅広い活動を行っています。
            どの分野においても学生メンバーが主体的に活動し、プロジェクトを最高のものにするために頑張っています。
            それぞれの分野の概要とメンバーの活動に焦点を当てて説明します。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Schedule
          </h2>
          <ProjectImage
            src="/images/homepage_project0.png"
            alt="年間スケジュール"
            width={800}
            height={450}
            className="w-full rounded-lg"
          />

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Wet
          </h2>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project1.webp"
              alt="Wetチームの実験風景"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                <strong>Wetとは、バイオの研究において、実際に生物を用いて実験する部分のこと</strong>を指します。
                名前から連想されるように、水や試薬を実際に使って研究することから、生命科学や生物の研究では、実験分野をWetと呼びます。
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Wetでは、DNAやタンパク質、微生物を実際に用いて実験し、理論が正しいのか、考案した機構がうまくワークするのかを確かめます。
                当団体のWetでは、<strong>実験計画を立てるところから研究室での実験、データの収集まで、学生メンバーが主体となって研究</strong>を進めています。
              </p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            実験計画の立案
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            取り組むプロジェクトが決まってから、文献調査や専門家との対談を重ねて、実験計画を立てます。
            単に実験を行うのではなく、「何を証明したいのか」「それをどう示すのか」を最初に明確にします。
            例えば、「物質Aを合成する」という実験では、物質Aが実際に生成したことを示す必要があります。そのために、物質Aと反応すると発光する試薬を用いるなど、結果を可視化できる方法を選ぶことで、生成を確認できます。
          </p>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project2.png"
              alt="DNA配列の設計図"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                実験で行うことが決定したら、必要な生物やタンパク質を考え、DNAの配列を設計します。
                設計したDNA配列は、プロモーターやタグ、目的遺伝子の配置などを含めてプラスミドとして構築します。
                この段階で、発現量の調整や精製のしやすさ、後の解析方法までを考慮し、実験全体が無理なくつながるように設計します。
              </p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            実験の遂行
          </h3>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project3.png"
              alt="研究室での実験作業"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                立案した実験計画に基づき、実際に研究室で実験を遂行します。
                ここがiGEM Kyotoの活動の山場です。
                主に夏休みを利用して、メンバーが毎日のように実験を行っています。
                先生やアドバイザーから助言をもらうこともありますが、基本的には1-2回生の学生が手を動かし実験を進めます。
              </p>
            </div>
          </div>

          <div className="my-6 flex flex-col gap-4 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project4.png"
              alt="実験結果のデータ"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <ProjectImage
              src="/images/homepage_project5.png"
              alt="チームでのディスカッション"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400">主な実験内容には、</p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
            <li>大腸菌を用いた組換えタンパク質の発現・精製</li>
            <li>タンパク質の機能評価</li>
            <li>Dryとの連携による変異体設計・機能改変実験</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400">
            などの基盤となるものや、プロジェクトに合わせて応用的なものがあります。
            時にはうまく結果が出ないときもありますが、実験結果の見直しやDryとの連携を行い、理論が正しいことを証明するために可能なことを尽くします。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            学部1-2回生にとって、実験計画を立案するところから実験を遂行するまでは、かなりの壁となります。しかし、チームの仲間とともに挑戦し、良い結果が出たときには達成感で満ち溢れます。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Dry
          </h2>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project6.png"
              alt="Dryチームの解析画面"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                <strong>Dryとは、バイオ研究においてコンピュータ上で理論設計や解析を行う分野</strong>を指します。
                実験台の上で試薬を扱うWetに対して、Dryでは数式・アルゴリズム・シミュレーションを用いて、生命現象や分子のふるまいを理論的に解析・予測します。
                まさにWetとDryは、生命科学の研究において互いに補完し合う両輪です。
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                具体的には、個体間感染シミュレーション、バイオセンサーの発現量予測、タンパク質構造の最適化など、プロジェクトに応じて多様なアプローチを行っています。
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            当団体のDryでは、学生は<strong>主に自主的な学習によって、計画立案からモデルの構築、シミュレーションの解析までに必要なスキルを獲得し、試行錯誤を繰り返しながらプロジェクトを進めています</strong>。
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            モデルの構築
          </h3>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project7.png"
              alt="数理モデルの構築"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                プロジェクトのテーマが決定すると、Dryではまずシミュレーションを行う対象を考えます。ここでの目的は、実験では直接観察しにくい挙動を可視化し、仮説検証を可能にすることです。
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                現実の挙動に整合するようなモデルを構築することを目標とし、論文等を参照にしながら、最適なパラメーターや閾値などを決定します。
                このモデル化の段階では、Wetからの実験結果をもとに設計したり、構築したモデルにおける結果を振り返って再構成したりして、試行錯誤を繰り返すことによって最善のモデルを構築します。
              </p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            シミュレーション
          </h3>
          <div className="my-6 flex flex-col gap-4 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project8.png"
              alt="シミュレーション結果1"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <ProjectImage
              src="/images/homepage_project9.png"
              alt="シミュレーション結果2"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            構築したモデルをもとに、コンピュータ上でシミュレーションやデータ解析を行います。
            シミュレーションの動作がうまくいかなかった場合は、モデルを構築し直し、試行錯誤を繰り返すことによって、モデルを最善のものにします。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            シミュレーションの結果は、Dryとしての結果だけでなく、Wetでの実験にもフィードバックされます。
            Dryで設計・予測した内容をもとにWetが実験を行い、その結果を再びDryが解析・モデルの改良につなげる、というサイクルを繰り返します。
            この往復によって、より洗練された実験の設計や効率的な仮説検証が可能になります。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Human Practice
          </h2>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project10.jpg"
              alt="専門家へのインタビュー"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                <strong>Human Practiceとは、研究や技術を社会との関係の中で捉え、より良い形で実装するための活動</strong>を指します。
                プロジェクトの取り組む社会問題における関係者や一般の人々、プロジェクトの分野における有識者へ話を伺い、社会問題における詳細な課題点やプロジェクト分野の専門的知識の理解を深めることを目標とします。
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                iGEM KyotoのHuman Practiceでは、話を伺いたい利害関係者や専門家の候補を挙げることからアポイントメントの相談、先方への取材、最終的な結果の報告まで、すべて学生が主体となって行っています。
              </p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            インタビューの計画と実施
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            まずはチームで、何を取材したいのかを明確にし、取材先の候補をリストアップします。
            社会的なニーズや制度などを伺いたいときは企業や行政、専門的なアドバイスを伺いたいときは大学教員や企業研究所にインタビューに行くなど、目的に応じて取材先は多岐にわたります。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            実際のインタビューでは、プロジェクトに関する率直な意見や専門的な知見から、想定していなかった壁や、現場ならではの切実なニーズに気づかされることが多々あります。
            そして取材後には、得られた意見や知識を活かしてプロジェクトを修正します。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            バックグラウンドの異なる様々な方と対話することは、時に自分たちの前提を覆される苦労もありますが、その分、プロジェクトが社会に真に貢献できる形へと研ぎ澄まされていく喜びがあります。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            Wiki制作
          </h2>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project11.png"
              alt="Wiki制作のコーディング画面"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                <strong>Wiki制作では、iGEMの大会において、プロジェクトの成果をまとめたウェブページ「Wiki」を作成し、インターネットを通じて世界に発信</strong>します。
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                iGEMでは、社会問題の背景やプロジェクトの概要の説明、WetやDryの結果だけでなく、Human Practice、トライ&エラーの過程まで含めてWiki上で公開することが求められています。
              </p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            コーディングとデザイン
          </h3>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project12.png"
              alt="Wikiのデザイン設計"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                Wiki制作にあたり、まずはページ構成とデザインを決めます。
                ページの構成が決まった後は、Webコーディングの言語を用いてWikiのひな形を実装します。
                HTML・CSS・JavaScriptなどの言語を用いて、サイトの骨組み、デザイン、アニメーションをWikiに反映させます。
                コーディング経験が浅いメンバーも、自主的に勉強したり、互いに教え合いながら開発を進めています。
              </p>
            </div>
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
            コンテンツの執筆
          </h3>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project13.png"
              alt="完成したWikiのスクリーンショット"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                ページの構造に合わせて、プロジェクトの概要や実験結果等のコンテンツを執筆します。
                文章だけでなく、イラストや写真を含めることによって、サイトを訪れた人が分かりやすいように工夫します。
                iGEM Kyotoでは、活動を行った人が中心となってメンバー全員で文章を執筆し、最終的に英語に翻訳します。
                メンバー同士で支え合って完成させたWikiが公開された瞬間、チームとして大きな達成感を共有することができます。
              </p>
            </div>
          </div>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            広報・資金調達
          </h2>
          <div className="my-6 flex flex-col items-start gap-6 sm:flex-row">
            <ProjectImage
              src="/images/homepage_project14.jpg"
              alt="イベントでの広報活動"
              width={400}
              height={300}
              className="w-full rounded-lg object-cover sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <p className="mt-0 text-gray-600 dark:text-gray-400">
                <strong>広報活動では、iGEMやiGEM Kyotoの取り組みについて専門外の方にも分かりやすく伝え、合成生物学やiGEMについて興味を持ってもらうとともに、社会の方々と関わりを持つことを目的</strong>としています。
                SNSやニュースレターを通じた情報発信や、イベントを通じた発信を行っています。
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            iGEMへの参加や研究活動には、<strong>試薬費や機材費、参加費など多くの費用が必要</strong>です。
            そのため当団体では、<strong>企業・団体・個人の方々からの支援を受けながら活動</strong>しています。
            協賛・寄付していただいた資金は、iGEM大会への登録費および参加費、実験に必要な試薬や機器の調達に使用します。
          </p>

          <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
            過去のプロジェクト紹介
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            iGEM Kyotoが過去に取り組んできたプロジェクトをご紹介します。
            さらに詳しく知りたい方は、Wikiやポスターをご確認ください。
          </p>

          <PastProjectSection project={featuredProject} className="mt-8" />

          <details className="group mt-8 rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-5 py-4 font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden">
              <span>2024年以前のプロジェクト</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180 dark:text-gray-400" />
            </summary>
            <div className="border-t border-gray-200 px-5 pb-5 pt-4 dark:border-gray-700">
              {olderProjects.map((project) => (
                <PastProjectSection
                  key={project.heading}
                  project={project}
                  className="mt-8 first:mt-4"
                />
              ))}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
