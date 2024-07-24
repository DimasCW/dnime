import Image from "next/image";
import Link from "next/link";

const Topanime = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <Link href={`/${anime.mal_id}`} className="gap-4">
            <Image
              src={anime.images.webp.image_url}
              width={550}
              height={350}
              alt="hi"
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold text-md md:text-xl p-4">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Topanime;
