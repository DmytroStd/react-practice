import { Component } from 'react';
import MainPage from './main/MainPage';
import TransactionHistoryPage from './transaction-history/TransactionHistoryPage';

export class App extends Component {
  state = {
    activePage: 'main',
  };

  changePageHandler = page => {
    this.setState({ activePage: page });
  };

  render() {
    return (
      <div>
        {this.state.activePage === 'main' ? (
          <MainPage changePageHandler={this.changePageHandler} />
        ) : (
          <TransactionHistoryPage
            transactionType={this.state.activePage}
            changePageHandler={this.changePageHandler}
          />
        )}
      </div>
    );
  }
}
