import { CredentialTypes } from "../components/types/CredentialTypes";

interface Token {
  token: string;
}

export async function signup (credentials:CredentialTypes) {
  const response = await fetch(`/api/signup`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
  });
  if(response.status !== 200) throw new Error();
  const token: Token = await response.json();
  return token;
};

export async function signin (credentials:CredentialTypes) {
  const response = await fetch(`/api/login`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
  });
  if(response.status !== 200) throw new Error();
  const token: Token = await response.json();
  return token;
};