import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    // Simulate login
    console.log("Login data:", data);
    setSuccess(true);
  };

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-md w-full border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Login
        </h2>

        {success ? (
          <p className="text-center text-emerald-400 text-lg mb-4">
            Login successful! Welcome back.
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
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full font-bold hover:scale-105 transition shadow-lg"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
