const MainButtons = ({ changePageHandler }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          changePageHandler('deduction');
        }}
      >
        expenses
      </button>
      <button
        type="button"
        onClick={() => {
          changePageHandler('income');
        }}
      >
        profit
      </button>
    </div>
  );
};

export default MainButtons;
