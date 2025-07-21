import { useState, useEffect } from 'react';

interface TypewriterIntroProps {
  onComplete: () => void;
}

const TypewriterIntro = ({ onComplete }: TypewriterIntroProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Welcome to Bogle. More options, less fees. We do payments better.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      // Wait 1.5 seconds after typing completes, then fade out
      const completeTimeout = setTimeout(() => {
        onComplete();
      }, 1500);

      return () => clearTimeout(completeTimeout);
    }
  }, [currentIndex, fullText, onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center max-w-4xl mx-auto px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bogle-dark leading-tight">
          {currentText.split(' ').map((word, index) => {
            if (word.toLowerCase() === 'bogle.') {
              return (
                <span key={index} className="text-bogle-green">
                  {word}{' '}
                </span>
              );
            }
            return word + ' ';
          })}
          <span className="animate-pulse text-bogle-green">|</span>
        </h1>
      </div>
    </div>
  );
};

export default TypewriterIntro;