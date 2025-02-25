import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { login } from '../services/api/api';
import { Navbar } from "../components/Navbar";
import background from "../../assets/backgrounds/background.png";

// Custom hook for form state management
const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return [values, handleChange];
};

export const Login = () => {
  const [formValues, handleChange] = useForm({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Regex for basic email validation
  const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formValues;

    // Enhanced validation for email and password
    if (!emailIsValid(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      await login(email, password);
      navigate('/login'); 
    } catch (err) {
      setError('Invalid email or password. Please try again.'); // Display error message
      console.error(err);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
          <div className="w-full max-w-[450px] space-y-8 rounded-md bg-black/75 p-4 shadow-lg transition-all duration-300 ease-in-out hover:bg-black/80 sm:p-8 md:p-10">
            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-[32px]">
              Sign In
            </h1>

            {/* Display error message */}
            {error && (
              <div className="text-sm text-red-500 text-center">
                {error}
              </div>
            )}

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Email or Phone Number Field */}
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder=" "
                    value={formValues.email}
                    onChange={handleChange}
                    className="peer h-12 w-full rounded bg-zinc-800 px-4 pt-4 text-base text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600 sm:h-14"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                  >
                    Email or phone number
                  </label>
                </div>

                {/* Password Field */}
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder=" "
                    value={formValues.password}
                    onChange={handleChange}
                    className="peer h-12 w-full rounded bg-zinc-800 px-4 pt-4 text-base text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600 sm:h-14"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-4 top-2 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
                  >
                    Password
                  </label>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="h-12 w-full rounded bg-red-600 text-base font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black sm:h-14"
              >
                Sign In
              </button>

              {/* Remember Me and Need Help */}
              <div className="flex flex-col space-y-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:text-sm">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-red-600 focus:ring-2 focus:ring-red-600 focus:ring-offset-black"
                  />
                  <label htmlFor="remember" className="text-zinc-400">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-zinc-400 hover:underline">
                  Need help?
                </a>
              </div>
            </form>

            {/* Additional Options */}
            <div className="space-y-4 text-zinc-400">
              {/* Use a Sign-In Code Button */}
              <button
                type="submit"
                className="h-12 w-full rounded bg-gray-500/25 text-base font-semibold text-white transition-colors hover:bg-gray-700/25 focus:outline-none focus:ring-2 focus:ring-gray-600/25 focus:ring-offset-2 focus:ring-offset-black sm:h-14"
              >
                Use a Sign-In Code
              </button>

              {/* Sign Up Link */}
              <p className="text-sm sm:text-base">
                New to Netflix?{" "}
                <a href="/signup" className="text-white hover:underline font-bold">
                  Sign up now
                </a>
              </p>

              {/* reCAPTCHA Notice */}
              <p className="text-[10px] sm:text-xs">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};