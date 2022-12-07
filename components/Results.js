import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";


const Results = ({ results }) => {
    return ( 
        <div className="my-5 px-5 my-100 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"> 
        { 
            results.map((result) => <Thumbnail key={result.id} result={result}/>)
        }
        </div>
    );  
}
 
export default Results;