import './CustomCategoryPage.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CustomCategoryPage = () => {
  let { categoryId } = useParams();

  const categories = useSelector((state) => state.messages.categories);
  const filteredCategories = categories.filter(
    (category) => category.id === categoryId
  );
  const category = filteredCategories[0];

  if (!category) {
    return (
      <div className="CustomCategoryPage__errormsg">
        Sorry, no category was found. Please try to make a fresh new category.
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
