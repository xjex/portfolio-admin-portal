"use client";
import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import supabase from "@/components/lib/supabaseClient";
import isUser from "@/components/hook/isUser";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
export default function MCE() {
  const { isProfileActive } = isUser();
  const [User, setUser] = useState(null); // [1] Create a reference to the editor
  const router = useRouter();
  const editorRef = useRef(null);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const apikey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;

  useEffect(() => {
    if (content !== null && title !== "" && description !== "") {
      save();
    } else {
      console.log("content is null");
    }
  }, [content, title, description]);

  const save = async () => {
    const { data, error } = await supabase.from("Post").insert([
      {
        title: title,
        description: description,
        content: content,
      },
    ]);
    console.log(data, error);
    toast.success("Upload Success!", {
      position: toast.POSITION.TOP_CENTER,
    });
    router.push(`/admin/contents/`);
  };

  const log = async () => {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
      console.log(title, description, content);
    } else {
      console.log("Editor not yet loaded");
    }
  };

  return (
    <>
      {/* write title */}

      <div className="m-10 p-10">
        <div className="flex items-center justify-center mb-10 text">
          <input
            type="text"
            placeholder="Title"
            className="border-2  rounded-lg w-1/2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* write description */}
        <div className="flex items-center justify-center mb-10 text">
          <textarea
            type="text"
            placeholder="Description"
            className="border-2  rounded-lg w-1/2"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

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
        <ToastContainer />
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-success" onClick={log}>
          Log editor content
        </button>
      </div>
    </>
  );
}
