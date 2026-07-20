const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/**
 * Request JWT from Server
 */
export const requestJWT = async (user) => {
  const response = await fetch(`${API_BASE_URL}/auth/jwt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate JWT");
  }

  return response.json();
};