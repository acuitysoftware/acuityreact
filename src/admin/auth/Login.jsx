import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthLayout from "./AuthLayout";
import Field from "./Field";

// Admin login page. No API wired up yet — `handleSubmit` is the single
// place to plug in your auth call (e.g. POST /api/admin/login), store the
// returned token, then navigate to /admin.
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      const msg = "Please enter both email and password.";
      setError(msg);
      toast.error(msg);
      return;
    }

    setLoading(true);
    try {
      // TODO: replace with real API call once ready, e.g.:
      // const res = await fetch("/api/admin/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password, remember }),
      // });
      // if (!res.ok) throw new Error("Invalid email or password.");
      // const { token } = await res.json();
      // localStorage.setItem("admin_token", token);

      toast.success("Signed in successfully.");
      navigate("/admin");
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
      title="Admin Login"
      subtitle="Sign in to manage your website content."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link to="/admin/register" className="text-orange-400 font-semibold hover:underline">
            Register
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

        <Field
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@acuitysoftwareservices.com"
          required
        />

        <Field
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={setPassword}
          placeholder="••••••••"
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

        <div className="flex items-center justify-between mb-6 text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="rounded border-slate-300"
            />
            Remember me
          </label>
          <a href="#" className="text-orange-500 font-medium hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg text-white font-semibold bg-orange-500 hover:bg-orange-600 transition disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </AuthLayout>
  );
}
