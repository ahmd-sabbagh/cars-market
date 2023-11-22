import React from "react";

function  ProfileImage() {
  const User = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="ProfileImage pb-3 d-flex align-items-center gap-2 position-relative">
      <div
        className="image rounded-circle bg-image"
        style={{ backgroundImage: `url(${User?.image})` }}
      ></div>
      <div className="info-id">
        <div className="name fs-16-600">
          {User?.name.split(" ").slice(0, 2).join(" ")}
        </div>
        <div className="email-or-mobile">{User?.email}</div>
      </div>
    </div>
  );
}

export default ProfileImage;
