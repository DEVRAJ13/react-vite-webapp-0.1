import { useForm } from "react-hook-form";
import { fireSignupApi } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { validationRules } from "../../utils/validated";

export default function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }} = useForm();

    const passwordValue = watch("password", "");

    const handleRegister = async (data) => {
        try {
            const user = await fireSignupApi(data.email, data.password);
            console.log("Registered user:", user);
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center from-indigo-50 via-white to-purple-50 px-4">
            <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200">
                {/* Header */}
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
                    Create Account
                </h2>
                <p className="text-center text-gray-600 mb-6 text-sm">
                    Create your account to get started!
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", validationRules.email)}
                            className={`w-full rounded-xl border px-4 py-2.5 text-sm shadow-sm focus:ring-2 transition ${
                                errors.email
                                    ? "border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                            }`}
                        />
                        {errors.email && (
                            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
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
                            {...register("password", validationRules.password)}
                            className={`w-full rounded-xl border px-4 py-2.5 text-sm shadow-sm focus:ring-2 transition ${
                                errors.password
                                    ? "border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                            }`}
                        />
                        {errors.password && (
                            <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === passwordValue || "Passwords do not match",
                            })}
                            className={`w-full rounded-xl border px-4 py-2.5 text-sm shadow-sm focus:ring-2 transition ${
                                errors.confirmPassword
                                    ? "border-red-500 focus:ring-red-200"
                                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                            }`}
                        />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-transform shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Registering..." : "Register"}
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
