import { useConfig } from "@midwayjs/hooks-core";
import sha256 from "js-sha256";
export function encrypt(data :string): string {
  const secret = useConfig('secret');
  console.log(secret);
  return sha256.sha256(data+secret);
}