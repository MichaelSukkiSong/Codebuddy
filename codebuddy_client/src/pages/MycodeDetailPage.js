import './MycodeDetailPage.scss';
import { useParams, Link } from 'react-router-dom';
import { BiSolidLeftArrow } from 'react-icons/bi';
import { requireAuth } from '../utilities/requireAuth';
import { useFetchResponseQuery } from '../store';

export const loader = async () => {
  await requireAuth();

  return null;
};

const MycodeDetailPage = () => {
  const { responseId } = useParams();
  const {
    data: response,
    isError,
    isLoading,
  } = useFetchResponseQuery(responseId);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="mycodeDetail">
      <header className="mycodeDetail__header"></header>
      <main className="mycodeDetail__main">
        <div className="mycodeDetail__main-box">
          <Link to=".." className="mycodeDetail__btn--link">
            <div className="mycodeDetail__btn">
              <BiSolidLeftArrow />
              <div className="mycodeDetail__btn--text">Back to All</div>
            </div>
          </Link>

          <div className="mycodeDetail__category">
            <label>Category</label>
            <input value={response.section} readOnly />
          </div>
          <div className="mycodeDetail__meta">
            <div className="mycodeDetail__owner">
              <label>Owner</label>
              <input value={response.userId} readOnly />
            </div>
            <div className="mycodeDetail__created">
              <label>Created</label>
              <input
                value={new Date(response.created * 1000).toLocaleString()}
                readOnly
              />
            </div>
          </div>
          <div className="mycodeDetail__content">
            <textarea value={response.choices[0].message.content} readOnly />
          </div>
        </div>
      </main>
      <footer className="mycodeDetail__footer"></footer>
    </div>
  );
};

export default MycodeDetailPage;
