import { MdNavigateNext } from "react-icons/md";
import NewsCard from "./NewsCard";
import ViewMore from "./ViewMore";
// import Image from "next/image";
// import { basePath } from "../../next.config";
// const BASE_PATH = basePath ? basePath : "";

const News = () => {
  return (
    <>
      <section className="bg-gray-100 text-gray-700 px-12 py-48 my-16" id="new">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="text-6xl mb-7 font-medium">NEWS</div>
            <ViewMore href="https://preview.studio.site/live/4Ra4LEXoaD/" />
          </div>
          <div className="flex grid grid-cols-3 gap-4">
            <NewsCard
              image={"../../public/image/dummy.png"}
              tag={"プレスリリース"}
              title={"記事サンプルです"}
              href={"https://preview.studio.site/live/4Ra4LEXoaD/"}
              datetime={"2021/3/25 13:34"}
            />
            <NewsCard
              image={"../../public/image/dummy.png"}
              tag={"プレスリリース"}
              title={"記事サンプルです"}
              href={"https://preview.studio.site/live/4Ra4LEXoaD/"}
              datetime={"2021/3/25 13:34"}
            />
            <NewsCard
              image={"../../public/image/dummy.png"}
              tag={"プレスリリース"}
              title={"記事サンプルです"}
              href={"https://preview.studio.site/live/4Ra4LEXoaD/"}
              datetime={"2021/3/25 13:34"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
