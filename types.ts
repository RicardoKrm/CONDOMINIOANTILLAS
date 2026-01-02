
export type Role = 'ADMIN' | 'GUARD' | 'RESIDENT';

export interface CondoUnit {
  id: string;
  tower: string;
  number: string;
  proration_coefficient: number;
  status: 'CURRENT' | 'DELINQUENT';
  owner_name: string;
}

export interface AccessLog {
  id: string;
  unit_id: string;
  person_name: string;
  type: 'RESIDENT' | 'VISITOR' | 'PROVIDER';
  direction: 'IN' | 'OUT';
  timestamp: string;
  guard_id: string;
  is_authorized: boolean;
}

export interface ExpenseItem {
  id: string;
  category: string;
  sub_category: string;
  amount: number;
  distribution_type: 'GENERAL' | 'BY_TOWER' | 'BY_M2' | 'EXCLUSIVE';
  tower_id?: string;
  description: string;
  date: string;
  document_url?: string;
}

export interface Reservation {
  id: string;
  unit_id: string;
  area_name: string;
  start_time: string;
  end_time: string;
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
}

export interface Claim {
  id: string;
  unit_id: string;
  category: string;
  subject: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  is_anonymous: boolean;
  created_at: string;
}

export interface Parcel {
  id: string;
  unit_id: string;
  carrier: string;
  received_at: string;
  delivered_at?: string;
  status: 'IN_PORTERIA' | 'DELIVERED';
  photo_url?: string;
}
