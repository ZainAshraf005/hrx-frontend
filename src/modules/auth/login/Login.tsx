import { HrAuth } from '@/assets/image';
import Image from 'next/image';
import React from 'react';

const Login: React.FC = () => {
  return (
    <>
      <div>Login</div>
      <Image src={HrAuth} alt="HR Auth" />
    </>
  );
};

export default Login;
