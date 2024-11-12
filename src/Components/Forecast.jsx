import React from "react";

const Forecast = ({ forecastWheather, loationWheather }) => {
  return (
    <div className="container mt-5 text-black">
      <h4>
        Forecast Wheather of {loationWheather.name} ,{loationWheather.region} ,
         {loationWheather.country}
      </h4>
      {forecastWheather.forecastday.map((data, index) => {
        return (
          <div
            className="accordion accordion-flush mt-4 "
            id="accordionFlushExample" 
          >
            <div className="accordion-item accordian-overflow">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne" 
                >
                  <div className="d-flex flex-row align-items-center mb-5 position-absolute top-50 start-50  translate-middle col-12 col-sm-5 col-md-4 col-lg-8 ">
                    <div className="p-2 text-center"> Day : {data.date}</div>
                    <div className="p-2">
                      <img className="col-5 col-sm-6 col-md-4 col-lg-2" src="//cdn.weatherapi.com/weather/64x64/day/176.png"></img>
                      {data.day.condition.text}
                    </div>
                    <div className="p-2 col-md-2">Min Temp:{data.day.mintemp_c}</div>
                    <div className="p-2 col-md-5">Max Temp:{data.day.maxtemp_c}</div>
                  </div>
                </button>
              </h2>
              <div
                id={`${index}`}
                className="accordion-collapse collapse "
                data-bs-parent="#accordionFlushExample"
              >
             
                <div className="accordion-body">
                {data.hour.map((data)=>{
                  return(
                    <>
                    {data.time} Max Temp :{data.temp_c}
                    <div
                    class="progress"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      style={{width: `${data.temp_c}%`} }
                    ></div>
                  </div>
                  </>
                  )
                  
                })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Forecast;
