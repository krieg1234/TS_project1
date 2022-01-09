import UrlPattern from 'url-pattern';
import { AppointmentType, AppointParam } from './MockData';

export default class BaseController {
  getPath(): string {
    return '';
  }

  getHandlers(): {
    path: string;
    handler: (params: AppointParam) => {data:object};
  }[] {
    return [];
  }

  handle(request: { url: string; params: AppointParam }) {
    const pattern = new UrlPattern(request.url);
    const handlers = this.getHandlers();
    handlers
      .filter((h) => pattern.match(h.path))
      
    const data=handlers.map((h) => h.handler(request.params));

    return {
      ...data
    }
  }
}
