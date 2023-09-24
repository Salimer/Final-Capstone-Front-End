import React from 'react';
import MotorList from '../motor/MotorList';

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center align-center">
      <MotorList />
    </div>
  );
}
