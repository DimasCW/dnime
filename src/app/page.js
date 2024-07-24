import Topanime from "@/component/Topanime"
import Header from "@/component/Topanime/Header";

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topanime =await response.json();
  return(
    <>
      <sction>
        <Header title={"Paling Populer"} titleHref={"/populer"} titleLink={"Lihat Semua"} />
        <Topanime api={topanime}/>
      </sction>
      
    </>
  )
}

export default Page

