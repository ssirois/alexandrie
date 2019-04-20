import { ArchiveHardDrive } from './ArchiveHardDrive';

describe('Archive Hard Drive', () => {
  describe('when no elements are available in base folder', () => {
    it('should have no item', () => {
      const archiveHardDrive = new ArchiveHardDrive('baseFolder');
      expect(archiveHardDrive.getFolders().length).toBe(0);
    });
  });

  describe('when one element is available in base folder', () => {
    it('should return one item', () => {
      const archiveHardDrive = new ArchiveHardDrive('folderWithOneItem');
      expect(archiveHardDrive.getFolders().length).toBe(1);
    });
  });
});
