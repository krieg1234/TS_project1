const USER = 'Иванов Иван Ивановчи';

export type AppointmentType = {
  date: number;
  clientName: string;
  status: string;
  holderName: string;
  compliences: string;
  diagnosis: string;
};

export const appointments: AppointmentType[] = [
  {
    date: 1560422694514,
    clientName: 'Должанский Николай Сергеевич',
    status: 'Завершён',
    holderName: 'Иванов Иван Иванович',
    compliences: 'Боль в правом ухе',
    diagnosis: 'Застужено правое ухо',
  },
  {
    date: 1560422694514,
    clientName: 'Пертов Пётр Генадьевич',
    status: 'Завершён',
    holderName: 'Иванов Иван Иванович',
    compliences: 'Боль в горле',
    diagnosis: 'Ангина',
  },
];

export type AppointParam = {
  startDate?: number;
  endDate?: number;
  clientName?: string;
  onlyMe?: boolean;
};

export function getAppointments(params: AppointParam): {
  data: { appointmentsList: AppointmentType[] };
} {
  const { startDate, endDate, clientName, onlyMe } = params;

  return {
    data: {
      appointmentsList: appointments.filter((item) => {
        return startDate
          ? item.date >= startDate
          : true && endDate
          ? item.date <= endDate
          : true && clientName
          ? clientName.length > 2
            ? item.clientName.includes(clientName)
            : true
          : true && onlyMe
          ? item.holderName === USER
          : true;
      }),
    },
  };
}

export function getAppointmentCount(params: AppointParam): {
  data: { count: number };
} {
  // const { startDate, endDate, clientName, onlyMe } = params;

  return { data: { count: appointments.length } };
}
