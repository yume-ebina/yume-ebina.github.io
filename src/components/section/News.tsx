import NewsCard from "../NewsCard";
import ViewMore from "../button/ViewMore";

const News = () => {
  const newsCards = [
    {
      index: 1,
      image: "../../public/image/dummy.png",
      tag: "プレスリリース",
      title: "記事サンプルです",
      href: "https://preview.studio.site/live/4Ra4LEXoaD/",
      datetime: "2021/3/26",
    },
    {
      index: 2,
      image: "../../public/image/dummy.png",
      tag: "インタビュー",
      title: "「街と家から暮らしを考える」SMART CITY導入事例を公開しました",
      href: "https://preview.studio.site/live/4Ra4LEXoaD/",
      datetime: "2021/3/26",
    },
    {
      index: 3,
      image: "../../public/image/dummy.png",
      tag: "インタビュー",
      title: "「SMART HOME で暮らす人」インタビューを公開しました",
      href: "https://preview.studio.site/live/4Ra4LEXoaD/",
      datetime: "2021/3/26",
    },
  ];
  const cards = newsCards.map((card) => (
    <NewsCard
      key={card.index}
      image={card.image}
      tag={card.tag}
      title={card.title}
      href={card.href}
      datetime={card.datetime}
    />
  ));

  return (
    <>
      <section
        className="bg-gray-100 text-gray-700 px-12 py-48 mt-16"
        id="news"
      >
        <div className="container mx-auto flex flex-col">
          <div className="flex md: justify-between">
            <div className="text-6xl mb-7 font-medium">NEWS</div>
            <ViewMore href="https://preview.studio.site/live/4Ra4LEXoaD/" />
          </div>
          <div className="container flex mx-auto p-5 flex-col md:grid grid-cols-3 gap-4">
            {cards}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
