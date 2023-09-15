import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
const Item = ({sBlog, handleClickButton}) => {
    
    const {title, price, image, credit, description} = sBlog;
    return (
        <div className="bg-white p-4 sm:p-3 lg:p-6 rounded-lg text-center lg:text-left">
            <img className="w-full" src={image} alt="" />
            <h3 className="text-[#1C1B1B] text-xs lg:text-base font-semibold mt-4 mb-3">{title}</h3>
            <p className="text-[#1C1B1B99] lg:text-sm text-xs mb-4">{description}</p>
            <div className="flex items-center justify-between px-2 lg:px-0">
            <h4 className="text-xs lg:text-base text-[#1C1B1B99] font-medium flex gap-1 items-center"><span className="lg:text-xl"><FiDollarSign></FiDollarSign></span> Price: <span>{price}</span></h4>
            <h4 className="text-xs lg:text-base text-[#1C1B1B99] font-medium flex gap-1 items-center"><span className="lg:text-xl"><BsBook></BsBook></span> Credit: <span>{credit}</span>hr</h4>
            </div>
            <button onClick={()=> handleClickButton(sBlog)} className="bg-[#2F80ED] px-16 sm:px-14 lg:px-[105px] text-white py-2 mt-6 rounded-lg">Select</button>
        </div>
    );
};

export default Item;