interface ProgressBarProps {
  bgcolor: string;
  completed: string | number;
}

function ProgressBar({ bgcolor, completed }: ProgressBarProps) {

  const containerStyles = {
    height: 20,
    width: '60%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div data-testid="progress-bar" style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
