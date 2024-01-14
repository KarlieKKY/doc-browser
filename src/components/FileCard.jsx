// Display file
const FileCard = ({ file }) => {
  return (
    <>
      <h2>{file.name}</h2>
      <h3>{file.added}</h3>
      <h3>{file.type}</h3>
    </>
  );
};

export default FileCard;
