// Display folder
const FolderCard = ({ folder }) => {
  return (
    <>
      <h2>Folder: {folder.name}</h2>
      <h3>{folder.type}</h3>
    </>
  );
};

export default FolderCard;
