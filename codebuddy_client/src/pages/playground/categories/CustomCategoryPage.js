import './CustomCategoryPage.scss';
import { useParams } from 'react-router-dom';
import { useFetchCategoryQuery } from '../../../store';

const CustomCategoryPage = () => {
  let { categoryId } = useParams();

  const {
    data: category,
    isError,
    isLoading,
  } = useFetchCategoryQuery(categoryId, {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
  });

  if (!category) {
    return (
      <div className="CustomCategoryPage__errormsg">
        Sorry, no category prompt was found. Please press F5 to refresh and try
        again.
      </div>
    );
  }

  return (
    <div className="CustomCategoryPage">
      <div className="CustomCategoryPage__title">Prompt</div>
      <textarea
        disabled
        className="CustomCategoryPage__prompt"
        value={category.prompt}
      />
    </div>
  );
};

export default CustomCategoryPage;
