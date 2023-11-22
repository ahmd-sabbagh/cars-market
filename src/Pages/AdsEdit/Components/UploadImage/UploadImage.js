import { trans } from "../../../../Components/Navbar/Navbar";
import imageView from "../../Assets/photograph.svg";
function UploadImage({ image1, setImage1 }) {
  return (
    <div className="UploadImage">
      <h4>{trans("add_ads_car.upload_image")}</h4>
      <div className="images-up mt-4 mb-4">
        <div
          className="image position-relative flex-c bg-image"
          style={
            image1 && {
              backgroundImage: `url(${
                typeof image1 === "string"
                  ? image1
                  : URL.createObjectURL(image1)
              })`,
            }
          }
        >
          <label
            className="bg-image pointer"
            style={image1 ? null : { backgroundImage: `url(${imageView})` }}
          >
            <input
              type="file"
              onChange={(e) => {
                setImage1(e.target.files[0]);
              }}
            />
          </label>
          {image1 && (
            <span
              className="close flex-c"
              onClick={() => {
                setImage1(null);
              }}
            >
              x
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
