import Card from "./Card";
import { gigs } from "@/data";
import Header from "./Header";


const CategoriesPage = () => {
    return(
        <div className="flex items-center justify-center">
            <div className="w-navWidth">
              <Header />

            <div className="  grid grid-cols-4 gap-5">

            {gigs.map((gig: Record<string, any>) => (
                
                <Card key={gig.id} id={gig.id} item={gig} />
                ))}
            </div>
                </div>
            
        </div>
    )
}

export default CategoriesPage; 