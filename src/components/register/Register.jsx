import { useState } from "react";
import { registerUser } from "../../services/authService";
import { Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const user = await registerUser(email, password);
            console.log("Registered user:", user);
            // ✅ Handle successful register (e.g., redirect, toast)
        } catch (error) {
            console.error("Registration error:", error);
            // ❌ Handle register error
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center  from-indigo-50 via-white to-purple-50 px-4">
            <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200">
                {/* Header */}
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
                    Create Account
                </h2>
                <p className="text-center text-gray-600 mb-6 text-sm">
                    Create your account to get started !
                </p>

                {/* Form */}
                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-transform shadow-md"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center text-gray-400 text-sm">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-3">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Signup */}
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition shadow-sm">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Sign up with Google
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    {/* <a
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </a> */}
                    <Link
                        to="/login"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
