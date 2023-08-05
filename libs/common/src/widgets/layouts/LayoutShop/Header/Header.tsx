import { useDeviceType } from '../../../../shared';
import { HeaderContent } from './components';
import { headers } from 'next/headers';

export function Header() {
  const { isTouchDevice } = useDeviceType(headers);

  return <HeaderContent isTouchDevice={isTouchDevice} />;
}
