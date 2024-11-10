'use server';

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

interface ReturnValue {
  ok: boolean;
  error?: string;
  tokenDecoded?: TokenDecoded;
}

export type TokenDecoded = {
  id: string;
  iat: number;
  exp: number;
};

export const decodeToken = async (): Promise<ReturnValue> => {
  try {
    const token = cookies().get('token')?.value;

    if (!token) throw 'No Authentication token provided';

    const tokenDecoded = jwtDecode<TokenDecoded>(token);
    if (!tokenDecoded) throw 'Invalid Authentication token';

    return { ok: true, tokenDecoded };
  } catch (error) {
    return { ok: false, error: (error as Error).message };
  }
};
