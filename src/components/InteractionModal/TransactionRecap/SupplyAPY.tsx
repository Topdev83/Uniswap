import { Row, Col } from 'react-bootstrap';
import { PoolTokenType } from '../../../impermax-router/interfaces';
import usePoolToken from '../../../hooks/usePoolToken';
import { formatPercentage } from '../../../utils/format';
import { useNextSupplyAPY } from '../../../hooks/useData';

export default function SupplyAPY({ amount }: { amount: number }): JSX.Element | null {
  const poolTokenType = usePoolToken();
  // eslint-disable-next-line eqeqeq
  if (poolTokenType == PoolTokenType.Collateral) return null;

  // ray test touch <
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const supplyAPY = useNextSupplyAPY(amount);
  // ray test touch >

  return (
    <Row>
      <Col xs={6}>Supply APY:</Col>
      <Col
        xs={6}
        className='text-right'>{formatPercentage(supplyAPY)}
      </Col>
    </Row>
  );
}
