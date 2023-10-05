import './CustomCategoryPage.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFetchCategoryQuery } from '../../../store';

const CustomCategoryPage = () => {
  let { categoryId } = useParams();

  // const categories = useSelector((state) => state.messages.categories);
  // const filteredCategories = categories.filter(
  //   (category) => category.id === categoryId
  // );
  // const category = filteredCategories[0];

  const {
    data: category,
    isError,
    isLoading,
  } = useFetchCategoryQuery(categoryId);

  if (!category) {
    return (
      <div className="CustomCategoryPage__errormsg">
        Sorry, no category was found. Please make a fresh new category.
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
