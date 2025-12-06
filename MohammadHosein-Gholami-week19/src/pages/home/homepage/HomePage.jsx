import SearchBox from "../searchbox/SearchBox";
import CreateNewItem from "../createNewItem/CreateNewItem";
import ListProducts from "../listProducts/ListProducts";

function HomePage() {
  return (
    <div>
      <SearchBox />
      <CreateNewItem />
      <ListProducts />
    </div>
  );
}

export default HomePage;
