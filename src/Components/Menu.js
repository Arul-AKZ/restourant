import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import "tw-elements";
import ReactLoading from 'react-loading';

const Menu = () => {
  const [meal, setMeal] = useState([]);

  const [foodModal, setFoodModal] = useState([]);
  const [loading, setLoading] = useState(true)

  const getFoodModal = async (idMeal) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    // console.log(res.data.meals[0]);

    setTimeout(() => {
    // console.log(res.data.meals[0]);
    setFoodModal(res.data.meals[0]);
      setLoading(false)
    }, 2000);

    setLoading(true)
  };

  // Data Makanan
  const getMeal = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    // console.log(res.data.meals.slice(0, 5));
    setMeal(res.data.meals.slice(0, 16));
  };

  useEffect(() => {
    getMeal();
    getFoodModal();
  }, []);

  function truncateString(str, num) {
    if (num > str.length) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  }

  return (
    <section id="menu">
      <div className="bg-menu h-full flex flex-col items-center p-32 max-lg:px-4">
        <h2 className="title -mb-8 max-lg:text-6xl" data-aos="fade-down-right">Discover</h2>
        <h4 className="sub-title text-white z-10 max-lg:text-4xl" data-aos="fade-up-left">Our Menu</h4>

        <div className="m-10 p-5 bg-white w-full h-full rounded-md flex flex-wrap gap-10 justify-center bg-transparent">
          {/* Card */}
          {meal.map((m) => (
            <div className="w-1/5 rounded-md card-shadow h-auto bg-white max-lg:w-full" data-aos="fade-down">
              <img
                src={m.strMealThumb}
                alt="gambar"
                className="object-cover rounded-t-md max-lg:w-full"
              />

              <div className="py-5 px-4">
                <h2 className="font-medium text-xl">
                  {truncateString(`${m.strMeal}`, 30)}
                </h2>

                <h4 className="text-sm mt-1 max-lg:text-lg">{m.strArea}</h4>

                <div className="btn-more mt-10 flex">
                  <button
                    className="uppercase ml-auto text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-indigo-400                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300" 
                    data-bs-toggle="modal"
                    data-bs-target="#modalFood"
                    type="button"
                    value={foodModal}
                    onClick={(e) => getFoodModal(m.idMeal)}
                  >
                    Read More
                  </button>

                  <div
                    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="modalFood"
                    tabindex="-1"
                    aria-labelledby="exampleModalXlLabel"
                    aria-modal="true"
                    role="dialog"
                  >
                    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        {loading ? (
                          <>
                          <div className="flex h-screen justify-center stroke-black items-center "> 
                          <h3 className="mr-3"> <strong>Tunggu Bentar Ya....</strong> </h3>
                            <ReactLoading 
                            type="spin"
                            width={64}
                            height={64}
                            color="white"/>
                          </div>
                          </>
                        ) : (
                          <>
                          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5
                            class="text-xl font-medium leading-normal text-gray-800 h-full"
                            id="exampleModalXlLabel">
                            {foodModal.strMeal} - {foodModal.strArea}
                          </h5>
                          <button
                            type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body relative p-4 flex justify-center">
                          <img 
                          src={foodModal.strMealThumb} 
                          alt={foodModal.strArea} />
                        </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Card */}
        </div>
      </div>
    </section>
  );
};

export default Menu;