import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import API_URL, { getAuthHeaders } from "../api/api";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);

			try {
				const res = await fetch(`${API_URL}/api/users`, {
					method: "GET",
					headers: getAuthHeaders(),
				});

				const data = await res.json();

				if (data.error) {
					throw new Error(data.error);
				}

				setConversations(Array.isArray(data) ? data : []);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};

export default useGetConversations;