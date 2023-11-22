import "./Range.css";
import ReactSlider from "react-slider";

function Range({ min, max, setValue, textType, title, defaultValue = [] }) {
  return (
    <div className="Range pt-3 pb-5 d-flex flex-column gap-3">
      <h4 className="d-block">{title}</h4>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={defaultValue}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => (
          <div {...props}>
            <div className="range-cont">
              <span>{`${state.valueNow}${textType}`}</span>
            </div>
          </div>
        )}
        pearling
        minDistance={10}
        min={min}
        max={max}
        onChange={(value, index) => setValue({ min: value[0], max: value[1] })}
      />
    </div>
  );
}

export default Range;
