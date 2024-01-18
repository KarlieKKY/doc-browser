// Display file
const FileCard = ({ file }) => {
  function sizeConvetor(fileSize) {
    if (fileSize >= 1024 ** 4) {
      return (fileSize / 1024 ** 4).toFixed(1) + " TB";
    } else if (fileSize >= 1024 ** 3) {
      return (fileSize / 1024 ** 3).toFixed(1) + " GB";
    } else if (fileSize >= 1024 ** 2) {
      return (fileSize / 1024 ** 2).toFixed(1) + " MB";
    } else if (fileSize >= 1024) {
      return (fileSize / 1024).toFixed(1) + " KB";
    } else {
      return fileSize + " B";
    }
  }

  return (
    <tr>
      <td>{file.name}</td>
      <td>{file.added}</td>
      <td>{file.type}</td>
      <td>{sizeConvetor(file.size)}</td>
    </tr>
  );
};

export default FileCard;
