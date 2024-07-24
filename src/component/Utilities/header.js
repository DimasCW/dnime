const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Paling populer</h1>
        <Link
          href="/populer"
          className="md:text-xl text-sm underline hover:text-indigo-500 transition=all"
        >
          Lihat Semua
        </Link>
      </div>
    </>
  );
};
