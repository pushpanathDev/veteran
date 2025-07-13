"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AuthGuard from "../components/AuthGuard";
import { useAuth } from "../context/AuthContext";

// Firestore
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ProfilePage() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    veteranID: "",
    dob: "",
    aadhaar: "",
    serviceBranch: "",
  });

useEffect(() => {
  const fetchUserProfile = async () => {
    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setFormData({
            fullName: data.name || user.displayName || "",
            email: data.email || user.email || "",
            phone: data.phone || "",
            address: data.address || "",
            veteranID: data.veteranID || "",
            dob: data.dob || "",
            aadhaar: data.aadhaar || "",
            serviceBranch: data.serviceBranch || "",
          });
        } else {
          // fallback to auth data if doc doesn't exist
          setFormData((prev) => ({
            ...prev,
            fullName: user.displayName || "",
            email: user.email || "",
          }));
        }
      } catch (err) {
        console.error("❌ Failed to fetch Firestore user:", err);
      }
    }
  };

  fetchUserProfile();
}, [user]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("❌ No user logged in.");
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid);

      // ✅ Always update existing doc, merge true prevents overwrite of unspecified fields
      await setDoc(
        userRef,
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          veteranID: formData.veteranID,
          dob: formData.dob,
          aadhaar: formData.aadhaar,
          serviceBranch: formData.serviceBranch,
        },
        { merge: true } // <-- Important!
      );

      console.log("✅ Profile updated in Firestore.");
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("❌ Failed to save profile:", err);
    }
  };

  return (
    <AuthGuard>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-teal-100 to-blue-100 p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-10 border border-gray-200"
        >
          <h1 className="text-3xl font-extrabold text-teal-800 mb-4">
            Complete Your Profile
          </h1>
          <p className="text-gray-600 mb-8">
            Please provide your details to access all features.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name (editable) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              {/* Email (editable) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              {/* Rest fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Aadhaar Number
                </label>
                <input
                  name="aadhaar"
                  type="text"
                  value={formData.aadhaar}
                  onChange={handleChange}
                  required
                  maxLength={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Veteran ID
                </label>
                <input
                  name="veteranID"
                  type="text"
                  value={formData.veteranID}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Branch
                </label>
                <input
                  name="serviceBranch"
                  type="text"
                  value={formData.serviceBranch}
                  onChange={handleChange}
                  placeholder="Army, Navy, Air Force, etc."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition"
            >
              Save Profile
            </motion.button>
          </form>
        </motion.div>
      </main>
    </AuthGuard>
  );
}
