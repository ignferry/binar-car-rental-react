import Cover from "../../components/landing/Cover";
import Search from "../../components/landing/Search";
import SearchResult from "../../components/landing/SearchResult";

import "../../styles/cars.css";
// import "../../scripts/Component";
// import "../../scripts/cars/Car";
// import "../../scripts/cars/CarSearchResult";
// import "../../scripts/cars/CarSearchBar";
// import "../../scripts/cars/CarPage";

export default function SearchCarPage() {
    return(
        <>
            <Cover showButton={false}/>
            <Search/>
            <SearchResult/>
        </>
    )
}