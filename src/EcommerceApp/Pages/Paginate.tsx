import { useState } from "react";

const Paginate = ({ totalPosts, postsPerPage, setCurrentPage }: any) => {
  const [isActive, setIsActive] = useState<string>("");
  let pages: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePage = (item:any) => {
    setCurrentPage(item)
    setIsActive(item) 
  }
 
  return (
    <>
      <div className="d-flex my-3 mx-2 justify-content-end">
        {pages?.map((item: any) => {
          return (
            <div key={item.id}>
              <button className={isActive === item?"bg-primary text-white ":""}  onClick={()=> handlePage(item)}>{item}</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Paginate;
