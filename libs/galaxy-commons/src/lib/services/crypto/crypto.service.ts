import { Injectable } from '@angular/core';
import { GlxCrytoServiceModule } from './crypto.module';
import crypto from 'crypto-js';

@Injectable({
  providedIn: GlxCrytoServiceModule
})
export class GlxCryptoService {
  private key = 'B418oe1BaAMHYH2KklfReoPnNC0d4iis';

  encrypt(toEncrypt: string) {
    return crypto.AES.encrypt(toEncrypt, this.key).toString();
  }

  decrypt(toDecrypt: string) {
    return toDecrypt ? crypto.AES.decrypt(toDecrypt, this.key).toString(crypto.enc.Utf8) : '';
  }

}
