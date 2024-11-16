'use server';

import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

interface DecodeTokenReturn {
  ok: boolean;
  error?: string;
  tokenDecoded?: TokenDecoded;
}

type TokenDecoded = {
  id: string;
  iat: number;
  exp: number;
};

interface VerifyTokenExpiredReturn {
  isTokenExpired: boolean;
  error?: string;
  tokenDecoded?: TokenDecoded;
}

export const decodeToken = async (): Promise<DecodeTokenReturn> => {
  try {
    const token = cookies().get('token')?.value ?? '';

    const tokenDecoded = jwtDecode<TokenDecoded>(token);
    if (!tokenDecoded) throw 'Invalid Authentication token';

    return { ok: true, tokenDecoded };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { ok: false, error: 'Invalid Token Authentication' };
  }
};

export const verifyTokenExpired =
  async (): Promise<VerifyTokenExpiredReturn> => {
    const { ok, tokenDecoded, error } = await decodeToken();
    if (!ok) return { isTokenExpired: true, error };

    const currentTime = Math.floor(Date.now() / 1000);

    return tokenDecoded!.exp < currentTime
      ? { isTokenExpired: true, error: 'Authentication Token expired' }
      : { isTokenExpired: false, tokenDecoded };
  };
