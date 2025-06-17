export const forgotPassword = async ({ email, dateOfBirth, newPassword }) => {
  try {
    const response = await fetch(
      "http://localhost:5000/api/user/forgot-password",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, dateOfBirth, newPassword }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Password reset failed");
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error("🔐 Forgot Password Error:", error);
    return { success: false, message: error.message };
  }
};
