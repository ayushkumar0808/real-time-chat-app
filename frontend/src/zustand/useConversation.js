import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,

	setSelectedConversation: (selectedConversation) =>
		set({ selectedConversation }),

	messages: [],

	setMessages: (messages) =>
		set((state) => ({
			messages:
				typeof messages === "function"
					? messages(state.messages)
					: Array.isArray(messages)
					? messages
					: [],
		})),
}));

export default useConversation;