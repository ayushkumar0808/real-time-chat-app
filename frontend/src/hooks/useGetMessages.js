import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import API_URL, { getAuthHeaders } from "../api/api";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);

			try {
				const res = await fetch(
					`${API_URL}/api/messages/${selectedConversation._id}`,
					{
						method: "GET",
						headers: getAuthHeaders(),
					}
				);

				const data = await res.json();

				if (data.error) {
					throw new Error(data.error);
				}

				setMessages(Array.isArray(data) ? data : []);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) {
			getMessages();
		}
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};

export default useGetMessages;