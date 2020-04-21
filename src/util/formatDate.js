import { useState, useEffect } from 'react';

import {
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
  setMilliseconds,
} from 'date-fns';

import { utcToZonedTime } from 'date-fns-tz';

// import pt from 'date-fns/locale/pt';
import api from '../services/api';

async function verifyHour() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  /* const daysFormatted = useMemo(() => format(hour, 'i', { locale: pt }), [
    hour,
  ]);

  const hoursFormatted = useMemo(() => format(hour, 'h', { locale: pt }), [
    hour,
  ]); */

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('restaurants');

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map((hour) => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) => {
            return isEqual(parseISO(a.date), compareDate);
          }),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);
}

export default verifyHour;
