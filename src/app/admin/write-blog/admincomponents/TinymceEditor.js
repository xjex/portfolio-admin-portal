"use client";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function MCE() {
  const editorRef = useRef(null);
  const apikey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div className="m-10 p-10">
        <Editor
          apiKey={apikey}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Write here...</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>

      <button onClick={log}>Log editor content</button>
    </>
  );
}
