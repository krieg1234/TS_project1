import * as mock from './MockData';
import BaseController from './BaseController';

class AppointmentController extends BaseController {
  getPath(): string {
    return '/appointments';
  }

  getHandlers(): {
    path: string;
    handler: (params: mock.AppointParam) => {data:object};
  }[] {
    return [
      {
        path: '',
        handler: (params) => {
          return mock.getAppointments(params);
        },
      },
      {
        path: '/count',
        handler: (params) => {
          return mock.getAppointmentCount(params);
        },
      },
    ];
  }
}

export default new AppointmentController();
