import { Request, Response, NextFunction } from 'express';
import { Montra } from './client';
import { MontraOptions } from './types';

export interface MontraRequest extends Request {
  montra?: Montra;
}

export const montraMiddleware = (options: MontraOptions) => {
  const montra = new Montra(options);
  
  return (req: MontraRequest, _res: Response, next: NextFunction) => {
    req.montra = montra;
    next();
  };
};
