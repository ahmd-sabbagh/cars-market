import { useState } from "react";
import { ReactComponent as Copy } from "./Assets/duplicate.svg";
import "./CopyTextFun.css";

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
    <div
      className={`CopyTextFun d-flex gap-3 align-items-center justify-content-between ${
        isCopied && "done"
      }`}
    >
      <div>{copyText}</div>
      <button onClick={handleCopyClick}>
        <span>
          <Copy />
        </span>
      </button>
    </div>
  );
}

export default ClipboardCopy;
