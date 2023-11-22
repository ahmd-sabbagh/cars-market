import React from "react";
import "./JoditEditor.css";
import { useRef } from "react";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { trans } from "../../../../Components/Navbar/Navbar";

function JoditEditorComponent() {
  const [content, setContent] = useState("");
  const editor = useRef(null);
  //   const config = {
  //     placeholder: "Start typing...",
  //     enableDragAndDropFileToEditor: true,
  //   };
  const config = {
    readonly: false,
    activeButtonsInReadOnly: ["source", "fullsize", "print", "about"],
    toolbarButtonSize: "middle",
    theme: "default",
    enableDragAndDropFileToEditor: true,
    saveModeInCookie: false,
    spellcheck: true,
    editorCssClass: false,
    triggerChangeEvent: true,
    direction: "ltr",
    language: "en",
    debugLanguage: false,
    i18n: "en",
    tabIndex: -1,
    toolbar: true,
    enter: "P",
    useSplitMode: false,
    colorPickerDefaultTab: "background",
    imageDefaultWidth: 200,
    height: 350,
    disablePlugins: ["paste", "stat"],
    events: {},
    textIcons: false,
    uploader: {
      insertImageAsBase64URI: true,
    },
    placeholder: "Start typing...",
    showXPathInStatusbar: false,
  };
  return (
    <div className="JoditEditor">
      <span className="d-block mb-3">{trans("add_ads_car.car_details")}</span>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        // tabIndex={1}
        // onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => setContent(newContent)}
      />
    </div>
  );
}

export default JoditEditorComponent;
