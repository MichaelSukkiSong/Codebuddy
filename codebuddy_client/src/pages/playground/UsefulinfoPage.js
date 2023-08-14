import './UsefulinfoPage.scss';
import Menubar from '../../components/Menubar';

const UsefulinfoPage = () => {
  const languageData = [
    { label: 'javascript', value: 'javascript' },
    { label: 'java', value: 'java' },
    { label: 'python', value: 'python' },
    { label: 'php', value: 'php' },
    { label: 'ruby', value: 'ruby' },
    { label: 'C+', value: 'C+' },
  ];
  const frameworkOrlibrariesData = [
    { label: 'Reactjs', value: 'Reactjs' },
    { label: 'Angularjs', value: 'Angularjs' },
    { label: 'Django', value: 'Django' },
    { label: 'jQuery', value: 'jQuery' },
    { label: 'Spring', value: 'Spring' },
    { label: 'Flask', value: 'Flask' },
    { label: 'Laravel', value: 'Laravel' },
    { label: 'Expressjs', value: 'Expressjs' },
  ];

  const menubarItems = [
    {
      type: 'dropdown',
      data: languageData,
      name: 'Language',
      popupText:
        'Pick a programming language of your favor. Selected information willbe automatically provided to the AI.',
    },
    {
      type: 'dropdown',
      data: frameworkOrlibrariesData,
      name: 'Framework',
      popupText:
        'Pick a Framework or library of your favor. Selected information willbe automatically provided to the AI.',
    },
    {
      type: 'slider',
      name: 'Temperature',
      popupText:
        'Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model wil become deterministic and repetitive.',
    },
  ];

  return (
    <div className="pg-ui-section__menubar">
      <Menubar items={menubarItems} />
    </div>
  );
};

export default UsefulinfoPage;
