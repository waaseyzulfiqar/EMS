import React, { useState } from "react";

const Login = (props) => {

  const {handleLogin} = props

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password)

    setEmail('')
    setPassword('')
  }



  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="border-2 border-emerald-800 p-12 rounded">
        <h4 className="text-2xl font-semibold mb-24 tracking-tight">Log In</h4>
        <form onSubmit={handleSubmit} className="text-center">
          <div className="flex flex-col">
            <input
              required
              className="px-6 py-2 text-xl w-80 bg-transparent border-2 border-emerald-900 outline-none rounded-full mb-4"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              className="px-6 py-2 text-xl w-80 bg-transparent border-2 border-emerald-900 outline-none rounded-full mb-4"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between mt-8">
            <div className="flex gap-x-2">
              <input
                className="border border-emerald-900"
                type="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <p className="text-emerald-800 cursor-pointer">Forgot Password</p>
          </div>

          <div className="mt-10">
            <input
              className="bg-red-900 w-full py-2 rounded-full font-bold tracking-tight text-lg"
              type="submit"
              value="Log In"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
