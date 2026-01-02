
import React from 'react';

export const EXPENSE_CATEGORIES = [
  'Administración',
  'Mantenimiento',
  'Reparaciones',
  'Servicios Básicos (Agua/Luz)',
  'Seguridad',
  'Aseo e Higiene',
  'Fondo de Reserva'
];

export const DISTRIBUTION_TYPES = {
  GENERAL: 'Prorrateo General',
  BY_TOWER: 'Por Torre',
  BY_M2: 'Por Metros Cuadrados',
  EXCLUSIVE: 'Uso Exclusivo',
  MIXED: 'Mixto'
};

export const ROLE_LABELS = {
  ADMIN: { label: 'Administrador', icon: <i className="fas fa-user-shield"></i>, color: 'bg-indigo-600' },
  GUARD: { label: 'Conserjería/Guardia', icon: <i className="fas fa-user-secret"></i>, color: 'bg-emerald-600' },
  RESIDENT: { label: 'Residente', icon: <i className="fas fa-home"></i>, color: 'bg-sky-600' }
};
