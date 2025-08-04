
'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const useVisitor = () => {
  const [visitorId, setVisitorId] = useState<string>('');
  const [isReturning, setIsReturning] = useState<boolean>(false);

  useEffect(() => {
    let id = Cookies.get('harris_visitor_id');
    
    if (id) {
      setIsReturning(true);
    } else {
      id = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      Cookies.set('harris_visitor_id', id, { expires: 365 });
      setIsReturning(false);
    }
    
    setVisitorId(id);
  }, []);

  return { visitorId, isReturning };
};