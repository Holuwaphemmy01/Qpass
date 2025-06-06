import React, { useState, useEffect } from 'react';

type NotificationItem = {
  id: number;
  message: string;
  read: boolean;
  time: string;
};

const initialNotifications: NotificationItem[] = [
  { id: 1, message: 'Your turn is coming up in the Library Queue.', read: false, time: '2 mins ago' },
  { id: 2, message: 'You have joined the Cafeteria Queue.', read: false, time: '10 mins ago' },
  { id: 3, message: 'Admin Office Queue is now open.', read: true, time: '1 hour ago' },
];

interface NotificationProps {
  open: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ open, onClose }) => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selected, setSelected] = useState<NotificationItem | null>(null);

  // Prevent background scroll when modal is open (mobile-friendly)
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  const markAsRead = (id: number) => {
    setNotifications(notifications =>
      notifications.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications =>
      notifications.map(n => ({ ...n, read: true }))
    );
  };

  if (!open) return null;

  return (
    <>
      <div className="absolute right-0 mt-2 w-80 max-w-xs sm:max-w-sm bg-white rounded-lg shadow-lg z-50 border">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <span className="font-semibold text-blue-700">Notifications</span>
          <button
            className="text-xs text-blue-600 hover:underline"
            onClick={markAllAsRead}
          >
            Mark all as read
          </button>
        </div>
        <div className="max-h-72 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-gray-500 text-sm">No notifications.</div>
          ) : (
            notifications.map(n => (
              <div
                key={n.id}
                className={`flex items-start px-4 py-3 border-b last:border-b-0 cursor-pointer hover:bg-blue-50 ${
                  !n.read ? 'bg-blue-50' : ''
                }`}
                onClick={() => {
                  markAsRead(n.id);
                  setSelected(n);
                }}
              >
                <div className="flex-1">
                  <div className={`text-sm ${!n.read ? 'font-semibold text-blue-900' : 'text-gray-700'}`}>
                    {n.message}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                </div>
                {!n.read && (
                  <span className="ml-2 mt-1 w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                )}
              </div>
            ))
          )}
        </div>
        <button
          className="w-full py-2 text-center text-sm text-blue-700 hover:bg-blue-50 border-t"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      {/* Modal for notification details */}
      {selected && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 max-w-xs relative mx-2">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-2xl"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h4 className="text-lg font-semibold mb-2 text-blue-700">Notification</h4>
            <div className="text-gray-800 mb-2">{selected.message}</div>
            <div className="text-xs text-gray-500">{selected.time}</div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;