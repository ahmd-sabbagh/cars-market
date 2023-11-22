import { useState } from "react";
import "./CopyTextFun.css";
import { ReactComponent as Copy } from "./Assets/duplicate.svg";
import { trans } from "../Navbar/Navbar";

function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="CopyTextFun-Cont mt-5">
      <span className="mb-3 d-block">{trans("ads_details.copy")}</span>
      <div className="CopyTextFun d-flex align-items-center justify-content-between ">
        <input type="text" value={copyText} readOnly />
        {/* Bind our handler function to the onClick button property */}
        <button onClick={handleCopyClick}>
          <span>
            <Copy />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ClipboardCopy;
