import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthLayout from "./AuthLayout";
import Field from "./Field";

// Admin registration page. No API wired up yet — `handleSubmit` is the
// single place to plug in your real signup call once ready, e.g.:
// POST /api/admin/register, then either auto-login or redirect to /admin/login.
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (field) => (val) => setForm((f) => ({ ...f, [field]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      const msg = "Please fill in all fields.";
      setError(msg);
      toast.error(msg);
      return;
    }
    if (form.password.length < 8) {
      const msg = "Password must be at least 8 characters.";
      setError(msg);
      toast.error(msg);
      return;
    }
    if (form.password !== form.confirmPassword) {
      const msg = "Passwords do not match.";
      setError(msg);
      toast.error(msg);
      return;
    }

    setLoading(true);
    try {
      // TODO: replace with real API call once ready, e.g.:
      // const res = await fetch("/api/admin/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      // });
      // if (!res.ok) throw new Error("Could not create account.");

      toast.success("Account created — please sign in.");
      navigate("/admin/login");
    } catch (err) {
      const msg = err.message || "Something went wrong. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Admin Account"
      subtitle="Register to get access to the website admin dashboard."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/admin/login" className="text-orange-400 font-semibold hover:underline">
            Sign In
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        <Field label="Full Name" value={form.name} onChange={set("name")} placeholder="Paul D'Souza" required />

        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={set("email")}
          placeholder="you@acuitysoftwareservices.com"
          required
        />

        <Field
          label="Password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={set("password")}
          placeholder="At least 8 characters"
          required
          right={
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-slate-400 hover:text-slate-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          }
        />

        <Field
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          value={form.confirmPassword}
          onChange={set("confirmPassword")}
          placeholder="Re-enter your password"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg text-white font-semibold bg-orange-500 hover:bg-orange-600 transition disabled:opacity-60 mt-2"
        >
          {loading ? "Creating account…" : "Create Account"}
        </button>
      </form>
    </AuthLayout>
  );
}
