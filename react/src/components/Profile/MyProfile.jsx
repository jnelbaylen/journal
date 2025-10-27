const user = {
  name: 'Jane Doe',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fslSLvppeV6MdgVN0NgvNcH7EISPNRJ1c7F1Qld6Ff1DxbhI0uw_Yn3gq1y_ihUUzSg&usqp=CAU',
  imageSize: 150,
};

export default function MyProfile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
