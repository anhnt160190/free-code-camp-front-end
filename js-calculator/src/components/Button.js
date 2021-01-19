export const Button = ({ button, onClickBtn }) => {
  return (
    <div
      id={button.id}
      onClick={() => onClickBtn(button.id)}
      style={{
        width: 32,
        height: 32,
        border: '1px solid #000',
        borderRadius: 5,
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>{button.value}</span>
    </div>
  );
};
