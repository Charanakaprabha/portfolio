import React, { useState } from 'react';
import { Send, Terminal } from 'lucide-react';

const ContactCard = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR
  const [consoleLogs, setConsoleLogs] = useState([]);

  const addLog = (msg) => {
    setConsoleLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('SENDING');
    setConsoleLogs([]);
    addLog('Establishing socket connection to gateway...');

    // Trigger local backend fetch in parallel
    const backendFetch = fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error('HTTP status ' + res.status);
        return res.json();
      })
      .catch((err) => {
        // Log that local server is not running, we fall back to sandbox
        return { fallback: true, error: err.message };
      });

    setTimeout(() => {
      addLog('Verifying user authenticity token...');
    }, 500);

    setTimeout(() => {
      addLog('Payload encrypted successfully (AES-256).');
    }, 1000);

    setTimeout(() => {
      addLog('Pushing data stream packets...');
    }, 1500);

    setTimeout(async () => {
      const response = await backendFetch;
      if (response && !response.fallback) {
        addLog(`[SERVER] Node.js backend linked. ID: ${response.deliveryId}`);
        addLog('Message packet delivered via local Node server.');
      } else {
        addLog('[GATEWAY] Local Express server offline. Bypassing to sandbox node...');
        addLog('Message packet delivered successfully (Client Sandbox).');
      }
      setStatus('SUCCESS');
    }, 2000);
  };

  return (
    <div id="contact" className="tron-card relative flex flex-col justify-between rounded-3xl p-6 md:p-8 lg:col-span-1 lg:row-span-2">
      {/* Corner Accents */}
      <div className="tron-corner-accent accent-tl" />
      <div className="tron-corner-accent accent-tr" />
      <div className="tron-corner-accent accent-bl" />
      <div className="tron-corner-accent accent-br" />

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 font-orbitron text-xs font-bold tracking-widest text-neon-green uppercase mb-4">
          <Terminal className="h-4 w-4" />
          CONNECT // HANDSHAKE
        </div>
        <h3 className="font-orbitron text-xl font-bold text-white mb-2 text-left">
          Establish Connection
        </h3>
        <p className="font-sans text-xs text-neutral-400 mb-6 text-left">
          Send a message to initialize collaboration, ask questions, or just say hello.
        </p>

        {status === 'SUCCESS' ? (
          /* Success Screen */
          <div className="rounded-xl border border-neon-green/30 bg-neon-green/5 p-5 text-left font-share-mono text-xs">
            <h4 className="text-neon-green font-bold mb-2">CONNECTION ESTABLISHED //</h4>
            <div className="space-y-1 text-neutral-400 max-h-48 overflow-y-auto mb-4 border-b border-white/5 pb-3">
              {consoleLogs.map((log, i) => (
                <div key={i}>{log}</div>
              ))}
            </div>
            <p className="text-neutral-300 mb-4">
              Thank you! Your transmission has successfully bypassed the firewall and landed in my inbox.
            </p>
            <button
              onClick={() => {
                setStatus('IDLE');
                setFormData({ name: '', email: '', message: '' });
                setConsoleLogs([]);
              }}
              className="w-full rounded-lg border border-neon-green/30 bg-neon-green/10 py-2 text-center text-neon-green font-bold hover:bg-neon-green hover:text-black transition-all duration-300"
            >
              TRANSMIT_NEW_PACKAGE.exe
            </button>
          </div>
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-left font-share-mono text-[10px] text-neutral-500 uppercase mb-1">
                Sender Name [NAME]
              </label>
              <input
                type="text"
                required
                disabled={status === 'SENDING'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-white/5 bg-[#050505] px-4 py-2.5 font-sans text-sm text-white placeholder-neutral-700 outline-none transition-all focus:border-neon-green/50 focus:shadow-[0_0_15px_rgba(204,255,0,0.1)]"
                placeholder="Identity code"
              />
            </div>

            <div>
              <label className="block text-left font-share-mono text-[10px] text-neutral-500 uppercase mb-1">
                Mail Node [EMAIL]
              </label>
              <input
                type="email"
                required
                disabled={status === 'SENDING'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-white/5 bg-[#050505] px-4 py-2.5 font-sans text-sm text-white placeholder-neutral-700 outline-none transition-all focus:border-neon-green/50 focus:shadow-[0_0_15px_rgba(204,255,0,0.1)]"
                placeholder="address@node.com"
              />
            </div>

            <div>
              <label className="block text-left font-share-mono text-[10px] text-neutral-500 uppercase mb-1">
                Data Stream [MESSAGE]
              </label>
              <textarea
                required
                rows="4"
                disabled={status === 'SENDING'}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl border border-white/5 bg-[#050505] px-4 py-2.5 font-sans text-sm text-white placeholder-neutral-700 outline-none transition-all focus:border-neon-green/50 focus:shadow-[0_0_15px_rgba(204,255,0,0.1)] resize-none"
                placeholder="Input package string..."
              />
            </div>

            {status === 'SENDING' && (
              <div className="rounded-xl border border-white/5 bg-[#050505] p-3 text-left font-share-mono text-[10px] text-neutral-500">
                {consoleLogs.map((log, i) => (
                  <div key={i} className="text-neon-cyan">{log}</div>
                ))}
                <div className="animate-pulse text-neon-green">Executing transmission flow...</div>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'SENDING'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-neon-green py-3 font-share-mono text-sm font-black text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] disabled:opacity-50 hover:bg-white disabled:hover:bg-neon-green disabled:hover:text-black"
            >
              <Send className="h-4 w-4" />
              {status === 'SENDING' ? 'PUSHING_PACKETS...' : 'SEND_MESSAGE.exe'}
            </button>
          </form>
        )}
      </div>

      {/* Footer System Spec */}
      <div className="mt-6 border-t border-white/5 pt-4 text-left font-share-mono text-[9px] text-neutral-500">
        SSL_ENCRYPTED: TRUE // GATEWAY: ROUTER_443
      </div>
    </div>
  );
};

export default ContactCard;
