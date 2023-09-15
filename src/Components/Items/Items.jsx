import { useEffect, useState } from "react";
import Item from "./Item/Item";

const Items = ({handleClickButton}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="lg:w-3/4 w-2/2 sm:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                blogs.map((sBlog, idx) => <Item handleClickButton={handleClickButton} sBlog={sBlog}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;