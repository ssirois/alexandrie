import * as React from 'react';

interface FolderListProps {
  folders?: string[];
}

export const FolderList: React.FunctionComponent<FolderListProps> = ({ folders = [] }) => {
  return (
    <ul data-testid="folder-list">
      {folders.map((folder, index) => (
        <li key={index}>{folder}</li>
      ))}
    </ul>
  );
};
