import './PlaygroundLayout.scss';
import {
  Outlet,
  useOutlet,
  useOutletContext,
  useNavigate,
} from 'react-router-dom';
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
  clearMessages,
  useAddResponseMutation,
} from '../store';
import useChat from '../hooks/useChat';

const PlaygroundLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathname = useOutlet().props.children.props.match?.pathnameBase;
  const pathStr = pathname?.match(/\/([^/]+)$/)[1];
  const { currentUser, error, isFetching } = useOutletContext();

  const [sendChat, { isError, isLoading, data }] = useChat(pathStr)();
  const [addResponse, results] = useAddResponseMutation();

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
    // console.log('response data:', data);

    contentCode = parseStringData(data.results.choices[0].message.content)[0];
    contentText = parseStringData(data.results.choices[0].message.content)[1];
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
    sendChat(messages);
  };

  const handleClearClick = () => {
    dispatch(clearMessages());
  };

  const onSaveClick = () => {
    addResponse({ response: data.results, section: data.section });
    navigate('/mycode');
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
              {currentUser ? (
                <Button rounded success onClick={onSaveClick} disabled={!data}>
                  Save
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundLayout;
