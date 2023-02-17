import { createIcon } from '@universa11y/icon';
import { Root } from '../../styled-components/icon';

const DismissIcon = createIcon({
  Root,
  viewBox: '0 0 20 20',
  d: 'M7.14645 7.14645C7.34171 6.95118 7.65829 6.95118 7.85355 7.14645L10 9.29289L12.1464 7.14645C12.3417 6.95118 12.6583 6.95118 12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L10.7071 10L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L10 10.7071L7.85355 12.8536C7.65829 13.0488 7.34171 13.0488 7.14645 12.8536C6.95118 12.6583 6.95118 12.3417 7.14645 12.1464L9.29289 10L7.14645 7.85355C6.95118 7.65829 6.95118 7.34171 7.14645 7.14645ZM3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM6 4C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H14C15.1046 16 16 15.1046 16 14V6C16 4.89543 15.1046 4 14 4H6Z',
});

DismissIcon.displayName = 'DismissIcon';

export { DismissIcon };