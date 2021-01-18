export const DrumPadItem = ({ drumPad, onClick }) => {
  return (
    <div
      className="drum-pad"
      id={`drum-pad-${drumPad.name}`}
      onClick={() => onClick(drumPad)}
      style={{
        width: 64,
        height: 64,
        border: '1px solid #000',
        borderRadius: 5,
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>{drumPad.name}</span>
      <audio id={drumPad.name} className="clip" src={drumPad.audio}></audio>
    </div>
  );
};
