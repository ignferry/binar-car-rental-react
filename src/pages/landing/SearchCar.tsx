import Cover from "../../components/landing/Cover";
import Search from "../../components/landing/Search";

import "../../styles/cars.css";

export default function SearchCarPage() {
    return(
        <>
            <Cover showButton={false}/>
            <Search/>
        </>
    )
}