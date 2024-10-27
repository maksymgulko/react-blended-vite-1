import style from './Statistics.module.css';

export const StatisticsItem = ({ item, icon: Icon }) => {
  return (
    <>
      <Icon size={40} />
      <span className={style.counter}>{item.total}</span>
      <p className={style.text}>{item.title}</p>
    </>
  );
};
