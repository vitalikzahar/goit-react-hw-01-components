import PropTypes from 'prop-types';
import {
  Tabl,
  Head,
  Headtr,
  Headth,
  Bodytable,
  Bodytr,
  Bodytd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ lists }) => {
  console.log(lists);
  return (
    <Tabl>
      <Head>
        <Headtr>
          <Headth>Type</Headth>
          <Headth>Amount</Headth>
          <Headth>Currency</Headth>
        </Headtr>
      </Head>

      <Bodytable>
        {lists.map(list => (
          <Bodytr key={list.id}>
            <Bodytd>{list.type}</Bodytd>
            <Bodytd>{list.amount}</Bodytd>
            <Bodytd>{list.currency}</Bodytd>
          </Bodytr>
        ))}
      </Bodytable>
    </Tabl>
  );
};
TransactionHistory.propTypes = {
  lists: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
