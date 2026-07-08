import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, Loader2 } from 'lucide-react';

export default function ThinkingTimeline({ steps = [], onComplete = null, isLoading = true }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  // Controlled stepping animation synchronized with API network loading state
  useEffect(() => {
    if (activeStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCompletedSteps((prev) => [...prev, activeStep]);
        setActiveStep((prev) => prev + 1);
      }, 950); // Duration per simulated thinking step
      return () => clearTimeout(timer);
    } else if (activeStep === steps.length - 1 && !isLoading) {
      const timer = setTimeout(() => {
        setCompletedSteps((prev) => [...prev, activeStep]);
        setActiveStep(steps.length);
        if (onComplete) {
          setTimeout(onComplete, 600); // Delay for visual transition satisfaction
        }
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [activeStep, isLoading, steps.length, onComplete]);

  return (
    <div className="space-y-6">
      {steps.map((stepObj, index) => {
        const isCompleted = completedSteps.includes(index);
        const isActive = activeStep === index;
        const text = typeof stepObj === 'string' ? stepObj : stepObj.step;

        return (
          <div key={index} className="relative flex items-start gap-4">
            {/* Connecting Vertical Line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute left-[15px] top-8 bottom-0 w-[2px] transition-colors duration-500 ${
                  isCompleted ? 'bg-cyan-500' : 'bg-neutral-800'
                }`}
                style={{ height: 'calc(100% - 8px)' }}
              />
            )}

            {/* Step Icon */}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
              <AnimatePresence mode="wait">
                {isCompleted ? (
                  <motion.div
                    key="completed"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
                  </motion.div>
                ) : isActive ? (
                  <motion.div
                    key="active"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  >
                    <Loader2 className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="inactive"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                  >
                    <Circle className="h-4 w-4 text-neutral-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Step Text */}
            <div className="flex-1 pt-0.5">
              <motion.p
                initial={{ opacity: 0.4 }}
                animate={{
                  opacity: isActive || isCompleted ? 1 : 0.4,
                  x: isActive ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`text-sm font-medium leading-relaxed ${
                  isCompleted
                    ? 'text-neutral-200'
                    : isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-neutral-500'
                }`}
              >
                {text}
              </motion.p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
