// Display file
const FileCard = ({ file }) => {
  return (
    <tr>
      <td>{file.name}</td>
      <td>{file.added}</td>
      <td>{file.type}</td>
      <td>{file.size} KB</td>
    </tr>
  );
};

export default FileCard;
