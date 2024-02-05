import ItemIconSVG, { SVGTitle } from "@commons/ItemIconSVG";

const Fab = (props) => {
  const { onClick, className, icon, classNameIcon } = props;
  return (
    <div
      id="buttonAdd"
      className={
        className ?? "fixed bottom-16 right-10 rounded-full bg-orange-400 p-3"
      }
      onClick={onClick}
    >
      {icon ?? (
        <ItemIconSVG
          title={SVGTitle.IconPlus}
          className={classNameIcon ?? "w-5 h-5"}
        />
      )}
    </div>
  );
};
export default Fab;
