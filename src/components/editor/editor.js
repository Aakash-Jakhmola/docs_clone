import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = () => {
  return (
    <div>
      <AceEditor mode="c_cpp" theme="monokai" />
    </div>
  );
};

export default Editor;
