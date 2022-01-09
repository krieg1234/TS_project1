import * as mock from './MockData';
import appointmentController from './AppointmentController';

const RESPONSE_DELAY = 1000;

const ROUTING = {
  [appointmentController.getPath()]: appointmentController,
};

function getSuccessResponse(
  data: object,
  extraBodyProps: {
    data?: any;
  } = {},
  extraProps: { text?: string; error?: { code: number; message: string } } = {}
) {
  let body = { success: true, ...extraBodyProps };

  if (data) {
    body.data = data;
  }

  let resp = {
    body,
    ...extraProps,
    statusCode: 200,
  };

  resp.text = JSON.stringify(resp);
  return resp;
}

function getFailureResponse(
  code = 'error',
  message = 'Error',
  statusCode = 500
) {
  let resp = {
    body: {
      success: false,
      error: {
        code,
        message,
      },
    },
    statusCode: statusCode,
    text: '',
  };
  resp.text = JSON.stringify(resp);
  return resp;
}

class MockServer {
  service(request: { url: string; params: mock.AppointParam }) {
    return new Promise((resolve, reject) => {
      const { url } = request;
      setTimeout(() => {
        for (let path in ROUTING) {
          if (url.includes(path)) {
            const controller = ROUTING[path];

            if (controller) {
              resolve(getSuccessResponse(controller.handle(request)));
            } else {
              reject(
                getFailureResponse('resorse.not.found', 'Resorse is not found')
              );
            }
          }
        }
      }, RESPONSE_DELAY);
    });
  }
}

export default new MockServer();
