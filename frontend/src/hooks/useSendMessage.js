import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import API_URL from "../api/api";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		setLoading(true);

		try {
			const res = await fetch(
				`${API_URL}/api/messages/send/${selectedConversation._id}`,
				{
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ message }),
				}
			);

			const data = await res.json();

			if (data.error) {
				throw new Error(data.error);
			}

			setMessages((prevMessages) => [...prevMessages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};

export default useSendMessage;