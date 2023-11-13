"use client";
import { React, useState, useEffect } from "react";
import supabase from "../../components/lib/supabaseClient";

const login = () => {
  //create a use effect if user is logged in

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = supabase.auth.getUser().then((data) => {
      const getData = data.data;
      if (getData.user !== null) {
        window.location.href = "/admin";
      }
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //create a form handler for email and password

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(email, password, data, error);

    if (error) {
      alert(error.message);
    } else {
      alert("Login Successful");
      //move to admin page
      window.location.href = "/admin";
    }
  };

  const loginGit = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "github",
    });
    console.log(user, session, error);
  };

  return (
    <div className="my-24 text-center">
      <div className="text-2xl m-10">Login 🔐</div>

      <div className="flex justify-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleLogin}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>

              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>

              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <hr className="my-4" />
            <button
              onClick={loginGit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign In with Github
            </button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default login;
