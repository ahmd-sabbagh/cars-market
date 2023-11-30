import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { trans } from "../../../../Components/Navbar/Navbar";
import { ReactComponent as Search } from "./Assets/search.svg";
import { ReactComponent as Chat } from "./Assets/chat-alt.svg";
import { ReactComponent as Plus } from "./Assets/plus.svg";
import { useState } from "react";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { useRecoilState } from "recoil";
import { LoaderState } from "../../../../Recoil/All/Loader";
import {
  haragMainData,
  marketExistStatus,
} from "../Filter/GlopalStateRecoil/AllData";
import { ErrorComponent, SuccsesComponent } from "../../../../Others/Error";

function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [loader, setLoader] = useRecoilState(LoaderState);
  const [data, setData] = useRecoilState(haragMainData);
  const [exist, setExist] = useRecoilState(marketExistStatus);
  const [name, setName] = useState("");
  // Function onSubmit
  const onsubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(
        `${basedDomin}/shop/ads`,
        { name },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data.data.data);
      setLoader(false);
      if (data.data.data.length === 0) {
        setExist(false);
      } else {
        setExist(true);
      }
    } catch (error) {
      ErrorComponent(error, navigate);
      setLoader(false);
    }
  };
  // Save Filter Submit
  return (
    <div className="Header mb-4">
      <div className="d-flex align-items-center flex-wrap gap-4 justify-content-between">
        <form
          onSubmit={onsubmit}
          className="flex-grow-1  d-flex r-10 overflow-hidden"
        >
          <div className="search d-flex align-items-center gap-2 p-3 bg-white full-width">
            <span>
              <Search />
            </span>
            <input
              className="border-0 bg-transparent full-width"
              placeholder={trans("cars_market.body.search")}
              type="search"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="fs-16-600 border-0 bg-green px-3 text-white"
          >
            {trans("cars_market.body.search_icon")}
          </button>
        </form>
        <Link
          to={"/my-profile/harag-message"}
          className="flex-c gap-2 message bg-green text-white fit-content r-10"
        >
          <span>
            <Chat />
          </span>
          {trans("cars_market.body.market_message")}
        </Link>
        <Link
          to={"/add-ad"}
          className="flex-c gap-2 yellow fit-content r-10 text-white"
        >
          <span>
            <Plus />
          </span>
          {trans("cars_market.body.add_ads")}
        </Link>
      </div>
    </div>
  );
}

export default Header;
