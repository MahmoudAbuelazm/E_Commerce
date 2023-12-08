import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../components/cartSlice";
// import "../Home/Home.css";

function Favourite({ productData }) {
  const [allProducts, setallProducts] = useState([]);
  const [newprice, setnewprice] = useState("");
  const [wishlistproducts, setWishlistProducts] = useState([]);
  const [ids, setIds] = useState([]);
  let userToken = localStorage.getItem("userToken");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProduccts = () => {
    axios
      .get("https://backend-kappa-beige.vercel.app/product?page=1")
      .then((respo) => {
        setallProducts(respo.data.result);
        setnewprice(respo.data.result);
        console.log(allProducts);
        console.log(newprice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };
  useEffect(() => {
    getProduccts();
  }, []);

  let config = {
    headers: {
      token: userToken,
    },
  };

  const getWishlistIds = async () => {
    try {
      const res = await axios.get(
        `https://backend-kappa-beige.vercel.app/product/wishlist`,
        config
      );
      setIds(res.data.results);
      console.log(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchIds = async () => {
      await getWishlistIds();
    };
    fetchIds();
  }, []);

  useEffect(() => {
    const fetchSingleProducts = async () => {
      try {
        const productPromises = ids.map(async (id) => {
          const res = await axios.get(
            `https://backend-kappa-beige.vercel.app/product/single/${id}`
          );
          return res.data.result;
        });

        const products = await Promise.all(productPromises);
        setWishlistProducts(products);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSingleProducts();
  }, [ids]);

  const deleteFromWishlist = (itemID) => {
    axios
      .patch(
        `https://backend-kappa-beige.vercel.app/product/deleteWishlist/${itemID}`,
        {},
        config
      )
      .then((res) => {
        console.log(res);
        setWishlistProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== itemID)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div style={{ margin: "100px 0" }} className="all_products">
          <div className="info d-flex justify-content-between align-items-center mb-5">
            <div className="r">
              <p>favourite</p>
              <b>{`Wishlist(${
                wishlistproducts.length !== 0 ? wishlistproducts.length : "0"
              })`}</b>
            </div>
            <div className="buton">
              <div className="btn">Add All To cart</div>
            </div>
          </div>
          <div
            className="row justify-content-center products"
            style={{ gap: "30px" }}
          >
            {wishlistproducts.map((prod, ind) => {
              return (
                <div
                  className="col-3 card"
                  style={{ width: "305px" }}
                  key={ind}
                >
                  <div className="img_container">
                    <img
                      onClick={() => navigate(`/view/${prod.id}`)}
                      src={prod.defaultImage.url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="btn btn-dark">Add To Cart</div>
                    {/* <AiOutlineHeart /> */}
                    {prod.status === "new" ? (
                      <div className="new">new</div>
                    ) : (
                      ""
                    )}
                    <div
                      className="deleteFromFav"
                      onClick={() => {
                        deleteFromWishlist(prod.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>{prod.name}</p>
                    <span>
                      {prod.price - prod.price * (prod.discount / 100)}{" "}
                      <b>{prod.price} </b>
                    </span>
                    <span>availableItems : {prod.availableItems}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ margin: "100px 0" }} className="all_products">
          <div className="info d-flex justify-content-between align-items-center mb-5">
            <div className="r">
              <p>Our productes</p>
              <b>Explore Our Products</b>
            </div>
            <div className="buton">
              <div className="btn">View all</div>
            </div>
          </div>
          <div
            className="row justify-content-center products"
            style={{ gap: "30px" }}
          >
            {allProducts.map((prod, ind) => {
              return (
                <div
                  className="col-3 card"
                  style={{ width: "305px" }}
                  key={ind}
                >
                  <div className="img_container">
                    <img
                      onClick={() => navigate(`/view/${prod.id}`)}
                      src={prod.defaultImage.url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div onClick={handleAddToCart} className="btn btn-dark">
                      Add To Cart
                    </div>
                    {/* <AiOutlineHeart /> */}
                    {prod.status === "new" ? (
                      <div className="new">new</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="card-body">
                    <p>{prod.name}</p>
                    <span>
                      {prod.price - prod.price * (prod.discount / 100)}{" "}
                      <b>{prod.price} </b>
                    </span>
                    <span>availableItems : {prod.availableItems}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourite;
