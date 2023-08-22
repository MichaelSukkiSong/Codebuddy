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
    default:
      return useSendChatHelpImplementationMutation;
  }
}
