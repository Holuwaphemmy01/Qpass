// src/utils/verifyCivicToken.ts
import jwt, { JwtHeader, SigningKeyCallback } from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const client = jwksClient({
  jwksUri: 'https://auth.civic.com/.well-known/jwks.json',
});

function getKey(header: JwtHeader, callback: SigningKeyCallback) {
  client.getSigningKey(header.kid!, function (err, key) {
    const signingKey = key?.getPublicKey();
    callback(null, signingKey);
  });
}

export const verifyCivicToken = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, {}, (err, decoded) => {
      console.log('Decoded JWT:', decoded);
      if (err || !decoded) {
        console.log('Error decoding JWT:', err);
        return reject(err || new Error('Token could not be decoded.'));
      }
      resolve(decoded);
    });
  });
};
