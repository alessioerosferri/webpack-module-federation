import React from 'react';

export default function SayHelloFromSPA2({updateState}) {
  React.useEffect(()=>{
    updateState('state updated from spa2')
  }, [])
  return <h1>Hello from SPA2!</h1>;
}