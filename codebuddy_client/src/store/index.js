import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from './apis/authApi';
import { chatApi } from './apis/chatApi';
import { responsesApi } from './apis/responsesApi';
import { categoriesApi } from './apis/categoriesApi';
import {
  messagesReducer,
  changeLanguage,
  changeFramework,
  changeTemperature,
  changeChangedLanguage,
  changeSearchBy,
  addMessage,
  removeMessage,
  changeTypeMessage,
  changeTextareaMessage,
  clearMessages,
  clearMessagesExceptOne,
  clearMessage,
  clearAll,
} from './slices/messagesSlice';
// import {
//   categoriesReducer,
//   addCategory,
//   removeCategory,
// } from './slices/categoriesSlice';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    messages: messagesReducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [responsesApi.reducerPath]: responsesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    // categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(chatApi.middleware)
      .concat(responsesApi.middleware)
      .concat(categoriesApi.middleware);
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
  useSendChatCustomMutation,
} from './apis/chatApi';
export {
  useFetchResponsesQuery,
  useFetchResponseQuery,
  useAddResponseMutation,
  useRemoveResponseMutation,
} from './apis/responsesApi';
export {
  useFetchCategoriesQuery,
  useFetchCategoryQuery,
  useAddCategoryMutation,
  useRemoveCategoryMutation,
} from './apis/categoriesApi';
export {
  store,
  changeLanguage,
  changeFramework,
  changeTemperature,
  changeChangedLanguage,
  changeSearchBy,
  addMessage,
  removeMessage,
  changeTypeMessage,
  changeTextareaMessage,
  clearMessages,
  clearMessagesExceptOne,
  clearMessage,
  clearAll,
};
