"use client";
import React from "react";
import supabase from "@/components/lib/supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Blog = () => {
  const [fetchError, setFetchError] = useState(null);
  const [posts, setPosts] = useState(null);
  const [didRemove, setDidRemove] = useState(false);
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };

  const RemovePost = async (id) => {
    const { data, error } = await supabase.from("Post").delete().match({ id });
    if (error) {
      alert(error.message);
    } else {
      setDidRemove(true);
      alert("Post Deleted");
    }
  };
  useEffect(() => {
    setDidRemove(false);
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("Post").select();
      if (error) {
        setFetchError("Problem fetching posts");
        setPosts(null);
        console.log(error);
      }
      if (data) {
        const responseData = data.map((post) => {
          return {
            id: post.id,
            title: post.title,
            description: post.description,
            created_at: formatDate(post.created_at),
            view: post.views,
            href: `/content/id=${post.id}`,
          };
        });
        setPosts(responseData);

        setFetchError(null);
      }
    };
    fetchPosts();
  }, [didRemove]);
  console.log(posts);
  // flex flex-wrap justify-center flex-col-2
  return (
    <div className="flex flex-wrap justify-center flex-col-2 xl:flex-row xl:justify-center xl:grid-rows-2  md:flex-col">
      {posts &&
        posts.map((post) => {
          return (
            <div className="flex items-center justify-center pb-5 p-5 transition hover:-translate-y-3">
              <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <div className="flex items-center ">
                    <p>{post.created_at}</p>
                    <p>ID# {post.id}</p>
                  </div>

                  <h2 class="card-title">{post.title}</h2>
                  <p>{post.description}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">
                      {" "}
                      <Link href={`contents/edit-blog/blog?id=${post.id}`}>
                        Edit
                      </Link>
                    </button>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn btn-error"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      Delete
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">DANGER!</h3>
                        <p className="py-4">
                          Are you sure you want to delete this post?
                        </p>
                        <div className="modal-action">
                          <form
                            method="dialog"
                            className=" p-1 inline-flex items-center gap-5"
                          >
                            {/* if there is a button in form, it will close the modal */}
                            <button
                              className="btn btn-error"
                              onClick={() => RemovePost(post.id)}
                            >
                              Delete
                            </button>
                            <button className="btn btn-primary">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Blog;
