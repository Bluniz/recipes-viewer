import { useState } from 'react';

export const useIsLoading = (initialValue: boolean = false) => {
  const [isLoading, setIsLoading] = useState(initialValue);

  const handleStartLoading = () => setIsLoading(true);
  const handleFinishLoading = () => setIsLoading(false);
  const handleToggleLoading = () => setIsLoading((prevState) => !prevState);

  return {
    isLoading,
    handleFinishLoading,
    handleStartLoading,
    handleToggleLoading,
  };
};
