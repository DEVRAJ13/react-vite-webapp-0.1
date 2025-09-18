import { loginUser } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const dispatch = useDispatch();

    const handleLogin = async (data) => {
        try {
            const user = await loginUser(data.email, data.password);
            console.log("Logged in user:", user);
            dispatch(login({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
            }));
            navigate("/dashboard");
            // Handle successful login (e.g., redirect, show message)
        } catch (error) {
            console.error("Login error:", error);
            // Handle login error (e.g., show error message)
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center from-indigo-50 via-white to-purple-50 px-4">
            <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200">
                {/* Header */}
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
                    Sign In
                </h2>
                <p className="text-center text-gray-600 mb-6 text-sm">
                    Sign in to your account
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            className={`w-full rounded-xl border px-4 py-2.5 text-sm shadow-sm focus:ring-2 transition ${errors.email
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                                }`}
                        />
                        {errors.email && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className={`w-full rounded-xl border px-4 py-2.5 text-sm shadow-sm focus:ring-2 transition ${errors.password
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                                }`}
                        />
                        {errors.password && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                        <div className="text-right mt-1">
                            <a
                                href="/forgot-password"
                                className="text-xs text-indigo-600 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-transform shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center text-gray-400 text-sm">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-3">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login */}
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition shadow-sm">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
