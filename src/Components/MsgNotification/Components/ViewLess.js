import { ReactComponent as Arrow } from "../Assets/arrow.svg";

function ViewLess({setView}) {
  return (
    <div className="text mt-4">
      <h2>{"اهلا بك ,"}</h2>
      <div className="name d-flex align-items-center gap-1">
        <span>{"Ahmes Said"}</span>
        <span>{"ارسل اليك رسالة"}</span>
      </div>
      <p className="mt-1">
        {
          "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم"
        }
      </p>
      <button
        className="d-flex align-items-center gap-2 mt-1 full-width justify-content-end"
        type="button"
        onClick={() => {
          setView(true);
        }}
      >
        <span>{"عرض الرسالة"}</span>
        <Arrow />
      </button>
    </div>
  );
}

export default ViewLess;
