import React from "react";

const Current = ({ currentWheather, loationWheather }) => {
  return (
    <div className="container mt-5 text-center text-red">
      <h4>
        Current Wheather of {loationWheather.name} ,{loationWheather.region} ,
         {loationWheather.country}
      </h4>

      <div className="container row mt-4">
        {/* Col-1 */}
        <div className="text-center text-black col-12 col-sm-6 col-md-4 col-lg-2">
          <div className="border border-black">
            <img
              className="img-fluid col-12 col-sm-6 col-md-4 col-lg-2"
              src={currentWheather.condition.icon}
              alt="..."
            />
            {currentWheather.condition.text}
          </div>
        </div>

        {/* Col-2 */}
        <div className="col-3 fs-6 col-12 col-sm-6 col-md-4 col-lg-2">
          <div className="border border-black">
            <div className=" text-center text-black ">
              <h5> Temp(in c):{currentWheather.temp_c}</h5>
            </div>
          </div>{" "}
        </div>

        {/* Col-3 */}
        <div className="col-3 col-12 col-sm-6 col-md-4 col-lg-2 ">
          <div className="border border-black">
            {" "}
            <div className=" text-black">
              <h5> Temp(in f):{currentWheather.temp_f}</h5>
            </div>
          </div>
        </div>

        {/* Col-4 */}
        <div className="col-3 col-12 col-sm-6 col-md-4 col-lg-2">
          <div className="border border-black">
            {" "}
            <div className="border-light text-black">
              <h5> Humidity:{currentWheather.humidity}</h5>
            </div>
          </div>
        </div>
        {/* Col-5 */}
        <div className="col-3 col-12 col-sm-6 col-md-4 col-lg-2 ">
          <div className="border border-black">
            {" "}
            <div className=" text-black">
              <h5> Heat(in c):{currentWheather.heatindex_c}</h5>
            </div>
          </div>
        </div>

        {/* Col-6 */}
        <div className="col-3 col-12 col-sm-6 col-md-4 col-lg-2">
          <div className="border border-black">
            {" "}
            <div className="border-light text-black">
              <h5> Heat(in f):{currentWheather.heatindex_f}</h5>
            </div>
          </div>
        </div>

        <div className=" container row mt-4 ">
          {/* Col-5 */}
          <div className=" col-sm-6 col-md-4 col-lg-4">
            <div className="border border-black">
              {" "}
              <div className="border-black p-2 text-black">
                <h5> Wind degree:{currentWheather.wind_degree}</h5>
              </div>
            </div>
          </div>
          {/* Col-6 */}
          <div className=" col-13 col-sm-6 col-md-4 col-lg-2">
            <div className="border border-black">
              <div className="border-light p-2 text-black">
                <h5> Wind Dir:{currentWheather.wind_dir}</h5>
              </div>
            </div>
          </div>
          {/* Col-7 */}
          <div className="col-3 col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="border border-black">
              {" "}
              <div className="border-light p-2 text-black">
                <h5> Wind speed (kph):{currentWheather.wind_kph}</h5>
              </div>
            </div>
          </div>
          {/* Col-8 */}
          <div className="col-3 col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="border border-black">
              <div className="border-light p-2 text-black">
                <h5> Wind speed (mph):{currentWheather.wind_mph}</h5>
              </div>
            </div>
          </div>

          {/* Col-8 */}
          {/* <div className="col-3 col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="border">
              <div className="border-light p-2 text-black">
                <h5> Visibility(km):{currentWheather.vis_km}</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Current;
