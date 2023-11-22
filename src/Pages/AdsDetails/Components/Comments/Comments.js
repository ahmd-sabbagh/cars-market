import { trans } from "../../../../Components/Navbar/Navbar";
import CommentComp from "./CommentComp";
import "./Comments.css";
import AppendComments from "./AppendComments";
import { MdCommentsDisabled } from "react-icons/md";
import Paginations from "../../../../Components/Paginations/Paginations";
import { useRecoilState } from "recoil";
import { commentsData } from "../GlopalStateRecoil/AllData";

function Comments({ownerId}) {
  const [Data, setComments] = useRecoilState(commentsData);
  
  return (
    <div className="Comments d-flex flex-column gap-4">
      <h3 className="title-dev">{trans("ads_details.comments")}</h3>
      <div className="comments-cont d-flex flex-column gap-3">
        {Data?.data?.length >= 1 ? (
          Data?.data?.map((item) => <CommentComp ownerId={ownerId} comment={item} key={item.id} />)
        ) : (
          <div className="no-comment flex-c">
            <div className="cont d-flex flex-column align-items-center gap-3">
              <MdCommentsDisabled style={{ fontSize: "40px" }} />
              <h4 className="fs-16-700 text-color">{"لا يوجد تعليقات"}</h4>
            </div>
          </div>
        )}
      </div>
      {/* More */}
      {Data?.links?.next !== null && <Paginations />}
      {/* Write Comment */}
      <AppendComments />
    </div>
  );
}

export default Comments;
