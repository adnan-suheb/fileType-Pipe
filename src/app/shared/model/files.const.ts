export const filesArr:Array<Ifiles> = [
    {
      fileName: 'salary slip',
      fileType: 'Excel',
      fileSize: 31457280
    },
    {
      fileName: 'Form 16',
      fileType: 'Word',
      fileSize: 28457280
    },
    {
      fileName: 'Exp letter',
      fileType: 'Pdf',
      fileSize: 2457280
    },
    {
      fileName: 'Proposal',
      fileType: 'Word',
      fileSize: 6272000 // 6 MB in bytes
    },
    {
      fileName: 'Presentation',
      fileType: 'Powerpoint',
      fileSize: 12544000 // 12 MB in bytes
    },
    {
      fileName: 'Contract',
      fileType: 'Pdf',
      fileSize: 4710400 // 4.5 MB in bytes
    },
    {
      fileName: 'Report',
      fileType: 'Excel',
      fileSize: 9437184 // 9 MB in bytes
    },
    {
      fileName: 'Invoice',
      fileType: 'Word',
      fileSize: 2097152 // 2 MB in bytes
    },
    {
      fileName: 'Manual',
      fileType: 'Pdf',
      fileSize: 15728640 // 15 MB in bytes
    },
    {
      fileName: 'Data Sheet',
      fileType: 'Excel',
      fileSize: 10485760 // 10 MB in bytes
    },
    {
      fileName: 'Budget',
      fileType: 'Excel',
      fileSize: 18874368 // 18 MB in bytes
    },
    {
      fileName: 'Training Module',
      fileType: 'Powerpoint',
      fileSize: 7864320 // 7.5 MB in bytes
    },
    {
      fileName: 'Agreement',
      fileType: 'Pdf',
      fileSize: 8388608 // 8 MB in bytes
    },
    {
      fileName: 'Proposal 2',
      fileType: 'Word',
      fileSize: 5242880 // 5 MB in bytes
    },
    {
      fileName: 'Presentation 2',
      fileType: 'Powerpoint',
      fileSize: 14680064 // 14 MB in bytes
    }
  ];
  
export interface Ifiles{
    fileName: string;
    fileType: string;
    fileSize: number;
}
  