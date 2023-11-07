import { Link } from "react-router-dom";


const DisplayProduct = ({ user }) => {
    const { Image, Name, authorName, Category,Rating,_id } = user || {};
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Image} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{Name}</h1>
                        <p className="py-2  text-green-700 text-5xl font-bold">{authorName}</p>
                        <p className="py-2">Category: {Category}</p>
                        
                        <p className="py-2">Rating: <span className="text-2xl font-bold">{Rating}</span>/10</p>
                        <div className="flex gap-2">
                        <Link to={`/product/${_id}`}><button className="btn bg-green-600 hover:bg-green-700">View Details</button></Link>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayProduct;