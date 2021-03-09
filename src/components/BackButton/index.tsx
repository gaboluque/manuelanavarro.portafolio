import { FunctionComponent } from 'react';
import Link from 'next/link';

const BackButton: FunctionComponent<{ menuItem: string }> = ({ menuItem }) => {
  return (
    <Link href={'/?menu-item=' + menuItem}>
      <button className="back-button">Volver</button>
    </Link>
  );
};

export default BackButton;
