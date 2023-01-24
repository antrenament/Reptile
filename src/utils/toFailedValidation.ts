import { last } from 'lodash';
import Failed from '$application/Failed';

const general = ['/data', '/data/attributes'];

export default function toFailedValidation(response: any) {
  const messages: string[] = [];
  const errors: Record<string, string> = {};

  for (const error of response.errors) {
    if (general.includes(error.source?.pointer)) {
      messages.push(error.detail);
    } else {
      const splats = error.source?.pointer.split('/');
      const field = last(splats) as string;
      errors[field] = error.detail;
    }
  }

  return new Failed({
    type: 'validation',
    code: 422,
    message: messages.join(', '),
    meta: errors,
  });
}
