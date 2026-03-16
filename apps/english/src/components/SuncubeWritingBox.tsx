import React from 'react';
import { WritingBox } from '@suncube/ui';

interface SuncubeWritingBoxProps {
  type: 'Notice' | 'Letter' | 'Invite' | 'Example';
  title: string;
  content: string;
  isSpeaking?: boolean;
  onSpeak?: () => void;
  ref?: React.Ref<HTMLDivElement>;
}

export function SuncubeWritingBox({ 
  title, 
  content, 
  isSpeaking, 
  onSpeak,
  ref 
}: SuncubeWritingBoxProps) {
  return (
    <WritingBox 
      title={title}
      content={content}
      isSpeaking={isSpeaking}
      onSpeak={onSpeak}
    />
  );
}
