import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from './apis/authApi';
import { chatApi } from './apis/chatApi';
import {
  messagesReducer,
  changeLanguage,
  changeFramework,
  changeTemperature,
  changeChangedLanguage,
  addMessage,
  removeMessage,
  changeTypeMessage,
  changeTextareaMessage,
  clearMessages,
  clearMessagesExceptOne,
  clearMessage,
  clearAll,
} from './slices/messagesSlice';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    messages: messagesReducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(chatApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchCurrentuserQuery } from './apis/authApi';
export {
  useSendChatHelpImplementationMutation,
  useSendChatCantRememberSyntaxMutation,
  useSendChatFindErrorMutation,
  useSendChatDataStructuresAndAlgorithmMutation,
  useSendChatWhatIsThisCodeDoingMutation,
  useSendChatMoreEfficiencyMutation,
  useSendChatUsefulInfoMutation,
  useSendChatShowTestCodeMutation,
  useSendChatChangeLanguageMutation,
} from './apis/chatApi';
export {
  store,
  changeLanguage,
  changeFramework,
  changeTemperature,
  changeChangedLanguage,
  addMessage,
  removeMessage,
  changeTypeMessage,
  changeTextareaMessage,
  clearMessages,
  clearMessagesExceptOne,
  clearMessage,
  clearAll,
};
