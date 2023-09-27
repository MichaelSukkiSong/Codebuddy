import { useParams } from 'react-router-dom';

const CustomCategoryPage = () => {
  let params = useParams();
  console.log(params);

  return (
    <div>
      <div>Your saved prompt</div>
      <div></div>
    </div>
  );
};

export default CustomCategoryPage;
