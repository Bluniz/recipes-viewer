import { useState } from 'react';

export const useError = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSetHasError = () => setHasError(true);
  const handleSetHasNotError = () => setHasError(false);

  const handleSetErrorMessage = (message: string) => setErrorMessage(message);

  return {
    hasError,
    errorMessage,
    handleSetErrorMessage,
    handleSetHasError,
    handleSetHasNotError,
  };
};
