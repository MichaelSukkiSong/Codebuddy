import './PlaygroundLayout.scss';
import { useEffect, useRef, useState } from 'react';
import {
  Outlet,
  useOutlet,
  useOutletContext,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { BsPlusCircle } from 'react-icons/bs';
import { BiMinusCircle } from 'react-icons/bi';
import { VscTriangleRight } from 'react-icons/vsc';
import Sidebar from '../Sidebar';
import Button from '../Button';
import ArrowAnimation from '../animations/ArrowAnimation';
import Arrow from '../Arrow';
import parseStringData from '../../utilities/parseStringData';
import {
  addMessage,
  removeMessage,
  changeTypeMessage,
  changeTextareaMessage,
  clearMessages,
  useAddResponseMutation,
  useFetchCategoriesQuery,
} from '../../store';
import useChat from '../../hooks/useChat';
import { extractObjectFromURL } from '../../utilities/extractObjectFromURL';

const PlaygroundLayout = () => {
  const codeRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);
  const sidebarRef = useRef(null);
  const pulloutRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathname = useOutlet().props.children.props.location.pathname;
  const pathObj = extractObjectFromURL(pathname);
  const { categoryId } = useParams();
  // console.log(pathObj);
  // console.log(categoryId);

  const { currentUser, error, isFetching } = useOutletContext();
  const [sendChat, { isError, isLoading, data }] = useChat(pathObj.name)();
  const [addResponse, results] = useAddResponseMutation();
  const { data: categories } = useFetchCategoriesQuery();
  //TODO

  const messages = useSelector(({ messages }) => {
    return messages;
  });

  useEffect(() => {
    if (sidebarWidth < 220) {
      sidebarRef.current.style.display = 'none';
      pulloutRef.current.style.display = 'block';
      pulloutRef.current.style.visibility = 'visible';
    }
  }, [sidebarWidth]);

  const isMessagesEmpty =
    messages.messages
      .map(({ message }) => {
        return message.trim();
      })
      .filter((el) => el !== '').length > 0
      ? false
      : true;

  let contentCode, contentText;
  if (isError) {
    contentCode = 'Error...';
    contentText = 'Error...';
  } else if (isLoading) {
    contentCode = '';
    contentText = '';
    codeRef.current.classList.add('loading-spinner-code');
    textRef.current.classList.add('loading-spinner-text');
  } else if (!data) {
    contentCode = '';
    contentText = '';
  } else {
    codeRef.current.classList.remove('loading-spinner-code');
    textRef.current.classList.remove('loading-spinner-text');

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
    sendChat({
      ...messages,
      categoryId: categoryId,
      categories: categories,
    });
  };

  const handleClearClick = () => {
    dispatch(clearMessages());
  };

  const onSaveClick = () => {
    addResponse({ response: data.results, section: data.section });
    navigate('/mycode');
  };

  const onResetClick = () => {
    navigate('/playground');

    window.location.reload();
  };

  const handleEnterKeyPress = (event) => {
    if (event.keyCode === 13) {
      sendChat(messages);
      inputRef.current.blur();
    }
  };

  const handleDragBarMouseDown = (e) => {
    // setSidebarWidth(300);
    setIsDragging(true);
    setStartX(e.clientX);
  };
  const handleDragBarMouseMove = (e) => {
    if (!isDragging) return;

    const offsetX = (e.clientX - startX) / 50;
    setSidebarWidth((prevWidth) => Math.max(0, prevWidth + offsetX));

    sidebarRef.current.style.width = sidebarWidth / 10 + 'rem';
  };
  const handleDragBarMouseUp = (e) => {
    setIsDragging(false);
  };
  const handleDragBarMouseLeave = (e) => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handlePulloutBtnClick = () => {
    sidebarRef.current.style.display = 'flex';
    setSidebarWidth(300);
    sidebarRef.current.style.width = 30 + 'rem';

    pulloutRef.current.style.display = 'none';
    pulloutRef.current.style.visibility = 'hidden';
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
            className="pg__textarea"
            rows={5}
            onChange={handleTextareaChange}
            placeholder="Enter a message here."
            onKeyDown={handleEnterKeyPress}
            ref={inputRef}
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
    <div
      className="playground"
      onMouseMove={handleDragBarMouseMove}
      onMouseUp={handleDragBarMouseUp}
      onMouseLeave={handleDragBarMouseLeave}
    >
      <div className="playground__sidebar" ref={sidebarRef}>
        <Sidebar categories={categories} currentUser={currentUser} />
        <div
          className="playground__sidebar-dragbar"
          onMouseDown={handleDragBarMouseDown}
        ></div>
      </div>
      <div
        className="playground__sidebar-pulloutBtn"
        ref={pulloutRef}
        onClick={handlePulloutBtnClick}
      >
        <div className="playground__sidebar-pulloutBtn--icon">
          <VscTriangleRight />
        </div>
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
                <textarea
                  value={contentCode}
                  readOnly
                  ref={codeRef}
                  className="pg__textarea"
                />
              </div>
              <div className="pg-section__content--output-text">
                <textarea
                  value={contentText}
                  readOnly
                  ref={textRef}
                  className="pg__textarea"
                />
              </div>
            </div>
          </div>
          <div className="pg-section__footer">
            <div className="pg-section__footer-left">
              <Button
                rounded
                secondary
                onClick={handleClearClick}
                style={{ marginRight: '2rem', width: '20rem' }}
              >
                Clear Messages
              </Button>
              <Button
                rounded
                primary
                onClick={handleSubmitClick}
                disabled={isMessagesEmpty || data}
                loading={isLoading}
              >
                Submit
              </Button>
            </div>
            <div className="pg-section__footer-right">
              {currentUser ? null : (
                <div className="pg-section__footer-right-promotext">
                  Become a member to <b>SAVE</b> your response 🙂&nbsp; &nbsp;
                  <Link to="/auth/login">Log in</Link>
                </div>
              )}
              {true ? (
                <Button
                  rounded
                  info
                  style={{ width: '14rem' }}
                  onClick={onResetClick}
                  disabled={!data}
                  loading={isLoading}
                >
                  Reset All
                </Button>
              ) : null}
              {currentUser ? (
                <Button
                  rounded
                  success
                  onClick={onSaveClick}
                  disabled={!data}
                  loading={isLoading}
                >
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
