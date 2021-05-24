import cx from 'classnames';
import Rect1 from 'assets/rect1.svg';
import Rect2 from 'assets/rect2.svg';
import Rect3 from 'assets/rect3.svg';
import X1 from 'assets/x1.svg';
import X2 from 'assets/x2.svg';
import styles from './Shapes.module.scss';

const assets = [Rect1, Rect2, Rect3, X1, X2];

export const Shapes = () => (
  <>
    {assets.map((asset, index) => (
      <img key={index} src={asset} className={cx(styles.shape, styles[`shape-${index + 1}`])} alt={`shape-${index}`} />
    ))}
  </>
);
