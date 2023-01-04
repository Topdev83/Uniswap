import { PoolTokenType } from '../../impermax-router/interfaces';
import { formatUSD, formatAmount } from '../../utils/format';
import { useTokenIcon, useLendingPoolUrl } from '../../hooks/useUrlGenerator';
import { useSuppliedAmount, useSuppliedValue } from '../../hooks/useAccountData';
import { useSymbol } from '../../hooks/useData';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SupplyPosition(): JSX.Element {
  const symbolA = useSymbol(PoolTokenType.BorrowableA);
  const symbolB = useSymbol(PoolTokenType.BorrowableB);
  const suppliedAmountA = useSuppliedAmount(PoolTokenType.BorrowableA);
  const suppliedAmountB = useSuppliedAmount(PoolTokenType.BorrowableB);
  const suppliedValueA = useSuppliedValue(PoolTokenType.BorrowableA);
  const suppliedValueB = useSuppliedValue(PoolTokenType.BorrowableB);
  const tokenIconA = useTokenIcon(PoolTokenType.BorrowableA);
  const tokenIconB = useTokenIcon(PoolTokenType.BorrowableB);
  const lendingPoolUrl = useLendingPoolUrl();

  return (
    <Link
      to={lendingPoolUrl}
      className='position row'>
      <Col className='currency-name d-none d-sm-block'>
        <div className='combined'>
          <div className='currency-overlapped'>
            <img src={tokenIconA} />
            <img src={tokenIconB} />
          </div>
          {symbolA}/{symbolB}
        </div>
      </Col>
      <Col className='supply-balance-details'>
        <Row>
          <Col className='details-amount'>
            <div>
              <img
                className='currency-icon'
                src={tokenIconA} /> {formatAmount(suppliedAmountA)} {symbolA}
            </div>
            <div>
              <img
                className='currency-icon'
                src={tokenIconB} /> {formatAmount(suppliedAmountB)} {symbolB}
            </div>
          </Col>
          <Col className='details-value'>
            <div>{formatUSD(suppliedValueA)}</div>
            <div>{formatUSD(suppliedValueB)}</div>
          </Col>
        </Row>
      </Col>
    </Link>
  );
}
