import React from "react";

import { IconFooter } from './styleFooter'; 

interface FooterProps {
  icon: React.ReactNode;
}

export function FooterIcon(props: FooterProps) {
  return (
    <footer>
      <IconFooter >{props.icon}</IconFooter >
    </footer>
  );
}