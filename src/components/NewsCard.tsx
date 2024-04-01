import Link from "next/link";

const NewsCard = ({
  image,
  tag,
  title,
  href,
  datetime,
}: {
  image: string;
  tag: string;
  title: string;
  href: string;
  datetime: string;
}) => {
  return (
    <Link href={href}>
      <div className=" h-80 bg-white rounded-lg p-5 mb-5 hover:bg-slate-200 duration-300 md:mr-5">
        <div className="mb-3 flex justify-center items-center">
          <img src={image} />
        </div>
        <div>
          <p className=" bg-blue-800 text-white text-xs rounded-full w-24 text-center py-1 mb-2">
            {tag}
          </p>
          <p className=" font-semibold mb-6">{title}</p>
          <p className=" text-gray-400 text-sm">{datetime}</p>
        </div>
      </div>
    </Link>
  );
};
export default NewsCard;
