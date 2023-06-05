import Titles from "../components/titles/Titles";
import ListOffers from "../components/listOffers/ListOffers";
import ListLocations from "../components/listLocations/ListLocations";
import Blog from "../components/blog/Blog";

export default function Home() {
  return (
    <div>
      <Titles />
      <ListOffers />
      <ListLocations />
      <Blog />
    </div>
  )
}
