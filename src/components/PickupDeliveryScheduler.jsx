import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PickupDeliveryScheduler() {
  const [pickupDate, setPickupDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);

  return (
    <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg shadow text-center">
      <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-100">📦 Pickup & 🚚 Delivery Scheduler</h3>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <div>
          <label className="block text-sm mb-1">Pickup Date & Time</label>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="dd/MM/yyyy h:mm aa"
            placeholderText="Select pickup date"
            className="px-3 py-2 rounded border"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Delivery Date & Time</label>
          <DatePicker
            selected={deliveryDate}
            onChange={(date) => setDeliveryDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="dd/MM/yyyy h:mm aa"
            placeholderText="Select delivery date"
            className="px-3 py-2 rounded border"
          />
        </div>
      </div>
    </div>
  );
}
