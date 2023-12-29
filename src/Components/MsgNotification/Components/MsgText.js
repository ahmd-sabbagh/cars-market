import Image from "../Assets/profile.jpg";


function MsgText() {
  const id = JSON.parse(localStorage.getItem("user"))?.id;
  return (
    <div className="msg-container">
      <div className="MsgText d-flex gap-2 align-items-end mt-3">
        <div
          className="profile-image bg-image"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>
        <p className={`p-3 text-white`}>
          {
            "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً."
          }
        </p>
      </div>
    </div>
  );
}

export default MsgText;
