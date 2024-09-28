import { Featured } from "../../components/featured/Featured";
import { CategoryList } from "../../components/categoryList/CategoryList";
import { CardList } from "../../components/cardList/CardList";
import { Menu } from "../../components/menu/Menu";
import { AdBox } from "../../components/adBox/AdBox";
import { Pagination } from "../../components/pagination/Pagination";
import { BlogButton } from "../../components/blogButton/BlogButton";

export default function Home() {
  return <div>
    <Featured/>
    <AdBox/>
    <CategoryList/>
    <CardList/>
    <BlogButton/>
    {/* <Menu/> */}
    <AdBox/>
  </div>;
}
