import './MycodePage.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineFileText } from 'react-icons/ai';
import { BiMinusCircle } from 'react-icons/bi';
import { SlMagnifier } from 'react-icons/sl';
import { useFetchResponsesQuery, useRemoveResponseMutation } from '../store';
import { requireAuth } from '../utilities/requireAuth';
import Dropdown from '../components/Dropdown';
import { parseContentStr, parseShortStr } from '../utilities/parseStr';

export const loader = async () => {
  await requireAuth();

  return null;
};

const MycodePage = () => {
  const [searchterm, setSearchterm] = useState('');
  const { data: responses, isFetching, isLoading } = useFetchResponsesQuery();
  const [removeResponse, results] = useRemoveResponseMutation();

  const searchby = useSelector((state) => state.messages.searchby);

  const searchOptions = [
    {
      label: 'Category',
      value: 'section',
    },
    {
      label: 'Content',
      value: 'content',
    },
    {
      label: 'Created',
      value: 'created',
    },
  ];

  const handleDeleteResponseClick = (response) => {
    removeResponse(response);
  };

  const handleSearchTermChange = (event) => {
    setSearchterm(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (!responses) return <div>Missing responses!</div>;

  const filteredResponses = responses.filter((response) => {
    // if (!response) return null;

    if (searchby === 'content') {
      return response.choices[0].message.content.includes(searchterm);
    } else if (searchby === 'created') {
      return new Date(response.created * 1000)
        .toLocaleString()
        .includes(searchterm);
    } else if (searchby === 'section') {
      return response.section.includes(searchterm);
    } else {
      return response;
    }
  });

  const renderedResponses = filteredResponses.map((response) => {
    // if (!response) return null;

    return (
      <div className="mycode__response" key={response._id}>
        <Link to={response._id} className="mycode__link">
          <div className="mycode__response--category">
            <div className="mycode__response--category-icon">
              <AiOutlineFileText />
            </div>
            <span>{response.section}</span>
          </div>
          <div className="mycode__response--content">
            {parseContentStr(response.choices[0].message.content)}
          </div>
          <div className="mycode__response--owner">
            {parseShortStr(response.userId)}
          </div>
          <div className="mycode__response--created">
            {new Date(response.created * 1000).toLocaleString()}
          </div>
        </Link>
        <div className="mycode__response--delete">
          <div className="mycode__response--delete-icon">
            <BiMinusCircle
              onClick={() => {
                handleDeleteResponseClick(response);
              }}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mycode">
      <header className="mycode__header"></header>
      <main className="mycode__main">
        <div className="mycode__response-box">
          <div className="mycode__response-box-menu">
            <div className="mycode__response-box-menu--dropdown">
              <Dropdown data={searchOptions} name="Search by" />
            </div>
            <div className="mycode__response-box-menu--searchbar">
              <input
                value={searchterm}
                onChange={handleSearchTermChange}
                className="mycode__response-box-menu--searchbar-input"
              />
              <div className="mycode__response-box-menu--searchbar-icon">
                <SlMagnifier />
              </div>
            </div>
          </div>
          <div className="mycode__response-box-label">
            <div className="mycode__response-box-label-category">Category</div>
            <div className="mycode__response-box-label-content">Content</div>
            <div className="mycode__response-box-label-owner">Owner</div>
            <div className="mycode__response-box-label-created">Created</div>
          </div>
          {renderedResponses}
        </div>
      </main>
    </div>
  );
};

export default MycodePage;
