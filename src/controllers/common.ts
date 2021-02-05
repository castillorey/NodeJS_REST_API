import { Response } from 'express';
import { response_status_codes } from '../models/enums';

export function successResponse(message: string, Data: any, res: Response) {
  res.status(response_status_codes.success).json({
    Status: 'Success',
    Message: message,
    Data
  });
}

export function failureResponse(message: string, Data: any, res: Response) {
  res.status(response_status_codes.success).json({
    Status: 'Failure',
    Message: message,
    Data
  });
}

export function insufficientParameters(res: Response) {
  res.status(response_status_codes.bad_request).json({
    Status: 'Failure',
    Message: 'Insufficient parameters',
    Data: {}
  });
}

export function mongoError(err: any, res: Response) {
  res.status(response_status_codes.internal_server_error).json({
    Status: 'Failure',
    Message: 'MongoDB error',
    Data: err
  });
}