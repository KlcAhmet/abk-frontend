import { IUserInfo } from '~/server/dbModels';

export class CollectUsersInfo {
  constructor(private headers: any) {
  }

  getUserRemoteInfo(): IUserInfo {
    return {
      'cf-connecting-ip': this.headers['cf-connecting-ip']?.toString(),
      'cf-ipcountry': this.headers['cf-ipcountry']?.toString(),
      'cf-ray': this.headers['cf-ray']?.toString(),
      'sec-ch-ua': this.headers['sec-ch-ua']?.toString(),
      'sec-ch-ua-mobile': this.headers['sec-ch-ua-mobile']?.toString(),
      'sec-ch-ua-platform': this.headers['sec-ch-ua-platform']?.toString(),
      socket: this.headers?.socket?.remoteAddress?.toString(),
      'user-agent': this.headers['user-agent']?.toString(),
      'x-forwarded-for': this.headers['x-forwarded-for']?.toString(),
    };
  }
}
