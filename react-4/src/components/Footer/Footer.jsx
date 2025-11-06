import "./Footer.css";
import { SubFooter } from "./SubFooter";

export const Footer = ({ lists, copyright }) => {
  return (
    <>
      <div className="footer">
        <img
          width="250px"
          alt="Viz Logo"
          src="https://assets.viz.com/assets/logo@2x-b76f649f933ea15f45147ff5445a2501c85c7f863ba0aba5ea7bec93c3272cc6.png"
        />
        {lists.map((list) => (
          <SubFooter orientation="footer-col" list={list} />
        ))}
      </div>
      <div>
        <SubFooter orientation="footer-row" list={copyright} />
      </div>
    </>
  );
};
