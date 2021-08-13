import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function ContentWrite(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <div className="w-4/5 mx-auto my-2">
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorState={editorState}
        onEditorStateChange={(editorState) => setEditorState(editorState)}
      />

      <div className="w-full my-2 post">
        {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      </div>
    </div>
  );
}

export default ContentWrite;
