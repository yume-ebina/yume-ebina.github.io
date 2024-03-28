import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const ViewMore = ({ href }: { href: string }) => {
  return (
    <Link href={href}>
      <div className="flex items-center font-medium">
        VIEW MORE <MdNavigateNext />
      </div>
    </Link>
  );
};
export default ViewMore;
