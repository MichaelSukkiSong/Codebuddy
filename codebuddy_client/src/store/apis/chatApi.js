import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import types from '../../utilities/types';

const chatApi = createApi({
  reducerPath: 'chat',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints(builder) {
    const createChatEndpoint = (path) => {
      return builder.mutation({
        query: (messages) => {
          return {
            url: `/api/chat/completions/${path}`,
            method: 'POST',
            body: {
              messages,
            },
          };
        },
      });
    };

    return {
      sendChatHelpImplementation: createChatEndpoint(types.helpimplementation),
      sendChatCantRememberSyntax: createChatEndpoint(types.cantremembersyntax),
      sendChatFindError: createChatEndpoint(types.finderror),
      sendChatDataStructuresAndAlgorithm: createChatEndpoint(
        types.datastructuresandalgorithm
      ),
      sendChatWhatIsThisCodeDoing: createChatEndpoint(
        types.whatisthiscodedoing
      ),
      sendChatMoreEfficiency: createChatEndpoint(types.moreefficiency),
      sendChatUsefulInfo: createChatEndpoint(types.usefulinfo),
      sendChatShowTestCode: createChatEndpoint(types.showtestcode),
      sendChatChangeLanguage: createChatEndpoint(types.changelanguage),
      sendChatCustom: createChatEndpoint(types.custom),
    };
  },
});

export const {
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
} = chatApi;
export { chatApi };
