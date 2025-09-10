import "./index.css";
import { FaCloudSunRain } from "react-icons/fa";
function App() {
  let APIKEY = "85cecd393db40558d642e735b326014f";
  let API = "85cecd393db40558d642e735b326014f";
  return (
    <>
      <div className="container mx-auto max-w-[1200px] px-10 py-5 lg:px-0">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <input
              type="text"
              name=""
              id=""
              placeholder="نام شهر را وارد کنید..."
              className="w-full px-5 py-3 rounded-md"
            />
            <div className="flex justify-between my-8 items-center">
              <div className="flex flex-col gap-5">
                <h1 className="text-5xl font-black">تهران</h1>
                <p className="text-gray-400 text-sm">{`احتمال بارش باران : ${0} درصد`}</p>
                <span className="text-6xl">{`${5}°`}</span>
              </div>
              <div>
                <FaCloudSunRain size={100} color="orange" />
              </div>
            </div>
            <div className="bg-[#3B3B3B] p-3 rounded-md">
              <span>آب و هوای چند ساعت آینده :</span>
              <div className="grid grid-cols-6 mt-5 divide-x-2 divide-x-reverse divide-pink-700">
                <div className="flex flex-col items-center gap-2">
                  <span>6 صبح</span>
                  <FaCloudSunRain size={35} color="orange" />
                  <span className="text-2xl">{`${5}°`}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span>6 صبح</span>
                  <FaCloudSunRain size={35} color="orange" />
                  <span className="text-2xl">{`${5}°`}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span>6 صبح</span>
                  <FaCloudSunRain size={35} color="orange" />
                  <span className="text-2xl">{`${5}°`}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span>6 صبح</span>
                  <FaCloudSunRain size={35} color="orange" />
                  <span className="text-2xl">{`${5}°`}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span>6 صبح</span>
                  <FaCloudSunRain size={35} color="orange" />
                  <span className="text-2xl">{`${5}°`}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span>6 صبح</span>
                  <FaCloudSunRain size={35} color="orange" />
                  <span className="text-2xl">{`${5}°`}</span>
                </div>
              </div>
            </div>
            <div className="bg-[#3B3B3B] p-3 rounded-md mt-5">
              <span>توضیحات تکمیلی :</span>
              <div className="grid grid-cols-2 mt-5 gap-5 justify-between items-center">
                <div className="flex flex-col gap-3 ">
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={20} color="#9ca3af" />
                    <span className="text-gray-400">دمای محسوس</span>
                  </div>
                  <p className="flex items-start text-right text-3xl">
                    °<span className="text-4xl">30</span>
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={20} color="#9ca3af" />
                    <span className="text-gray-400">باد</span>
                  </div>
                  <p className="flex items-start text-3xl" dir="ltr">
                    {`${0.3}`} km/h
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={20} color="#9ca3af" />
                    <span className="text-gray-400">احتمال بارش باران </span>
                  </div>
                  <p className="flex items-start text-3xl" dir="ltr">
                    {`${0}`} %
                  </p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={20} color="#9ca3af" />
                    <span className="text-gray-400">شاخص فرابنفش</span>
                  </div>
                  <p className="flex items-start text-right text-3xl">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="bg-[#3B3B3B] p-3 rounded-md">
              <span>پیشبینی 7 روز آینده :</span>
              <div className="flex flex-col px-10 mt-5 divide-y divide-gray-500/50">
                <div className="flex justify-between items-center py-5">
                  <span className="text-gray-400 text-xl">امروز</span>
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={35} color="orange" />
                    <span className="text-xl">آفتابی</span>
                  </div>
                  <span className="text-2xl">{`${27}/${36}`}</span>
                </div>
                <div className="flex justify-between items-center py-5">
                  <span className="text-gray-400 text-xl">امروز</span>
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={35} color="orange" />
                    <span className="text-xl">آفتابی</span>
                  </div>
                  <span className="text-2xl">{`${27}/${36}`}</span>
                </div>
                <div className="flex justify-between items-center py-5">
                  <span className="text-gray-400 text-xl">امروز</span>
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={35} color="orange" />
                    <span className="text-xl">آفتابی</span>
                  </div>
                  <span className="text-2xl">{`${27}/${36}`}</span>
                </div>
                <div className="flex justify-between items-center py-5">
                  <span className="text-gray-400 text-xl">امروز</span>
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={35} color="orange" />
                    <span className="text-xl">آفتابی</span>
                  </div>
                  <span className="text-2xl">{`${27}/${36}`}</span>
                </div>
                <div className="flex justify-between items-center py-5">
                  <span className="text-gray-400 text-xl">امروز</span>
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={35} color="orange" />
                    <span className="text-xl">آفتابی</span>
                  </div>
                  <span className="text-2xl">{`${27}/${36}`}</span>
                </div>
                <div className="flex justify-between items-center py-5">
                  <span className="text-gray-400 text-xl">امروز</span>
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={35} color="orange" />
                    <span className="text-xl">آفتابی</span>
                  </div>
                  <span className="text-2xl">{`${27}/${36}`}</span>
                </div>
                <div className="flex justify-between items-center py-5">
                  <span className="text-gray-400 text-xl">امروز</span>
                  <div className="flex items-center gap-2">
                    <FaCloudSunRain size={35} color="orange" />
                    <span className="text-xl">آفتابی</span>
                  </div>
                  <span className="text-2xl">{`${27}/${36}`}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
