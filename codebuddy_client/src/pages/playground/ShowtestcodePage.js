import './ShowtestcodePage.scss';
import Menubar from '../../components/Menubar';

const ShowtestcodePage = () => {
  const languageData = [
    { label: 'Javascript', value: 'javascript' },
    { label: 'Java', value: 'java' },
    { label: 'Python', value: 'python' },
    { label: 'Php', value: 'php' },
    { label: 'Ruby', value: 'ruby' },
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
    <div className="pg-stc-section__menubar">
      <Menubar items={menubarItems} />
    </div>
  );
};

export default ShowtestcodePage;
