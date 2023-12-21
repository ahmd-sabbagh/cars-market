import { useRecoilValue } from "recoil";
import DotsMenu from "../../../../../../Components/DotsMenu/DotsMenu";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import { ReactComponent as Arrow } from "../../../../Assets/arrow-down.svg";
import { haragMessages } from "../../atoms/atoms";

function Head({setState}) {
  const message = useRecoilValue(haragMessages);
  return (
    <>
      <div className="head-message d-flex gap-4 justify-content-between border-bottom pb-3">
        <div className="d-flex align-items-center gap-3 px-3">
          <div className="image flex-c bg-image" style={{backgroundImage:`url(${message.head.image})`}}>
          </div>
          <div className="text">
            <h4>{message.head.name}</h4>
            <p className="mt-1">{trans("harag_message.active_now")}</p>
          </div>
        </div>
        <div className="ctr d-flex align-items-center gap-2">
          <DotsMenu>
            <p className="p-2">hello</p>
          </DotsMenu>
          <div
            className="back pointer px-3 d-md-none"
            onClick={() => {
              setState(false);
            }}
          >
            <Arrow />
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
