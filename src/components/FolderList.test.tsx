import React = require('react');
import { getByTestId, getByText, render } from 'react-testing-library';
import { ArchiveHardDrive } from '../ArchiveHardDrive';
import { FolderList } from './FolderList';

describe('FolderList component', () => {
  describe('when only one root element is provided', () => {
    it('should display only that one root element', () => {
      const folderName = 'my-folder-name';

      const { container } = render(<FolderList folders={[folderName]} />);
      const folderList = getByTestId(container, 'folder-list');
      const firstChild = folderList.firstElementChild as HTMLElement;

      expect(folderList.children.length).toBe(1);
      expect(firstChild.textContent).toBe(folderName);
    });
  });
});
