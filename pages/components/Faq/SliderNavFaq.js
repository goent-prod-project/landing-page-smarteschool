import { Tooltip } from "antd";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const SliderNavFaq = ({ data }) => {
  const SliderItemContent = ({ type, name, img, id }) => {
    return (
      <div key={id} itemID={id}>
        <a
          className="d-flex flex-column align-items-center me-4"
          onClick={() => setType(type)}
        >
          <img
            src={
              type == type || (!type && idx == 0)
                ? `${img.split(".")[0] + "-active"}.svg`
                : img
            }
            alt="icon-faq"
            className="mb-2"
          />
          <h6
            className={`fw-bold  mb-0 ${
              type == type || (!type && idx == 0)
                ? "color-primary"
                : "color-dark"
            }`}
          >
            {name}
          </h6>
        </a>
      </div>
    );
  };

  const sliderItem = (data) =>
    data?.map((d, idx) => {
      return (
        <SliderItemContent type={d.type} name={d.name} img={d.img} id={idx} />
      );
    });

  const slider = sliderItem(data);

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  const ArrowLeft = Arrow({
    text: (
      <div
        className="bg-white rounded-circle shadow-dark-ss d-flex justify-content-center align-items-center p-1"
        style={{ height: "60px", width: "60px" }}
      >
        <img src={"/img/arrow-rekap-left.svg"} className="ms-1" />
      </div>
    ),
    className: "arrow-prev",
  });
  const ArrowRight = Arrow({
    text: (
      <div
        className="bg-white rounded-circle shadow-dark-ss d-flex justify-content-center align-items-center p-1"
        style={{ height: "60px", width: "60px" }}
      >
        <img src={"/img/arrow-rekap-right.svg"} className="me-1" />
      </div>
    ),
    className: "arrow-next",
  });

  return (
    <div>
      <div className="card card-ss mb-4">
        <div className="card-body p-4 pt-3">
          <div className="d-flex justify-content-between align-items-stretch flex-wrap">
            <ScrollMenu
              hideArrows={true}
              hideSingleArrow={true}
              data={slider}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              clickWhenDrag={false}
              selected={data?.type == data?.type || (!data?.type && idx == 0)}
              //   onSelect={onSelect}
              wheel={false}
              translate={2}
              scrollBy={1}
              alignCenter={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderNavFaq;
