import { ReactComponent as Imoji } from "../Assets/smile.svg";
import { ReactComponent as Camera } from "../Assets/camera.svg";
import { ReactComponent as Send } from "../Assets/send.svg";
import { useState } from "react";
import { FiDelete } from "react-icons/fi";

function Footer() {
  const [image, setImage] = useState(null);
  return (
    <form className="Footer-send-message p-2 d-flex align-items-center gap-2 mt-3 position-relative">
      {image && (
        <div className="image-select">
          <div className="position-relative">
            <div
              className="delete pointer"
              onClick={() => {
                setImage(null);
              }}
            >
              <FiDelete />
            </div>
            <img src={URL.createObjectURL(image)} alt="chat-photos" />
          </div>
        </div>
      )}
      <button type="button" className="imoje">
        <Imoji />
      </button>
      <input
        type="text"
        className="flex-grow-1 border-0"
        placeholder="Type your message"
      />
      <label className="flex-c pointer">
        {image ? (
          <button className="border-0 bg-transparent">
            <Send />
          </button>
        ) : (
          <>
            <input
              className="d-none"
              type="file"
              accept="image/png, image/jpeg"
              required={!image}
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <Camera />
          </>
        )}
      </label>
    </form>
  );
}

export default Footer;
