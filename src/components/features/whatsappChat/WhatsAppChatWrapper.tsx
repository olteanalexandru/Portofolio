'use client';

import React, { useEffect, useState } from 'react';
import { WhatsAppChat } from './WhatsAppChat';

export const WhatsAppChatWrapper = ({ phoneNumber }: { phoneNumber: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <WhatsAppChat phoneNumber={phoneNumber} />;
};
