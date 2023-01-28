import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useTheme } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';

const SubCard = forwardRef(({ children, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others }, ref) => {
  const theme = useTheme();

  return (
    <Card
      ref={ref}
      sx={{
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '12px',
        ':hover': {
          boxShadow: '0px 0px 12px -3px #000',
        },
        ...sx,
      }}
      {...others}
    >
      {/* Header and action */}
      {!darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />}
      {darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5" sx={{ color: 'text.primary' }}>{title}</Typography>} action={secondary} />}

      {/* Divider */}
      {title && (
        <Divider 
          sx={{
            opacity: 1,
            borderColor: theme.palette.primary.light,
          }}
        />
      )}

      {/* Content */}
      {content && (
        <CardContent
          sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
          {children}
        </CardContent>
      )}
      {!content && children}
    </Card>
  );
});

SubCard.propTypes = {
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  darkTitle: PropTypes.bool,
  sx: PropTypes.object,
  contentSX: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
};

SubCard.defaultProps = {
  content: true,
};

export default SubCard;
