import { decodeToken, TokenDecoded } from './decode-token';

interface ReturnValue {
  isTokenExpired: boolean;
  error?: string;
  tokenDecoded?: TokenDecoded;
}

export const verifyTokenExpired = async (): Promise<ReturnValue> => {
  const { ok, tokenDecoded, error } = await decodeToken();
  if (!ok) return { isTokenExpired: true, error };

  const currentTime = Math.floor(Date.now() / 1000);

  return tokenDecoded!.exp < currentTime
    ? { isTokenExpired: true, error: 'Authentication Token expired' }
    : { isTokenExpired: false, tokenDecoded };
};
