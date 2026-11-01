import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

interface Props {
  message: string | null;
}

export const Toast: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#22252e] border border-[#e5a855]/70 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
        <CheckCircle className="w-4 h-4 text-[#e5a855] shrink-0" />
        <span className="text-xs font-medium tracking-wide">{message}</span>
      </div>
    </div>
  );
};
