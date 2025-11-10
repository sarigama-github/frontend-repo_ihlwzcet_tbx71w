import React from 'react';
import { Calendar } from 'lucide-react';

const CalendarCTA = ({ label = 'Book a live demo', href = 'https://calendly.com/datagen-ai/demo' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-slate-200"
    >
      <Calendar className="h-4 w-4" />
      {label}
    </a>
  );
};

export default CalendarCTA;
