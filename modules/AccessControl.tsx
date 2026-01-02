
import React, { useState } from 'react';

const AccessControl: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [lastCheck, setLastCheck] = useState<any>(null);

  const simulateScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setLastCheck({
        unit: 'Depto 1402 - Torre A',
        resident: 'Carlos Valdivia',
        status: 'CURRENT', // Al día
        timestamp: new Date().toLocaleTimeString(),
        type: 'RESIDENT'
      });
    }, 1500);
  };

  const logs = [
    { time: '14:25', unit: '1101A', type: 'Visitante', status: 'IN', person: 'Juan Pérez' },
    { time: '14:10', unit: '504B', type: 'Residente', status: 'IN', person: 'María Soto' },
    { time: '13:55', unit: '1402A', type: 'Proveedor', status: 'OUT', person: 'ChileExpress' }
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="p-8 text-center bg-slate-900 text-white">
          <div className="w-24 h-24 bg-indigo-500 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-2xl shadow-indigo-500/20">
            <i className={`fas fa-qrcode text-4xl ${scanning ? 'animate-pulse' : ''}`}></i>
          </div>
          <h3 className="text-2xl font-bold mb-2">Escanear Acceso</h3>
          <p className="text-slate-400 text-sm mb-6">Apunta la cámara al código QR dinámico del residente</p>
          <button
            onClick={simulateScan}
            disabled={scanning}
            className={`px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 ${
              scanning ? 'bg-slate-700 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 text-white'
            }`}
          >
            {scanning ? 'Escaneando...' : 'Iniciar Escáner'}
          </button>
        </div>

        {lastCheck && (
          <div className="p-6 border-t border-slate-100 animate-slideUp">
            <div className={`flex items-start gap-4 p-4 rounded-xl ${lastCheck.status === 'CURRENT' ? 'bg-emerald-50 border border-emerald-100' : 'bg-rose-50 border border-rose-100'}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${lastCheck.status === 'CURRENT' ? 'bg-emerald-600' : 'bg-rose-600'} text-white`}>
                <i className={`fas ${lastCheck.status === 'CURRENT' ? 'fa-check' : 'fa-times'}`}></i>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-bold text-slate-800 text-lg">{lastCheck.unit}</span>
                  <span className="text-xs font-bold text-slate-400 uppercase">{lastCheck.timestamp}</span>
                </div>
                <p className="text-slate-600 font-medium">{lastCheck.resident}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${lastCheck.status === 'CURRENT' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {lastCheck.status === 'CURRENT' ? 'Gastos al día' : 'Moroso'}
                  </span>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-bold uppercase">Residente</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                 <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold shadow-md hover:bg-emerald-500">Registrar ENTRADA</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Historial Reciente Portería</h3>
          <button className="text-indigo-600 text-xs font-bold hover:underline">Ver Todo</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                <th className="px-6 py-4">Hora</th>
                <th className="px-6 py-4">Unidad</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4">Persona</th>
                <th className="px-6 py-4">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {logs.map((log, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-medium text-slate-400">{log.time}</td>
                  <td className="px-6 py-4 font-bold text-slate-700">{log.unit}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">{log.type}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{log.person}</td>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${log.status === 'IN' ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {log.status === 'IN' ? 'ENTRADA' : 'SALIDA'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccessControl;
