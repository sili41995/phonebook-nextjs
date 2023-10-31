import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useSetQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (key, value) => {
    router.push(`${pathname}?${createQueryString(key, value)}`, {
      scroll: false,
    });
  };
};

export default useSetQueryString;
