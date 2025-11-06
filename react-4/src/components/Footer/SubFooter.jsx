export const SubFooter = ({ list, orientation }) => {
  return (
    <>
      <div className={orientation}>
        {list.map((item) => (
          <a href={item.link}>{item.text}</a>
        ))}
      </div>
    </>
  );
};