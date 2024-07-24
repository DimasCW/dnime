import Link from "next/link";

const Header = ({title, titleHref, titleLink}) => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        {titleHref && titleLink
        ?
        <Link
          href={titleHref}
          className="md:text-xl text-sm underline hover:text-indigo-500 transition=all"
        >
          {titleLink}
        </Link>
        :
        null

        }
      </div>
    </>
  );
};

export default Header
