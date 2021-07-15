interface IResponse {
  data?: any, msg: string,  total?: number,count?: number,  code?: number
}

export function DataOk(data?:string,count?:number,total?:number): IResponse {
  return {
    data: data,
    count: count,
    total: total,
    msg:"成功",
    code:200
  };
}

export function Ok(message?:string): IResponse {
  return {
    msg:message,
    code:200
  };
}

export function Nok(msg?: string): IResponse {
  return {
    msg:msg,
    code: 500
  };
}
