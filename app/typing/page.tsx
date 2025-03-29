'use client';
import { useState, useEffect } from 'react';

export default function TypingPage() {
  const [text, setText] = useState('');
  const [timer, setTimer] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [wpm, setWpm] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    
    if (!isTyping && e.target.value.length === 1) {
      setIsTyping(true);
    }
    
    const words = e.target.value.trim().split(/\s+/).length;
    const minutes = timer / 60;
    if (minutes > 0) {
      setWpm(Math.round(words / minutes));
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTyping) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTyping]);

  const handleReset = () => {
    setText('');
    setTimer(0);
    setIsTyping(false);
    setWpm(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
          Vietnamese Typing Practice
        </h1>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <div className="flex justify-between mb-4">
              <div className="text-gray-600">
                Time: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
              </div>
              <div className="text-gray-600">
                WPM: {wpm}
              </div>
            </div>
            
            <textarea
              className="w-full h-48 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-600"
              placeholder="Bắt đầu gõ tại đây..."
              value={text}
              onChange={handleTextChange}
            ></textarea>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-gray-600">
                Characters: {text.length}
              </div>
              <button
                onClick={handleReset}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}