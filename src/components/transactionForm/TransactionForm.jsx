const TransactionForm = () => {
  return (
    <form action="">
      <label>
        <p>date</p>
        <input type="date" />
      </label>
      <label>
        <p>time</p>
        <input type="time" />
      </label>
      <label>
        <p>Category</p>
        <input type="button" value={'food'} />
      </label>
      <label>
        <p>sum</p>
        <input type="text" placeholder="enter amount" />
      </label>
      <label>
        <p>currency</p>
        <input type="button" value={'uah'} />
      </label>
      <label>
        <input type="text" placeholder="comment" />
      </label>
    </form>
  );
};

export default TransactionForm;
