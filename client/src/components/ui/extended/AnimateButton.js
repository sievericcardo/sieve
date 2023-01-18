import { PropTypes } from "prop-types";
import { forwardRef } from "react";
import { motion, useCycle } from "framer-motion";

const AnimateButton = forwardRef(({ children, type, direction, offset, scale }, ref) => {
  let offset1;
  let offset2;

  switch (direction) {
    case 'up':
    case 'left':
      offset1 = offset;
      offset2 = 0;
      break;
    case 'down':
    case 'right':
    default:
      offset1 = 0;
      offset2 = offset;
      break;
  }

  const [x, cycleX] = useCycle(offset1, offset2);
  const [y, cycleY] = useCycle(offset1, offset2);

  switch (type) {
    case 'rotate':
      return (
        <motion.div
          ref={ref}
          whileHover={{ rotate: 360 }}
          whileTap={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2,
            repeatDelay: 0
          }}
        >
          {children}
        </motion.div>
      );
    case 'scale':
    case 'slide':
      if (direction === 'up' || direction === 'down') {
        return (
          <motion.div
            ref={ref}
            animate={{ y: y !== undefined ? y : '' }}
            onHoverStart={() => cycleY()}
            onHoverEnd={() => cycleY()}
          >
            {children}
          </motion.div>
        );
      }
      return (
        <motion.div
          ref={ref}
          animate={{ x: x !== undefined ? x : '' }}
          onHoverStart={() => cycleX()}
          onHoverEnd={() => cycleX()}
        >
          {children}
        </motion.div>
      );
    default:
      if (typeof scale === 'number') {
        scale = {
          hover: scale,
          tap: scale
        };
      }
      return (
        <motion.div
          ref={ref}
          whileHover={{ scale: scale?.hover }}
          whileTap={{ scale: scale?.tap }}
        >
          {children}
        </motion.div>
      );
  }
});

AnimateButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['rotate', 'scale', 'slide']),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  offset: PropTypes.number,
  scale: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

AnimateButton.defaultProps = {
  type: 'scale',
  direction: 'right',
  offset: 10,
  scale: {
    hover: 1.1,
    tap: 0.9
  }
};

export default AnimateButton;
