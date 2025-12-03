import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const API_URL = "https://ia03-backend-96ta.onrender.com"; // Thay bằng backend URL khi deploy

const registerUser = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => setSuccess(true),
    onError: (err) => alert(err.response?.data?.message || "Error registering"),
  });

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-md w-full border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Sign Up
        </h2>

        {success ? (
          <p className="text-center text-emerald-400 text-lg mb-4">
            Registration successful! Please login.
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.email && (
                <p className="text-rose-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.password && (
                <p className="text-rose-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full font-bold hover:scale-105 transition shadow-lg disabled:opacity-50"
            >
              {mutation.isPending ? "Registering..." : "Register"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
