

const ItemList = ({ card, hour, prices, remaining }) => {
    
    return (
        <div className="lg:w-1/4 w-2/4 sm:w-2/4 bg-white p-3 lg:p-6 rounded-lg h-fit">
            <h2 className="text-[#2F80ED] text-xs sm:text-base lg:text-lg font-bold">Credit Hour Remaining <span>{remaining}</span> hr</h2>
            <hr className="my-4" />
            <h3 className="text-xl font-bold text-[#1C1B1B] mb-5">Course Name</h3>
            <div>
                {
                    card.map(sCardList => <li className="list-decimal" key={sCardList.id}>{sCardList.title}</li>)
                }
            </div>
            <hr className="my-5" />
            <p className="text-[#1C1B1BCC] text-base font-medium">Total Credit Hour : <span>{hour}</span></p>
            <hr className="my-4" />
            <h5 className="text-base font-semibold text-[#1C1B1BCC]">Total Price : <span>{prices}</span> USD</h5>
        </div>
    );
};


export default ItemList;