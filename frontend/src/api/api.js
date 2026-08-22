const API_URL = "https://real-time-chat-app-j6pk.onrender.com";

export const getAuthHeaders = () => {
	const user = JSON.parse(localStorage.getItem("chat-user"));

	return {
		"Content-Type": "application/json",
		Authorization: `Bearer ${user?.token || ""}`,
	};
};

export default API_URL;