import {
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
} from '../store';

export default function useChat(pathStr) {
  switch (pathStr) {
    case 'cantremembersyntax':
      return useSendChatCantRememberSyntaxMutation;
    case 'finderror':
      return useSendChatFindErrorMutation;
    case 'datastructuresandalgorithm':
      return useSendChatDataStructuresAndAlgorithmMutation;
    case 'whatisthiscodedoing':
      return useSendChatWhatIsThisCodeDoingMutation;
    case 'moreefficiency':
      return useSendChatMoreEfficiencyMutation;
    case 'usefulinfo':
      return useSendChatUsefulInfoMutation;
    case 'showtestcode':
      return useSendChatShowTestCodeMutation;
    case 'changelanguage':
      return useSendChatChangeLanguageMutation;
    case 'custom':
      return useSendChatCustomMutation;
    default:
      return useSendChatHelpImplementationMutation;
  }
}
