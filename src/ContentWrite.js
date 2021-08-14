import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import api from "./Utils/api";
function ContentWrite(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [contentShort, setContentShort] = useState("");
  const [thumnail, setThumnail] = useState("");
  const [categoryNews, setCategoryNews] = useState(null);
  const [categoryNewsList, setCategoryNewsList] = useState([]);

  useEffect(() => {
    //
    const data = async () => {
      const categoryNewsAPI = await api("categoryNews", "GET", null);
      setCategoryNewsList(categoryNewsAPI.data);
    };

    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const add = async () => {
    const data = {
      id: null,
      userNews: {
        id: "2000000000",
        firstName: "Trà",
        lastName: "Writer",
        birthday: "10-01-2001 00:00:00",
        sex: "Nam",
        email: "adminnews@gmail.com",
        phone: "0354114665",
        password: "8F4B4F8D10B7606B8F65F50259A4B3AC",
        codeEmail: "",
        codePhone: "",
        isVerifyEmail: 0,
        isVerifyPhone: 0,
        type: 1,
        timeCreated: "08-11-2021 13:58:01",
      },
      categoryNews: categoryNews,
      title: title,
      thumbnail: thumnail,
      describeSmall: contentShort,
      timeCreated: null,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      view: 0,
    };
    console.log(data);
    await api("news", "POST", data);

    console.log("success");
  };
  return (
    <div className="w-4/5 mx-auto my-2">
      <input
        type="text"
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeholder="Nội dung ngắn"
        value={contentShort}
        onChange={(e) => setContentShort(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
        placeholder="Ảnh thu nhỏ"
        value={thumnail}
        onChange={(e) => setThumnail(e.target.value)}
      />
      <select
        onChange={(e) => setCategoryNews(JSON.parse(e.target.value))}
        className="w-full p-3 rounded-full my-1 border-2 border-solid border-gray-200"
      >
        {categoryNewsList.map((item, index) => {
          return (
            <option value={JSON.stringify(item)} key={index}>
              {item.nameCategoryNews}
            </option>
          );
        })}
      </select>
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
      <button
        onClick={() => add()}
        className="w-full px-10 py-3 rounded-full bg-green-500 text-white font-bold my-2"
      >
        Thêm
      </button>
    </div>
  );
}

export default ContentWrite;
