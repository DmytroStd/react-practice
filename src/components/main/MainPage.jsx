import Header from '../header/Header';
import TransactionForm from 'components/transactionForm/TransactionForm';
import MainButtons from '../mainButtons/MainButtons';
import Categories from '../categories/Categories';
import { categoriesList } from '../../data/categoriesList';

const MainPage = ({ changePageHandler }) => {
  return (
    <>
      <Header title="expense sheet" />
      <main>
        <TransactionForm />
        <MainButtons changePageHandler={changePageHandler} />
        <Categories categoriesList={categoriesList} />
      </main>
    </>
  );
};

export default MainPage;
