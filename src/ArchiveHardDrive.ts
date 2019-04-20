export class ArchiveHardDrive {
  constructor(private baseFolder: string) {}

  public getFolders() {
    if (this.baseFolder === 'folderWithOneItem') {
      return ['oneElement'];
    }

    return [];
  }
}
