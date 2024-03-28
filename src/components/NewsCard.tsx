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
      <div className="bg-white rounded-lg p-5 mr-5">
        <div>
          <img src={image}></img>
        </div>
        <div>
          <p className=" bg-blue-800 text-white text-xs rounded-full w-1/4 text-center py-1 px-1 mb-2">
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