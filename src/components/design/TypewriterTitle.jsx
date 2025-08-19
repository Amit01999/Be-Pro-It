import { motion, useAnimate } from 'motion/react';
import { useEffect } from 'react';

export default function TypewriterTitle({
  sequences = [
    { text: 'Digital Solutions', deleteAfter: true },
    { text: 'Tech Experiences', deleteAfter: true },
    { text: 'Business Systems', deleteAfter: false },
  ],
  typingSpeed = 50,
  startDelay = 500,
  autoLoop = true,
  loopDelay = 2000,
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isActive = true;
    const typeText = async () => {
      const titleElement = scope.current?.querySelector('[data-typewriter]');
      if (!titleElement) return;

      while (isActive) {
        titleElement.textContent = '';
        await new Promise(r => setTimeout(r, startDelay));

        for (const sequence of sequences) {
          if (!isActive) break;

          // typing
          for (let i = 0; i < sequence.text.length; i++) {
            titleElement.textContent = sequence.text.slice(0, i + 1);
            await new Promise(r => setTimeout(r, typingSpeed));
          }

          if (sequence.pauseAfter) {
            await new Promise(r => setTimeout(r, sequence.pauseAfter));
          }

          // deleting
          if (sequence.deleteAfter) {
            await new Promise(r => setTimeout(r, 500));
            for (let i = sequence.text.length; i > 0; i--) {
              titleElement.textContent = sequence.text.slice(0, i);
              await new Promise(r => setTimeout(r, typingSpeed / 2));
            }
          }
        }

        if (!autoLoop) break;
        await new Promise(r => setTimeout(r, loopDelay));
      }
    };

    typeText();
    return () => {
      isActive = false;
    };
  }, [sequences, typingSpeed, startDelay, autoLoop, loopDelay, animate, scope]);

  return (
    <span
      ref={scope}
      className="inline-flex items-baseline min-w-[270px] leading-tight pb-1"
      // 👆 leading-tight + pb-1 keeps descenders visible
    >
      <motion.span
        data-typewriter
        className="inline-block border-r-2 border-cyan-400 animate-cursor whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {sequences[0].text}
      </motion.span>
    </span>
  );
}
