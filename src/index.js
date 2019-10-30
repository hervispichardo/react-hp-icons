import React from 'react';
import PropTypes from 'prop-types'
import Icons from './icons'

const Icon = ({ style, color, size, type, badge }) => {
  const styles = {
    svg: {
      verticalAlign: 'middle',
    },
    path: {
      fill: color,
    },
    badge: {
      fill: '#08798c',
    },
    circle: {
      fill: '#fff',
    },
  };

  const badgeNumber = badge > 8 ? 'plus' : badge;

  return (
    <div className="ripple">
      <svg
        style={{ ...styles.svg, ...style }}
        width={`${size}em`}
        preserveAspectRatio="xMinYMin meet"
        height={`${size}em`}
        viewBox="0 0 1024 1024"
      >
        <g>
          {
            type.path
              ? <path style={styles.path} d={type.path} />
              : type.markup
          }
          {
            (badge && badge.length) &&
            <g>
              <circle style={styles.circle} cx="310" cy="290" r="270" />
              <path style={styles.badge} d={Icons.badge[badgeNumber]} />
            </g>
          }
        </g>
      </svg>
    </div>
  );
};

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string.isRequired,
  badge: PropTypes.string,
};

Icon.defaultProps = {
  size: 1.8,
  color: '#444',
  badge: '',
};

export default Icon
export { Icons }
