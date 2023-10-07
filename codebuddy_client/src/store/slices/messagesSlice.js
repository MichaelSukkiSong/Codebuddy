import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    language: '',
    framework: '',
    temperature: 1,
    messages: [{ id: nanoid(), type: 'TEXT', message: '' }],
    changedlanguage: '',
    searchby: '',
  },
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
    changeFramework(state, action) {
      state.framework = action.payload;
    },
    changeTemperature(state, action) {
      state.temperature = action.payload;
    },
    changeChangedLanguage(state, action) {
      state.changedlanguage = action.payload;
    },
    changeSearchBy(state, action) {
      state.searchby = action.payload;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    removeMessage(state, action) {
      const removedMessages = state.messages.filter((message) => {
        return message.id !== action.payload;
      });
      state.messages = removedMessages;
    },
    changeTypeMessage(state, action) {
      const typeChangedMessages = state.messages.map((message) => {
        if (message.id === action.payload) {
          message.type = message.type === 'TEXT' ? 'CODE' : 'TEXT';
        }
        return message;
      });
      state.messages = typeChangedMessages;
    },
    changeTextareaMessage(state, action) {
      const textareaChangedMessages = state.messages.map((message) => {
        if (message.id === action.payload.id) {
          message.message = action.payload.message;
        }
        return message;
      });
      state.messages = textareaChangedMessages;
    },
    clearMessage(state, action) {
      const message = state.messages.find((el) => el.id === action.payload.id);
      message.message = '';
    },
    clearMessages(state, action) {
      state.messages = [];
    },
    clearMessagesExceptOne(state, action) {
      state.messages = [{ id: nanoid(), type: 'TEXT', message: '' }];
    },
    clearAll(state, action) {
      state.messages = [];
      state.language = '';
      state.framework = '';
      state.temperature = 1;
    },
  },
});

export const {
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
} = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
