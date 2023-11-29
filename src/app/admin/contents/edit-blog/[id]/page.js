"use client";
import React, { useEffect } from "react";
import supabase from "@/components/lib/supabaseClient";
import EditMCE from "../EditMCE";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Loading from "@/components/loading-component/loading";
const page = (params) => {
  const searchParams = useSearchParams();
  const [isReady, setIsReady] = useState(false);
  const search = searchParams.get("id");
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const getBlog = async () => {
      const { data, error } = await supabase
        .from("Post")
        .select()
        .eq("id", search);

      if (error) {
        console.log(error);
      } else {
        if (data) {
          const responseData = data.map((post) => {
            return {
              id: post.id,
              title: post.title,
              description: post.description,
              created_at: post.created_at,
              href: `/content/id=${post.id}`,
              imageID: post.image_id,
              imageURL: post.image_url,
              tags: post.tags,
              content: post.content,
            };
          });
          setPosts(responseData);
          setIsReady(true);
        }
      }
    };
    getBlog();
  }, []);

  return (
    <div>
      {isReady ? (
        <div>
          <EditMCE data={posts} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default page;
