export default function Home() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Welcome to User App
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Sign up or login to get started with our secure user registration
          system.
        </p>
        <div className="space-x-4">
          <a
            href="/signup"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full font-bold hover:scale-105 transition shadow-lg"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="px-8 py-3 bg-gray-700 text-white rounded-full font-bold hover:scale-105 transition shadow-lg"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
