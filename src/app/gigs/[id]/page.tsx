

interface IParams {
    id?: string; 
}

const CategoryPage = ({params}: {params: IParams}) => {
    console.log(params.id)
    return(
        <div></div>
    )
}

export default CategoryPage; 