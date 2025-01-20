"use client";

import React, { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa6";
import { login } from "./actions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    let errors = { email: "", password: "" };

    if (!validateEmail(email)) {
      errors.email = "Invalid email address";
      valid = false;
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(errors);

    if (valid) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        await login(formData);
      } catch (error) {
        setErrors({ ...errors, password: "Fejl ved login, prøv igen" });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="md:h-lvh bg-base-200 h-dvh flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 p-10 rounded-lg shadow-lg flex flex-col gap-5"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-bold text-lg">Admin</span>
          <span className="text-sm">HH SERVICE</span>
        </div>
        <div className="flex flex-col gap-2 relative">
          <label className="input input-bordered flex items-center gap-2">
            <FaEnvelope />
            <input
              name="email"
              type="text"
              className="grow"
              placeholder="Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {errors.email && (
            <span className=" absolute -bottom-4 text-xs text-red-500">
              {errors.email}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 relative">
          <label className="input input-bordered flex items-center gap-2">
            <FaKey />
            <input
              name="password"
              type="password"
              className="grow"
              placeholder="Kodeord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {errors.password && (
            <span className="text-xs absolute -bottom-4 text-red-500">
              {errors.password}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-2"
          disabled={loading}
        >
          {loading ? "Logger ind..." : "Login"}
        </button>
      </form>
      <span className=" text-[9px] items-center justify-center p-4 absolute bottom-0">
        © Crafted by Marccode
      </span>
    </div>
  );
};

export default LoginPage;
