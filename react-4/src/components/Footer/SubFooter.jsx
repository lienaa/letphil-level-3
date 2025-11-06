export const SubFooter = ({ list, orientation }) => {
  return (
    <>
      <div className={orientation}>
        {list.map((item, index) => (
          <a key={index} href={item.link}>{item.text}</a>
        ))}
      </div>
    </>
  );
};