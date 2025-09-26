// src/App.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import me from "../../assets/me.png";
import Modal from '../Modal/Modal';
import { validationRules } from "../../utils/validated";
import { saveCustomerInfo } from "../../services/firebaseApi.js";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    await saveCustomerInfo(data); // Save to Firestore
    setSubmittedData(data); // Save submitted data
    reset();                // Reset form
    setIsModalOpen(false);  // Close modal
    toast.success("Request submitted successfully!"); // Show toast
  };

  const roles = ["Angular", 'React', "Backend Development(Node.js)", 'Express.js', "Full Stack Development", "Consulting"];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Toast Container */}
      <Toaster position="top-right" />
      {/* Top Badge */}
      <div className="flex items-center space-x-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="text-sm text-gray-600 font-medium">Available for work</span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-2">
        👋 Hello! I'm <span className="text-gray-900">DevRaj Thakur</span>
      </h1>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
        Software Developer
      </h2>
      <p className="text-gray-600 max-w-xl text-center mb-6">
        For startups to large organizations, transforming complex problems into simple solutions.
      </p>

      {/* Client Image */}
      <div className="flex items-center space-x-3 mb-6">
        <img className="w-20 h-20 rounded-full border-2 border-white" src={me} alt="me" />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          className="px-6 py-3 bg-white border border-gray-300 font-semibold rounded-lg hover:bg-gray-50"
          onClick={() => setIsModalOpen(true)}
        >
          Hire Me
        </button>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-semibold mb-6 text-center">Fill Your Info</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <input
                placeholder="Full Name"
                {...register("fullName", validationRules.fullName)}
                className="px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <input
                placeholder="Last Name"
                {...register("lastName", validationRules.lastName)}
                className="px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                {...register("email", validationRules.email)}
                className="px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <input
                placeholder="Phone"
                {...register("phone", validationRules.phone)}
                className="px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <select
                {...register("role", validationRules.role)}
                className="px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Role</option>
                {roles.map((role, idx) => (
                  <option key={idx} value={role}>{role}</option>
                ))}
              </select>
              {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-[#5e3dfa] text-white py-4 rounded-xl text-base font-bold hover:bg-[#4c32ce] transition duration-200"
            >
              Submit
            </button>
          </form>
        </Modal>

      </div>


    </div>
  );
}
