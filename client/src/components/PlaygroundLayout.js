import './PlaygroundLayout.scss';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { BsPlusCircle } from 'react-icons/bs';
import { BiMinusCircle } from 'react-icons/bi';
import Sidebar from './Sidebar';
import Button from './Button';
import ArrowAnimation from './animations/ArrowAnimation';
import Arrow from './Arrow';
import parseStringData from '../utilities/parseStringData';
import {
  addMessage,
  removeMessage,
  changeTypeMessage,
  changeTextareaMessage,
  useSendChatHelpImplementationMutation,
  clearMessages,
} from '../store';

const PlaygroundLayout = () => {
  const dispatch = useDispatch();
  const [sendChatHelpImplementation, { isError, isLoading, data }] =
    useSendChatHelpImplementationMutation();

  const messages = useSelector((state) => {
    return state.messages;
  });

  let contentCode, contentText;
  if (isError) {
    contentCode = 'Error...';
    contentText = 'Error...';
  } else if (isLoading) {
    contentCode = 'Loading...';
    contentText = 'Loading...';
  } else if (!data) {
    contentCode = '';
    contentText = '';
  } else {
    contentCode = parseStringData(data.result.content)[0];
    contentText = parseStringData(data.result.content)[1];
  }

  const handleAddMessageClick = () => {
    const newMessage = { id: nanoid(), type: 'TEXT', message: '' };

    dispatch(addMessage(newMessage));
  };

  const handleDeleteMessageClick = (id) => {
    dispatch(removeMessage(id));
  };

  const handleTypeChange = (id) => {
    dispatch(changeTypeMessage(id));
  };

  const handleTextareaChange = (event) => {
    const id = event.target.parentElement.parentElement.dataset.msgid;
    dispatch(
      changeTextareaMessage({
        id: id,
        message: event.target.value,
      })
    );
  };

  const handleSubmitClick = () => {
    sendChatHelpImplementation(messages);
  };

  const handleClearClick = () => {
    dispatch(clearMessages());
  };

  const renderedMessages = messages.messages.map((message) => {
    return (
      <div className="pg-message" key={message.id} data-msgid={message.id}>
        <div
          className="pg-message__type"
          onClick={() => handleTypeChange(message.id)}
        >
          <div className="pg-message__type-text">{message.type}</div>
        </div>
        <div className="pg-message__input">
          <textarea
            rows={5}
            onChange={handleTextareaChange}
            placeholder="Enter a message here."
          />
        </div>
        <div className="pg-message__delete">
          <div className="pg-message__delete-icon">
            <BiMinusCircle
              onClick={() => handleDeleteMessageClick(message.id)}
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="playground">
      <div className="playground__sidebar">
        <Sidebar />
      </div>
      <div className="playground__outlet">
        <div className="pg-section">
          <Outlet />
          <div className="pg-section__content">
            <div className="pg-section__content--input">
              <div className="pg-message__box">
                {renderedMessages}
                <div
                  className="pg-message__add"
                  onClick={handleAddMessageClick}
                >
                  <div className="pg-message__add-icon">
                    <BsPlusCircle />
                  </div>
                  <span>Add message</span>
                </div>
              </div>
            </div>
            <div className="pg-section__content--arrow">
              {isLoading ? <ArrowAnimation /> : <Arrow />}
            </div>
            <div className="pg-section__content--output">
              <div className="pg-section__content--output-code">
                <textarea value={contentCode} readOnly />
              </div>
              <div className="pg-section__content--output-text">
                <textarea value={contentText} readOnly />
              </div>
            </div>
          </div>
          <div className="pg-section__footer">
            <div className="pg-section__footer-left">
              <Button
                rounded
                secondary
                onClick={handleClearClick}
                style={{ marginRight: '2rem' }}
              >
                Clear All Messages
              </Button>
              <Button rounded primary onClick={handleSubmitClick}>
                Submit
              </Button>
            </div>
            <div className="pg-section__footer-right">
              <Button rounded success>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundLayout;
