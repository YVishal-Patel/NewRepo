import Carousel from "react-bootstrap/Carousel";
import img1 from "../../EcommerceApp/Shared/img1.jpg";
import img2 from "../../EcommerceApp/Shared/img2.jpg";
import img3 from "../../EcommerceApp/Shared/img3.jpg";
import React, { Component, useEffect, useState } from "react";
import { useAppSelector } from "../../EcommerceApp/Models/SliceModel";
import { useAppDispatch } from "../../EcommerceApp/Models/SliceModel";
import { getStateData } from "./Checkout";
import Paginate from "../../EcommerceApp/Pages/Paginate";


function Home() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const {data} = useAppSelector(state => state.getApiData);
 const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getStateData())
  },[])

  const lastPostIndex = currentPage * postsPerPage ;
  const firstPostIndex = lastPostIndex - postsPerPage;
  let newApiData =  data?.slice(firstPostIndex, lastPostIndex)
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgUNcover"
          src={img1}
          alt="First slide"
          height="400px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgUNcover"
          src={img2}
          alt="Second slide"
          height="400px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgUNcover "
          src={img3}
          alt="Third slide"
          height="400px"
        />
      </Carousel.Item>
    </Carousel>
    <div className="main-data-container ">
    {newApiData &&
          newApiData?.map((item: any) => {
            const { title, body, id, price, description, category, image, rating } = item;

            return (
              <>
                <div key={item.id} className="mt-3 main-card-container">

                  <div
                    className="card"
                    style={{ width: "18rem", margin: "1rem 0" }}
                  >
                    <div className="card-body">
                    <img src={image} alt="" width="250px" height="200px" />
                      <h5 className="card-title">
                        {title?.length > 50
                          ? title.substr(0, 50) + "..."
                          : title}
                      </h5>

                      <p className="card-text">
                        {description?.length > 100 ? description.substr(0, 100) + "..." : description}
                      </p>
                      <h5>${price}</h5>
                      <p>Category</p>

                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                 </div>
               </>
            );
          })}
</div>
   <Paginate totalPosts={data?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default Home;
