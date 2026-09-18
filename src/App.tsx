import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CareerArchive } from './components/CareerArchive';
import { BentoCompetencies } from './components/BentoCompetencies';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeDrawer } from './components/ResumeDrawer';
import { CheckCircle2 } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
}

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addNotification = useCallback((message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Fixed Header with Live Manila Clock */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onNotify={addNotification}
      />

      {/* Main Dossier Content */}
      <main style={{ flex: 1 }}>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onNotify={addNotification}
        />
        <About />
        <Services />
        <CareerArchive />
        <BentoCompetencies />
        <Process />
        <Contact
          onOpenResume={() => setIsResumeOpen(true)}
          onNotify={addNotification}
        />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Slide-Over Curriculum Vitae Drawer */}
      <ResumeDrawer
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onNotify={addNotification}
      />

      {/* Global Toast Notification System */}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map((toast) => (
            <div key={toast.id} className="toast">
              <CheckCircle2 size={16} color="var(--accent-gold)" />
              <span>{toast.message}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
